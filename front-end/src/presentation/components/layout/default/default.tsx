import { type ReactNode, useState } from 'react'
import { Navbar, Footer } from 'src/presentation/components'
import { ICON } from 'src/presentation/assets'
import S from './default.module.scss'

interface DefaultLayoutProps {
  children: ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/control', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: 'Vim pelo site,flutuante' }),
      })

      if (!response.ok) {
        console.error('Failed to send message to webhook.')
      }
    } catch (error) {
      console.error('Error sending request:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Navbar />
      <main>{children}</main>

      <a
        href="https://wa.me/message/QZWPKWC2TWGLB1"
        target="_blank"
        rel="noopener noreferrer"
        className={S['whatsapp-button']}
        onClick={handleClick}
      >
        <ICON.IconBrandWhatsapp className={S.icon} />
      </a>

      <Footer />
    </div>
  )
}

export default DefaultLayout
