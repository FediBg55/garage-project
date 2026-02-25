# Ste Garage Jawhara - Next.js + Supabase

## Prerequis
- Node.js 20+
- Projet Supabase

## Installation
```bash
npm install
```

## Configuration
1. Copier `.env.example` vers `.env.local`.
2. Renseigner:
- `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_WHATSAPP_PHONE`
- `ADMIN_PASSKEY`

## Base de donnees
Executer `supabase/schema.sql` dans SQL Editor de Supabase.

## Lancer en local
```bash
npm run dev
```

## Pages
- `/` Accueil
- `/services` Services
- `/rendez-vous` Prise de rendez-vous
- `/contact` Contact
- `/a-propos` A propos
- `/admin` Page passkey
- `/admin/dashboard` Tableau admin protege

## API
- `POST /api/rendez-vous` enregistre les demandes dans `appointments`.
- `POST /api/admin/login` ouvre une session admin.
- `GET /api/admin/logout` ferme la session admin.
- `PATCH /api/admin/rendez-vous/[id]` met a jour le `status` (`en_attente` ou `terminee`).
- `DELETE /api/admin/rendez-vous/[id]` supprime un rendez-vous.
