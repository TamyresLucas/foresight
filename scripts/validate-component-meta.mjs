#!/usr/bin/env node
/**
 * validate-component-meta.mjs
 *
 * Validates all component.meta.json files under:
 *   packages/design-system/src/components/ui/*.meta.json
 *
 * Rules (D3-A schema lint):
 *   1. File must be valid JSON.
 *   2. Required fields present: componentId, description, useCases, keywords
 *   3. Correct types:
 *      - componentId: non-empty string
 *      - description: non-empty string
 *      - useCases: string[] with at least 1 non-empty item
 *      - keywords: string[] (can be empty; if items exist, none may be empty)
 *   4. componentId must match the filename (without .meta.json suffix).
 *
 * Exit codes:
 *   0 — all files pass
 *   1 — one or more files failed validation
 */

import { readFileSync, readdirSync } from 'fs';
import { join, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const META_GLOB_DIR = join(__dirname, '..', 'packages', 'design-system', 'src', 'components', 'ui');

// ─── Helpers ────────────────────────────────────────────────────────────────

function isNonEmptyString(v) {
  return typeof v === 'string' && v.trim().length > 0;
}

function isStringArray(v) {
  return Array.isArray(v) && v.every((item) => typeof item === 'string');
}

function isStringArrayWithNoEmptyItems(v) {
  return isStringArray(v) && v.every((item) => item.trim().length > 0);
}

// ─── Validate a single meta file ────────────────────────────────────────────

function validateMetaFile(filePath) {
  const errors = [];
  const fileName = basename(filePath); // e.g. "button.meta.json"
  const expectedComponentId = fileName.replace(/\.meta\.json$/, ''); // e.g. "button"

  // Rule 1 — valid JSON
  let meta;
  try {
    const raw = readFileSync(filePath, 'utf-8');
    meta = JSON.parse(raw);
  } catch (e) {
    errors.push(`[JSON] Invalid JSON: ${e.message}`);
    return errors; // can't continue without parsed object
  }

  // Rule 2 + 3 — required fields and types
  if (!isNonEmptyString(meta.componentId)) {
    errors.push('[componentId] Must be a non-empty string.');
  }

  if (!isNonEmptyString(meta.description)) {
    errors.push('[description] Must be a non-empty string.');
  }

  if (!Array.isArray(meta.useCases)) {
    errors.push('[useCases] Must be an array of strings.');
  } else if (meta.useCases.length === 0) {
    errors.push('[useCases] Must contain at least 1 item.');
  } else if (!isStringArrayWithNoEmptyItems(meta.useCases)) {
    errors.push('[useCases] All items must be non-empty strings.');
  }

  if (!Array.isArray(meta.keywords)) {
    errors.push('[keywords] Must be an array of strings.');
  } else if (!isStringArray(meta.keywords)) {
    errors.push('[keywords] All items must be strings.');
  } else if (meta.keywords.length > 0 && !isStringArrayWithNoEmptyItems(meta.keywords)) {
    errors.push('[keywords] If items are present, none may be empty strings.');
  }

  // Rule 4 — componentId matches filename
  if (typeof meta.componentId === 'string' && meta.componentId !== expectedComponentId) {
    errors.push(
      `[componentId] Mismatch: file is "${fileName}" but componentId is "${meta.componentId}" (expected "${expectedComponentId}").`
    );
  }

  return errors;
}

// ─── Main ────────────────────────────────────────────────────────────────────

function main() {
  let metaFiles;
  try {
    metaFiles = readdirSync(META_GLOB_DIR)
      .filter((f) => f.endsWith('.meta.json'))
      .map((f) => join(META_GLOB_DIR, f))
      .sort();
  } catch (e) {
    console.error(`❌ Could not read directory: ${META_GLOB_DIR}`);
    console.error(e.message);
    process.exit(1);
  }

  if (metaFiles.length === 0) {
    console.log('⚠️  No *.meta.json files found. Nothing to validate.');
    process.exit(0);
  }

  console.log(`🔍 Validating ${metaFiles.length} component.meta.json file(s)...\n`);

  let totalErrors = 0;
  const failedFiles = [];

  for (const filePath of metaFiles) {
    const rel = filePath.replace(join(__dirname, '..') + '/', '');
    const errors = validateMetaFile(filePath);

    if (errors.length === 0) {
      console.log(`  ✅ ${rel}`);
    } else {
      console.log(`  ❌ ${rel}`);
      for (const err of errors) {
        console.log(`       ${err}`);
      }
      totalErrors += errors.length;
      failedFiles.push(rel);
    }
  }

  console.log('');

  if (totalErrors === 0) {
    console.log(`✅ All ${metaFiles.length} file(s) passed validation.`);
    process.exit(0);
  } else {
    console.log(
      `❌ Validation failed: ${totalErrors} error(s) in ${failedFiles.length} file(s):`
    );
    for (const f of failedFiles) {
      console.log(`   - ${f}`);
    }
    process.exit(1);
  }
}

main();
