import Link from 'next/link'
import Image from 'next/image'

import { Button } from 'src/presentation/components'

import S from './banner.module.scss'

type BannerProps = {
  title: string
  subtitle: string
  paragraph: string
  image: string
  alt: string
  label: string
  width: number
  height: number
}

const Banner = ({ image, alt, title, subtitle, paragraph, label, width, height }: BannerProps) => (
  <div className={S.container}>
    <div className={S['image-section']} style={{ width: `${width}%`, height: `${100}%` }}>
      <Image className={S.img} src={image} alt={alt} width={width} height={height} layout="responsive" />
    </div>
    <div className={S['text-section']}>
      <h3 className={S.subtitle}>{subtitle}</h3>
      <h1 className={S.title}>{title}</h1>
      <p className={S.paragraph}>{paragraph}</p>
      <Link href="/formulario-seja-parceiro" target="_blank">
        <Button typeStyle="btn1" label={label} width="300px" />
      </Link>
    </div>
  </div>
)

export default Banner
