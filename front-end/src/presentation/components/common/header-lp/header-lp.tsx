import Link from 'next/link'

import { ICON } from 'src/presentation/assets'

import { StaticImageData } from 'next/image'

import S from './header-lp.module.scss'

import  FaleConoscoNav from '../button/fale-conosco'

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
       <FaleConoscoNav />
      </div>
    </div>
  </header>
)

export default HeaderLP
