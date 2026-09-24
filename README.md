# Positron Capital Management — site + Apply OS

Replacement surface for [positroncm.com](https://www.positroncm.com/home).

Family-office site with a candidate Apply OS: resume in, fit score + packet out, human confirm before persist.

## Stack
- Next.js 14 App Router
- No backend required for v1 (scoring + receipts in-browser)
- Jobs seeded from the live PCM listings

## Run
```bash
npm install
npm run dev
```

## Routes
- `/` firm brief
- `/ventures` `/lab` `/people` `/contact`
- `/careers` `/careers/[slug]`
- `/apply/[slug]` agent workspace
- `/apply/status/[id]` receipt

## Apply graph (v1, local)
`parse → score keywords/must-haves → draft packet → human gate → local receipt`

Next adapters: FastAPI + LangGraph, email submit, staff inbox.
