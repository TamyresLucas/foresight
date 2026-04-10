---
name: next-session-ai-jira-hardening
type: Plan
domain: [AI-Jira]
source: notion:efac2a4d-e8a0-4dd9-8096-a107ab321b80
status: active
installed: 2026-04-09
---

# Next session — AI-Jira hardening

### Contexto

Você vai retomar amanhã o Epic: Epic — System-wide AI-Jira Executability Hardening (Agents/Workflows/Skills).

### O que está pronto (core)

- Skills Tier 0/1: AI Recommendation preenchido.
- Workflows Active: AI Recommendation preenchido.
- Agents (core/roteamento): Agent Spec (export) + AI Recommendation preenchidos.
- Views de auditoria:
- SSOT de contratos: AI-Jira — Global Contracts (SSOT)

---

## A. Obrigatório (para fechar o Epic com evidência)

### A1) Re-auditar e destravar cards bloqueados (ordem)

1. Abrir o card S2 (:implement) e confirmar se ainda está Bloqueado:
2. Rodar auditoria S2 (:qa) usando as views de auditoria como evidência (e/ou SQL se já propagou):
3. Rodar auditorias system-wide (S3 :implement):
4. Gate final (S3 :qa):
5. Atualizar Status das Stories S2/S3 e do Epic Epic — System-wide AI-Jira Executability Hardening (Agents/Workflows/Skills) para Done quando todos os gates estiverem Feito.

### A2) Evidência mínima que deve existir

- 1 Execution Log (review) para cada gate (S2 :qa e S3 :qa) com:

---

## B. Opcional (expansão de cobertura)

### B1) Skills Tier 2

- Meta: preencher AI Recommendation para Tier 2 (20 em 20).
- Fonte de trabalho: view Skills → "AI Audit — Missing AI Recommendation".

### B2) Workflows não-Active

- Meta: preencher AI Recommendation para workflows em Draft/Review Skill/In Review.

### B3) Agents fora do core

- Meta: preencher Agent Spec (export) + AI Recommendation para agentes Planned/In Development/Paused, se você quiser exportabilidade total.

---

## Decisões que podem aparecer amanhã

- Se SQL ainda não enxergar colunas novas: usar views de auditoria como evidência canônica (recomendado).
- Se um item não tiver info suficiente: aplicar regra confirmada TBD + Blocked (sem inferência).
