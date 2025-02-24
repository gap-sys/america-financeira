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

const HeaderLP = ({ title, subtitle, image, paragraph }: HeaderProps) => (
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
        <div className={S['button-section']}>
          <Link
            href="https://api.whatsapp.com/send?phone=5519988335683&text=Ol%C3%A1,%20gostaria%20de%20simular%20minha%20antecipa%C3%A7%C3%A3o%20do%20FGTS."
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
      </div>
    </div>
  </header>
)

export default HeaderLP
