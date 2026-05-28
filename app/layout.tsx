import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shopify App Permissions Audit — Find Over-Privileged Apps',
  description: 'Scan your Shopify store apps and flag those with excessive permissions they do not actually need. Protect your store data today.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="45703753-40b4-44f0-9394-cd47d59ca7f0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
