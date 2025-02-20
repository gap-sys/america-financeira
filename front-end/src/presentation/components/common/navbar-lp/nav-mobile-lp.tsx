import Link from 'next/link'

import { NavItemLP } from 'src/presentation/components'
import { NavMobileProps } from 'src/data/models'
import { ICON } from 'src/presentation/assets'
import { MENULP } from 'src/data/ui'
import  FaleConoscoNav from '../button/fale-conosco'
 
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
        <FaleConoscoNav />
      </nav>
    </div>
  )
}

export default NavMobileLP
