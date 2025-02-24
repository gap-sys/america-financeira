import {
  FaqFGTS,
  FgtsSimulation,
  FooterLP,
  HeaderLP,
  LoanProcess,
  Meta,
  NavbarLP,
  Reviews,
} from 'src/presentation/components'

import { ICON, IMAGE } from 'src/presentation/assets'

import { IconCheck, IconWallet, IconClock, IconUsers, IconBuildingStore, IconMedal } from '@tabler/icons-react'

import S from './fgts.module.scss'
import Link from 'next/link'
import { useState, useEffect } from 'react' // ✅ Importando hooks

const differentials = [
  {
    title: 'Aprovado',
    subtitle: 'crédito liberado, até para negativados.',
    color: '#000040',
    titleColor: '#ffcc29',
    subtitleColor: '#FFFFFF',
    borderColor: '#ffcc29',
    icon: <IconCheck size={26} color="#FFFFFF" />,
  },
  {
    title: 'Orçamento',
    subtitle: 'Sem afetar seu orçamento mensal, só ajudando.',
    color: '#ffcc29',
    titleColor: '#0a0909',
    subtitleColor: '#0a0909',
    borderColor: '#FFFFFF',
    icon: <IconWallet size={26} color="#0a0909" />,
  },
  {
    title: 'Rápido',
    subtitle: 'aprovação em minutos, dinheiro liberado.',
    color: '#FFFFFF',
    titleColor: '#ffcc29',
    subtitleColor: 'rgb(106, 106, 106)',
    borderColor: '#ffcc29',
    icon: <IconClock size={26} color="#0a0909" />,
  },
  {
    title: 'Prático',
    subtitle: 'solicitação 100% digital, sem burocracia.',
    color: '#001060',
    titleColor: '#ffcc29',
    subtitleColor: '#FFFFFF',
    borderColor: '#ffcc29',
    icon: <IconUsers size={26} color="#FFFFFF" />,
  },
]

const companyStats = [
  {
    title: '+87mil',
    subtitle: 'Clientes realizados mensalmente',
    color: '#ffff',
    titleColor: '#0a0909',
    subtitleColor: '#4B5563',
    icon: <IconUsers size={26} color="#f9c536" />,
  },
  {
    title: '13 anos',
    subtitle: 'de experiência no setor financeiro',
    color: '#ffff',
    titleColor: '#000000',
    subtitleColor: '#4B5563',
    icon: <IconBuildingStore size={26} color="#f9c536" />,
  },
  {
    title: '+387',
    subtitle: 'Colaboradores',
    color: '#ffff',
    titleColor: '#000000',
    subtitleColor: '#4B5563',
    icon: <IconMedal size={26} color="#f9c536" />,
  },
  {
    title: 'Nota 4.9',
    subtitle: 'de satisfação em avaliações online',
    color: '#ffff',
    titleColor: '#000000',
    subtitleColor: '#4B5563',
    icon: <IconMedal size={26} color="#f9c536" />,
  },
]

const Fgts = () => {
  const [title, setTitle] = useState('Crédito através \n da antecipação \n do seu FGTS')
  const [image, setImage] = useState(IMAGE.EMPRESTIMO_ADULTOS_CONVERSANDO.src)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 624) {
        setTitle('Crédito antecipado do \n seu FGTS')
        setImage(IMAGE.EMPRESTIMO_ADULTOS_CONVERSANDO.src)
      } else {
        setTitle('Crédito através \n da antecipação \n do seu FGTS')
        setImage(IMAGE.EMPRESTIMO_ADULTOS_CONVERSANDO.src)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className={S.container}>
      <Meta
        title="Empréstimo FGTS: Antecipe o saque aniversário do FGTS"
        description="O empréstimo FGTS permite utilizar o saldo do Fundo de Garantia como garantia, oferecendo condições especiais e flexibilidade para o pagamento. Simule agora!"
        keywords="empréstimo FGTS, crédito FGTS, América Financeira, simulação de empréstimo, antecipação FGTS, condições especiais"
      />

      <NavbarLP />

      <HeaderLP
        subtitle={`Conte com a América`}
        title={title}
        paragraph={`Você sabia que pode antecipar até \n 10 anos do seu Saque Aniversário FGTS?`}
        image={image}
      />

      <FgtsSimulation backgroundColor="#000000" color="#fff" />

      <section id="vantagens" className={S['section-differentials']}>
        <h1 className={S['subtitle']}>Nossos diferenciais</h1>
        <h6 className={S['title']}>Vantagens Exclusivas</h6>
        <div className={S['grid']}>
          {differentials.map((item, index) => (
            <div key={index} className={S['card']} style={{ backgroundColor: item.color }}>
              <div className={S['icon-wrapper']}>
                <div className={S['box-icon']} style={{ borderColor: item.borderColor }}>
                  {item.icon}
                </div>
              </div>
              <h1 className={S['card-title']} style={{ color: item.titleColor }}>
                {item.title}
              </h1>
              <p className={S['card-subtitle']} style={{ color: item.subtitleColor }}>
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className={S['section-stats']}>
        <h1 className={S['title']}>Conheça nossa empresa</h1>
        <div className={S['grid']}>
          {companyStats.map((item, index) => (
            <div key={index} className={S['card']} style={{ backgroundColor: item.color }}>
              <div className={S['icon-wrapper']}>{item.icon}</div>
              <h1 className={S['card-title']} style={{ color: item.titleColor }}>
                {item.title}
              </h1>
              <p className={S['card-subtitle']} style={{ color: item.subtitleColor }}>
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
        <div className={S['button-container']}>
          <div className={S['button-section']}>
            <Link
              href="https://api.whatsapp.com/send?phone=5519988335683&text=Ol%C3%A1,%20gostaria%20de%20simular%20minha%20antecipa%C3%A7%C3%A3o%20do%20FGTS"
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
      </section>

      <LoanProcess />

      <FaqFGTS />

      <Reviews />

      <FgtsSimulation backgroundColor="#fff" color="#0a0909" />

      <FooterLP />

      <a
        href="https://api.whatsapp.com/send?phone=5519988335683&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Am%C3%A9rica%20Financeira!"
        target="_blank"
        rel="noopener noreferrer"
        className={S['whatsapp-button']}
      >
        <ICON.IconBrandWhatsapp className={S.icon} />
      </a>
    </div>
  )
}

export default Fgts
