'use client'

import { useRef } from 'react'
import AliceCarousel, { Link } from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import { ICON } from 'src/presentation/assets'

import S from './reviews.module.scss'

const SLIDES = [
  {
    title: 'João Silva, 38 anos',
    subtitle:
      'Eu estava precisando de dinheiro para quitar algumas dívidas e melhorar minha situação financeira. Descobri que poderia antecipar meu FGTS e foi a melhor decisão que tomei! O processo foi rápido, sem burocracia, e em poucos dias o dinheiro já estava na minha conta. Recomendo para quem precisa de um reembolso financeiro imediato!',
  },
  {
    title: 'Maria Souza, 45 anos',
    subtitle:
      'Confesso que fiquei com medo de fazer a antecipação do FGTS, mas depois que pesquisei e tirei minhas dúvidas, vi que era seguro e muito vantajoso. O atendimento foi excelente, me explicaram tudo direitinho, e consegui um valor que me ajudou a reformar minha casa. Foi uma experiência muito positiva!',
  },
  {
    title: 'Carlos Mendes, 50 anos',
    subtitle:
      'Eu nem sabia que dava para antecipar o FGTS até que um amigo me falou. Fiz a solicitação, o processo foi super rápido, sem aquela papelada todos os bancos, e o dinheiro caiu na conta rapidinho. Agora posso respirar mais aliviado financeiramente. Muito satisfeito com essa solução!',
  },
  {
    title: 'Ana Pereira, 32 anos',
    subtitle:
      'empre quis investir no meu próprio negócio, mas não tinha o capital inicial. Com a antecipação do FGTS, consegui o valor que consegui e finalmente dei o primeiro passo para abrir minha loja online. O processo foi simples, e o dinheiro veio em um ótimo momento. Recomendo!',
  },
  {
    title: 'Ricardo Lima, 41 anos',
    subtitle:
      'Já tinha ouvido falar sobre essa modalidade de empréstimo, mas descobri que era complicado. Para minha surpresa, foi tudo muito rápido e transparente. Usei o dinheiro para pagar a faculdade da minha filha e fiquei muito satisfeito com o atendimento e a rapidez da liberação do valor.',
  },
]

const responsive = {
  0: { items: 1 },
  880: { items: 1 },
  1280: { items: 2 },
}

const Reviews = () => {
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
    <div id='depoimentos' className={S.container}>
      <div>
        <h3 className={S['subtitle-section']}>Nossos diferenciais</h3>
        <h1 className={S['title-section']}>O que nossos clientes dizem</h1>
      </div>
      <button className={S['arrow-left']} onClick={handlePrev}>
        <ICON.IconArrowLeft size={20} />
      </button>
      <div className={S['carousel']}>
        <AliceCarousel
          mouseTracking
          items={SLIDES.map(({ title, subtitle }, key) => (
            <Link key={key}>
              <div className={S.item}>
                <div className={S['text-section']}>
                  <h2 className={S.title}>{title}</h2>
                  <p className={S.subtitle}>{subtitle}</p>
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

export default Reviews
