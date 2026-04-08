---
name: "red-team-tactics"
description: "Checklist de táticas red-team para validar superfícies comuns (auth, injection, SSRF, XSS)"
category: "Security & Performance"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

name: red-team-tactics

description: Checklist de táticas red-team para validar superfícies comuns (auth, injection, SSRF, XSS)

scope: Security & Performance

when: Ao revisar uma feature sensível, antes de release, ou após incident/alerta de segurança

workflow: Security Review (TBD)

next-step: Rodar checklist focado na superfície, registrar findings e recomendações em Execution Logs.

related: 

# Red Team Tactics

## 🎯 Purpose / Overview

Ajudar a “pensar como atacante” com um checklist prático para encontrar falhas prováveis e reduzir risco antes de produção.

## ⏱️ When to Use / Triggers

## 🧩 Implementation / How to Use

1) Mapear a superfície

2) Rodar checks por categoria (conforme aplicável)

3) Documentar findings

4) Mitigar

5) Re-test

## 🧰 Technology Context / Tools

## ✅ Validation / Success Criteria

## 💡 Example (copy/paste)

```plain text
Surface: /api/reports/:id
Checks:
- IDOR: tentar acessar id de outro usuário
- Rate limit: 20 req/s por 30s
Outcome:
- Finding: IDOR (high)
- Fix: enforce owner check
- Retest: pass
```

## 🔗 Related Skills