#!/usr/bin/env bash
set -euo pipefail

LOG=/tmp/qa-6x-run.log
echo "QA 6.x - Validação Final" > "$LOG"

echo "1) Build" >> "$LOG"
if npm run build --silent >> "$LOG" 2>&1; then
  echo "BUILD: PASS" >> "$LOG"
else
  echo "BUILD: FAIL" >> "$LOG"
  cat "$LOG"; exit 1
fi

echo "2) Dark Mode presence (tokens-static.css, .dark block)" >> "$LOG"
if grep -q "^\\.dark" packages/design-system/src/styles/tokens-static.css; then
  echo "DARK-SECTION: PASS" >> "$LOG"
else
  echo "DARK-SECTION: FAIL" >> "$LOG"; exit 1
fi

echo "3) CSS color-mix usage in CSS (should be 0)" >> "$LOG"
if rg -n color-mix --glob '**/*.css' packages/design-system/src/**/*.css >/dev/null 2>&1; then
  echo "COLOR-MIX-CSS: FAIL" >> "$LOG"; exit 1
else
  echo "COLOR-MIX-CSS: PASS" >> "$LOG"
fi

echo "4) Documentation presence" >> "$LOG"
for f in BREAKING_CHANGES.md LOCALSTORAGE_CLEANUP.md; do
  if [ -f "$f" ]; then
    echo "DOC: $f OK" >> "$LOG"
  else
    echo "DOC: $f MISSING" >> "$LOG"; exit 1
  fi
done

echo "All tests passed." >> "$LOG"
cat "$LOG"
