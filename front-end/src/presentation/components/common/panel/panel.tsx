import Link from 'next/link'
import Image from 'next/image'

import { ICON } from 'src/presentation/assets'

import S from './panel.module.scss'

type PanelProps = {
  image: string
  alt: string
  title: string
  subtitle: string
  paragraph: string
  width: number
  height: number
  position: 'left' | 'right'
}

const Panel = ({ image, alt, title, subtitle, paragraph, position, width, height }: PanelProps) => (
  <div className={S.container}>
    {position === 'left' && (
      <>
        <div className={S['box-section']}>
          <div className={S['text-section']}>
            <h1 className={S.title}>{title}</h1>
            <h6 className={S.subtitle}>{subtitle}</h6>
            <div className={S['link-section']}>
              <Link
                href="https://api.whatsapp.com/send?phone=5519988285625&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Am%C3%A9rica%20Financeira!%20Estou%20interessado%20no%20cart%C3%A3o%20de%20cr%C3%A9dito."
                target="_blank"
              >
                <span className={S.paragraph}>{paragraph}</span>
              </Link>
              <ICON.IconArrowRight className={S.icon} />
            </div>
          </div>
          <div className={S['image-section']} style={{ width: `${width}%`, height: `${height}%` }}>
            <Image className={S.img} width={100} height={100} src={image} alt={alt} layout="responsive" />
          </div>
        </div>
      </>
    )}
    {position === 'right' && (
      <>
        <div className={S['box-section']}>
          <div className={S['image-section']} style={{ width: `${width}%`, height: `${height}%` }}>
            <Image className={S.img} width={width} height={height} src={image} alt={alt} layout="responsive" />
          </div>
          <div className={S['text-section']}>
            <h1 className={S.title}>{title}</h1>
            <h6 className={S.subtitle}>{subtitle}</h6>
            <div className={S['link-section']}>
              <Link
                href="https://api.whatsapp.com/send?phone=5519988285625&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Am%C3%A9rica%20Financeira!%20Quero%20antecipar%20meu%20FGTS."
                target="_blank"
              >
                <span className={S.paragraph}>{paragraph}</span>
              </Link>
              <ICON.IconArrowRight className={S.icon} />
            </div>
          </div>
        </div>
      </>
    )}
  </div>
)

export default Panel
