import './globals.css'
import { Noto_Sans } from 'next/font/google'

const sans = Noto_Sans({ 
  weight: ["400", "600"],
  subsets: ["latin"] 
})

export const metadata = {
  title: 'Best Seller Gaming PC',
  description: 'find a pc here',
  keyword: ["best seller", "gaming", "pc"]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sans.className}>{children}</body>
    </html>
  )
}
