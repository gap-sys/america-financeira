import { StaticImageData } from 'next/image'

import { LoanRequest } from 'src/presentation/components/form'

import S from './header-mobile.module.scss'

type HeaderMobileProps = {
  title: string
  subtitle: string
  paragraph: string
  image: string | StaticImageData
  showLoanRequest?: boolean
}

const HeaderMobile = ({ title, subtitle, image, paragraph, showLoanRequest = true }: HeaderMobileProps) => (
  <header
    className={S.container}
    style={{
      backgroundImage: `url(${image})`,
    }}
  >
    <div className={S['box-section']}>
      <div className={S['text-section']}>
        <h6 className={S.subtitle}>{title}</h6>
        <h1 className={S.title}>{subtitle}</h1>
        {paragraph && <p className={S.paragraph}>{paragraph}</p>}
      </div>

      {showLoanRequest && (
        <div className={S['form-section']}>
          <LoanRequest />
        </div>
      )}
    </div>
  </header>
)

export default HeaderMobile
