'use client'

import Image, { type StaticImageData } from 'next/image'

import S from './benefits.module.scss'

type ItemProps = {
  title: string
  subtitle: string
  image: StaticImageData
}

type BenefitsProps = {
  title: string
  subtitle: string
  width?: number
  height?: number
  items: ItemProps[]
}

const Benefits = ({ title, subtitle, width, height, items }: BenefitsProps) => (
  <div className={`${S.container}`}>
    <div className={S['text-section']}>
      <h1 className={S.title}>{title}</h1>
      <p className={S.subtitle}>{subtitle}</p>
    </div>
    <div className={S['details-section']}>
      {items.map(({ title, subtitle, image }, key) => (
        <div style={{ width: `${width}%`, height: `${height}%` }} className={S.box} key={key}>
          <Image
            src={image}
            className={S['image-section']}
            alt={`Imagem ilustrativa de ${title}`}
            width={width}
            height={height}
          />
          <div className={S['info-section']}>
            <h2 className={S.title}>{title}</h2>
            <p className={S.subtitle}>{subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Benefits
