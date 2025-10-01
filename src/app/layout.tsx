import "../styles/index.css";
import FooterOne from '@/layouts/footers/FooterOne'
import CookieConsentClient from '@/components/CookieConsentClient'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const isDev = process.env.NODE_ENV === 'development'

  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <head>
        <title>TK GERÜSTE GmbH - Gerüstbau aus Duisburg</title>
        <meta name="keywords" content="Gerüstbau, TK GERÜSTE, Duisburg, Gerüste, Bau" />
        <meta name="description" content="TK GERÜSTE GmbH - Professioneller Gerüstbau aus Duisburg. Wir liefern sichere, effiziente Gerüstlösungen für Industrie und Handwerk." />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* For IE  */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
        <FooterOne />
        <CookieConsentClient />
      </body>
    </html>
  )
}
