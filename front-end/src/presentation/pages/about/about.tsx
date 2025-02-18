import { Meta, Founder, Banner, Team } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

import { IconTarget, IconEye, IconHeartHandshake } from '@tabler/icons-react'

import S from './about.module.scss'

const TIMELINE = [
  {
    duration: '2 Ano',
    year: '2012',
    title: 'Inauguração',
    description:
      'A América Financeira iniciou suas operações em 2012, oferecendo uma ampla gama de serviços financeiros para atender às necessidades de seus clientes.',
  },
  {
    duration: '1 Ano',
    year: '2014',
    title: 'Primeira filial em Itirapira',
    description:
      'Em 2014, a América Financeira expandiu sua presença física com a inauguração da primeira filial em Itirapira, proporcionando um atendimento mais próximo e personalizado.',
  },
  {
    duration: '1 Ano',
    year: '2015',
    title: 'Primeiros Parceiros',
    description:
      'No ano de 2015, a América Financeira estabeleceu parcerias estratégicas com várias instituições financeiras, fortalecendo sua posição no mercado.',
  },
  {
    duration: '1 Anos',
    year: '2016',
    title: 'Implementação de Tecnologia Avançada',
    description:
      'Em 2016, a América Financeira investiu em tecnologia avançada para melhorar seus serviços e proporcionar uma experiência de cliente mais eficiente e segura.',
  },
  {
    duration: '1 Ano',
    year: '2017',
    title: 'Primeiro 1 milhão',
    description:
      'Em 2017, a América Financeira alcançou a marca de 1 milhão de clientes atendidos, destacando seu compromisso com a excelência e a satisfação do cliente.',
  },
  {
    duration: '2 Anos',
    year: '2018',
    title: 'Expansão Regional',
    description:
      'Entre 2018 e 2019, a América Financeira expandiu suas operações para diversas regiões do país, aumentando sua presença e acessibilidade para mais clientes.',
  },
  {
    duration: '4 Anos',
    year: '2020',
    title: 'Digitalização Completa',
    description:
      'Em 2020, a América Financeira completou a digitalização de todos os seus serviços, oferecendo uma plataforma online completa para todos os tipos de transações financeiras.',
  },
  {
    duration: '1 Ano',
    year: '2024',
    title: 'Lançamento do Método Hot',
    description:
      'Em 2024, a América Financeira lançou o Método Hot, uma nova abordagem inovadora para oferecer soluções financeiras mais integradas e eficientes.',
  },
]

const About = () => (
  <div>
    <Meta
      title="Conheça Nossa História | América Financeira"
      description="Conheça a trajetória e conquistas da América Financeira ao longo dos anos. Descubra como estamos inovando e conquistando a confiança de nossos clientes."
      keywords="América Financeira, nossa história, equipe, inovação, confiança, trajetória"
    />

    <Banner
      subtitle="Quem Somos"
      title="Conheça Nossa História"
      paragraph="A América Financeira é uma empresa dedicada a oferecer soluções financeiras que transformam vidas. Desde nossa fundação, temos nos comprometido com a inovação e a excelência no atendimento, conquistando a confiança de milhares de clientes ao longo dos anos. Com uma equipe de mais de 500 colaboradores e mais de 10 filiais espalhadas pelo país, estamos prontos para atender você onde quer que esteja."
      label="Seja nosso parceiro"
      image={IMAGE.QUEM_SOMOS.src}
      alt="Nossa História"
      height={100}
      width={100}
    />

    <Founder />

    <div className={S['mission-container']}>
      <div className={S['mission-section']}>
        <div className={S['mission-card']}>
          <IconTarget size={42} stroke={1.5} color="#007BFF" />
          <h1 className={S.title}>Missão</h1>
          <p className={S.subtitle}>
            Oferecer soluções financeiras inovadoras, acessíveis e seguras, transformando a vida de nossos clientes e
            parceiros.
          </p>
        </div>
          <div className={S['mission-card']}>
          <IconEye size={42} stroke={1.5} color="#28A745" />
          <h1 className={S.title}>Visão</h1>
          <p className={S.subtitle}>
            Ser referência no mercado financeiro pela excelência no atendimento, confiança e tecnologia, promovendo o
            crescimento sustentável.
          </p>
        </div>
        <div className={S['mission-card']}>
          <IconHeartHandshake size={42} stroke={1.5} color="#FF5733" />
          <h1 className={S.title}>Valores</h1>
          <p className={S.subtitle}>
            Ética, transparência, inovação, respeito ao cliente e compromisso com resultados de qualidade são nossos
            pilares fundamentais.
          </p>
        </div>
      </div>
    </div>

    <div className={S.container}>
      <div className={S['box-section']}>
        {TIMELINE.map(({ duration, year, title, description }, index) => (
          <div key={index} className={S.timeline}>
            <div className={S.icon}></div>
            <div className={S['date-content']}>
              <div className={S['date-outer']}>
                <span className={S.date}>
                  <span className={S.duration}>{duration}</span>
                  <span className={S.year}>{year}</span>
                </span>
              </div>
            </div>
            <div className={S['timeline-content']}>
              <h5 className={S.title}>{title}</h5>
              <p className={S.description}>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <Team width={100} height={100} />
  </div>
)

export default About
