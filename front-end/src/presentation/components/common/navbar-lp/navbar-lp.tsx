'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { NavMobileLP } from 'src/presentation/components'
import { IMAGE, ICON } from 'src/presentation/assets'
import { getLinkAttributes } from 'src/utils'
import { MENULP } from 'src/data/ui'
import { Button } from '@geist-ui/react';


import S from './navbar-lp.module.scss'

const NavbarLP = () => {
  const [isSideMenuOpen, setSideMenu] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: string) => {
    if (link.startsWith('#')) {
      e.preventDefault()
      const targetId = link.substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

const FaleConoscoNav: React.FC = () => {
  const handleClick = () => {
    window.open('https://api.whatsapp.com/send?phone=5519988285625&text=Ol%C3%A1,%20gostaria%20de%20simular%20minha%20antecipa%C3%A7%C3%A3o%20do%20FGTS', '_blank');
  };

   const buttonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#25d366',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontFamily: "'Inter', sans-serif",
    fontWeight: 700,
  };

  return (
    <Button onClick={handleClick} type="default" className={S.button} style={buttonStyle} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <span>Fale Conosco</span>
      <ICON.IconBrandWhatsapp className={S.icon} />
    </Button>
  );
};


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
          <div>
            <FaleConoscoNav />
          </div>
        </section>

        <ICON.IconMenu3 onClick={() => setSideMenu(true)} className={S['menu-icon']} />
      </div>
    </nav>
  )
}

export default NavbarLP
