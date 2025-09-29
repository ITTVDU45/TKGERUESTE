This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Mailer / Microsoft Graph Configuration

This project supports sending contact form emails via Microsoft Graph (recommended) using OAuth2 Client Credentials. To enable Graph sending, set the following environment variables (server-side only):

- `GRAPH_TENANT_ID` - Azure AD Tenant ID
- `GRAPH_CLIENT_ID` - App Registration Client ID
- `GRAPH_CLIENT_SECRET` - App Registration Client Secret
- `GRAPH_SENDER` - Mailbox to send as (e.g. `info@tk-gerueste.de`)

Optional:
- `GRAPH_RECIPIENT` - override recipient for internal mails (default `info@tk-geruest.de`)

How it works:
- The API route `POST /api/contact` will use Graph when `GRAPH_*` vars are set. Files uploaded in the contact form are sent as base64 attachments.
- The service uses client credentials flow to obtain a token, with simple in-memory caching and retry logic. For production, rotate `GRAPH_CLIENT_SECRET` regularly and store secrets in a secure store (Vercel Secrets, Azure Key Vault, etc.).

Debugging & logs:
- During development, Graph send attempts are logged to `/tmp/contact_send.log` and rotated by `scripts/rotate-contact-log.sh`.

