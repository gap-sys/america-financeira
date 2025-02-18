import Link from 'next/link'

import { NavItemLP } from 'src/presentation/components'
import { NavMobileProps } from 'src/data/models'
import { ICON } from 'src/presentation/assets'
import { MENULP } from 'src/data/ui'

import S from './nav-mobile-lp.module.scss'

const NavMobileLP = ({ closeMenu }: NavMobileProps) => {
  const handleClick = () => {
    closeMenu()
  }

  return (
    <div className={S['mobile-nav-container']}>
      <nav className={S['mobile-nav']}>
        <section className={S['close-section']}>
          <ICON.IconX onClick={closeMenu} className={S['close-icon']} />
        </section>
        <div className={S['nav-items']}>
          {MENULP.map((item, key) => (
            <NavItemLP
              key={key}
              label={item.label}
              new={item.new}
              link={item.link}
              onClick={handleClick}
              blank="none"
              closeMenu={closeMenu}
            >
              {item.children}
            </NavItemLP>
          ))}
        </div>
        <div className={S['button-section']}>
          <Link
            href="https://api.whatsapp.com/send?phone=5519988285625&text=Ol%C3%A1,%20gostaria%20de%20simular%20minha%20antecipa%C3%A7%C3%A3o%20do%20FGTS"
            target="_blank"
            rel="noopener noreferrer"
            legacyBehavior
          >
            <a className={S.link}>
              <span>Fale Conosco</span>
            </a>
          </Link>
          <ICON.IconBrandWhatsapp className={S.icon} />
        </div>
      </nav>
    </div>
  )
}

export default NavMobileLP
