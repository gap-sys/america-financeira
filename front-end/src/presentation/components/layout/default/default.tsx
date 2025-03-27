import { type ReactNode } from 'react'

import { Navbar, Footer } from 'src/presentation/components'

import { ICON } from 'src/presentation/assets'

import S from './default.module.scss'
interface DefaultLayoutProps {
  children: ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => (
  <div>
    <Navbar />
    <main>{children}</main>

    <a
      href="https://wa.me/message/QZWPKWC2TWGLB1"
      target="_blank"
      rel="noopener noreferrer"
      className={S['whatsapp-button']}
    >
      <ICON.IconBrandWhatsapp className={S.icon} />
    </a>
    <Footer />
  </div>
)

export default DefaultLayout
