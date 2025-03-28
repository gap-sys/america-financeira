import { useState } from 'react'
import Link from 'next/link'
import { ICON } from 'src/presentation/assets'
import { StaticImageData } from 'next/image'
import S from './header-lp.module.scss'

type HeaderProps = {
  title: string
  subtitle: string
  paragraph: string
  image: string | StaticImageData
  showLoanRequest?: boolean
}

const HeaderLP = ({ title, subtitle, image, paragraph }: HeaderProps) => {
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/control', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: 'Vim pelo site' }),
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
    <header
      id="home"
      className={S.container}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className={S['box-section']}>
        <div className={S['text-section']}>
          <h6 className={S.subtitle}>{subtitle}</h6>
          <h1 className={S.title}>{title}</h1>
          {paragraph && <p className={S.paragraph}>{paragraph}</p>}
          
          <Link
            href="https://wa.me/message/QZWPKWC2TWGLB1"
            target="_blank"
            rel="noopener noreferrer"
            legacyBehavior
          >
            <div className={S['button-section']} onClick={handleClick}>
              <a className={S.link}>
                <span>Fale Conosco</span>
              </a>
              <ICON.IconBrandWhatsapp className={S.icon} />
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default HeaderLP
