'use client'

import { useRef } from 'react'
import AliceCarousel, { Link } from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import { ICON } from 'src/presentation/assets'

import S from './carousel.module.scss'

const SLIDES = [
  {
    title: 'Empréstimo Pessoal',
    subtitle: 'Dinheiro rápido com condições especiais para você usar como quiser.',
    link: '/emprestimo-pessoal',
  },
  {
    title: 'Empréstimo Consignado',
    subtitle: 'Benefícios exclusivos para aposentados e pensionistas do INSS.',
    link: '/emprestimo-consignado',
  },
  {
    title: 'Empréstimo FGTS',
    subtitle: 'Antecipe até 10 parcelas do saque-aniversário FGTS com a menor taxa.',
    link: '/emprestimo-fgts',
  },
]

const responsive = {
  0: { items: 1 },
  880: { items: 2 },
  1280: { items: 3 },
}

const Carousel = () => {
  const carouselRef = useRef<AliceCarousel>(null)

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev()
    }
  }

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext()
    }
  }

  return (
    <div className={S.container}>
      <div>
        <h3 className={S['subtitle-section']}>Ofertas personalizadas</h3>
        <h1 className={S['title-section']}>
          Escolha o empréstimo <br /> que mais combina com você
        </h1>
      </div>
      <button className={S['arrow-left']} onClick={handlePrev}>
        <ICON.IconArrowLeft size={20} />
      </button>
      <div className={S['carousel']}>
        <AliceCarousel
          mouseTracking
          items={SLIDES.map(({ title, subtitle, link }, key) => (
            <Link key={key} href={link}>
              <div className={S.item}>
                <div className={S['text-section']}>
                  <h2 className={S.title}>{title}</h2>
                  <p className={S.subtitle}>{subtitle}</p>
                </div>
                <div className={S['icon-section']}>
                  <ICON.IconArrowRight className={S.icon} />
                </div>
              </div>
            </Link>
          ))}
          responsive={responsive}
          disableButtonsControls={true}
          controlsStrategy="alternate"
          disableDotsControls
          ref={carouselRef}
        />
      </div>
      <button className={S['arrow-right']} onClick={handleNext}>
        <ICON.IconArrowRight size={20} />
      </button>
    </div>
  )
}

export default Carousel
