'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { NavMobileLP } from 'src/presentation/components'
import { IMAGE, ICON } from 'src/presentation/assets'
import { getLinkAttributes } from 'src/utils'
import { MENULP } from 'src/data/ui'
import FaleConoscoNav from '../button/fale-conosco'

import S from './navbar-lp.module.scss'

const NavbarLP = () => {
  const [isSideMenuOpen, setSideMenu] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: string) => {
    if (link.startsWith('#')) {
      e.preventDefault()
      const targetId = link.substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (link === 'https://wa.me/message/QZWPKWC2TWGLB1') {
      // Send webhook request before navigating to WhatsApp
      setLoading(true)
      try {
        const response = await fetch('/api/control', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: 'Vim pelo Navbar' }),
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
  }

  return (
    <nav className={S.container}>
      <div className={S.navbar}>
        <Link href="/" legacyBehavior>
          <a>
            <Image src={IMAGE.LOGO_AMERICA_FINANCEIRA_SEGURO} alt="Logo América Financeira" className={S.logo} />
          </a>
        </Link>
        <section className={S['left-section']}>
          {isSideMenuOpen && <NavMobileLP closeMenu={() => setSideMenu(false)} />}
          <div className={S['nav-items']}>
            {MENULP.map((item, key) => (
              <div key={key} className={S['nav-link']}>
                <Link href={item.link ?? '#'} legacyBehavior>
                  <a
                    style={{ color: item.color }}
                    className={S['link-text']}
                    onClick={(e) => handleClick(e, item.link ?? '#')}
                  >
                    <span>{item.label}</span>
                    {item.children && <ICON.IoIosArrowDown className={`${S['arrow-icon']} ${S['rotate-180']}`} />}
                  </a>
                </Link>
                {item.children && (
                  <div className={S.dropdown}>
                    {item.children.map((item: any, key: number) => (
                      <Link key={key} href={item.link} legacyBehavior>
                        <a
                          className={S['dropdown-link']}
                          {...getLinkAttributes(item.link)}
                          onClick={(e) => handleClick(e, item.link)}
                        >
                          <span className={S['link-label']}>{item.label}</span>
                          {item.new && <p className={S.new}>{item.new}</p>}
                        </a>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <Link href="https://wa.me/message/QZWPKWC2TWGLB1" target="_blank" rel="noopener noreferrer" legacyBehavior>
            <div className={S['button-section']}>
              <a className={S.link} onClick={(e) => handleClick(e, 'https://wa.me/message/QZWPKWC2TWGLB1')}>
                <span>Fale Conosco</span>
              </a>
              <ICON.IconBrandWhatsapp className={S.icon} />
            </div>
          </Link>
        </section>

        <ICON.IconMenu3 onClick={() => setSideMenu(true)} className={S['menu-icon']} />
      </div>
    </nav>
  )
}

export default NavbarLP
