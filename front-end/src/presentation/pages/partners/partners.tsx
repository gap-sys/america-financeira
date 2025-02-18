import Image from 'next/image'

import { Meta, Banner, Benefits, Metrics } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'
import { ICONS } from 'src/data/ui'

import S from './partners.module.scss'

const BENEFITS = [
  {
    title: 'Impulsione a receita',
    subtitle: 'Acelere suas vendas e receba comissão exclusiva da Creditas.',
    image: IMAGE.AUMENTAR_LUCRO,
  },
  {
    title: 'Conte com a gente',
    subtitle: 'Cuidamos de todo o processo para que o seu cliente tenha a melhor experiência.',
    image: IMAGE.CONTE_CONOSCO,
  },
  {
    title: 'Ferramentas de ponta',
    subtitle: 'Tenha eficiência e sucesso em suas vendas com nosso suporte especializado.',
    image: IMAGE.IMPULSIONE_RECEITA,
  },
]

const INFORMATION_PARTNERS = [
  'Seja bem-vindo ao America Partners! Aqui você encontrará informações sobre nossas parcerias estratégicas e como elas podem ajudar a impulsionar o seu negócio. Na America Financeira, valorizamos a colaboração e estamos comprometidos em oferecer suporte e soluções financeiras inovadoras aos nossos parceiros.',
  'Junte-se a nós e descubra os benefícios exclusivos de ser um parceiro da America Financeira. Tenha acesso a recursos dedicados e suporte contínuo para crescer com segurança.',
  'Nossos parceiros têm acesso a uma ampla rede de clientes, suporte especializado e inúmeras oportunidades de crescimento. Com mais de 12 anos de experiência, estamos aqui para ajudar você a alcançar novos patamares de sucesso. Explore nossas soluções e veja como podemos crescer juntos.',
]

const Partners = () => (
  <div>
    <Meta
      title="América Partners | Seja um Parceiro"
      description="Descubra os benefícios de se tornar um parceiro da América Financeira. Inovação e confiança para realizar seus sonhos financeiros."
      keywords="parceiros, América Financeira, benefícios, inovação, confiança, parceria"
    />

    <Banner
      subtitle="Sobre nossas parcerias"
      title="Parcerias de Sucesso"
      paragraph="Na America Financeira, valorizamos as parcerias estratégicas que nos permitem oferecer soluções financeiras inovadoras e eficazes. Junte-se a nós e descubra os benefícios de ser um parceiro, incluindo acesso a uma ampla rede de clientes, suporte especializado e oportunidades de crescimento conjunto."
      label="Seja parceiro"
      image={IMAGE.PARCEIROS.src}
      alt="Parcerias de Sucesso"
      height={40}
      width={100}
    />

    <Benefits
      title="Nossos diferenciais"
      subtitle="Descubra os benefícios exclusivos de se tornar um parceiro da America Financeira e impulsione seu negócio."
      items={BENEFITS}
      width={100}
      height={100}
    />

    <Metrics />

    <div className={S.container}>
      <h1 className={S.title}>América Partners</h1>
      {INFORMATION_PARTNERS.map((paragraph, index) => (
        <p key={index} className={S.paragraph}>
          {paragraph}
        </p>
      ))}
    </div>

    <div className={S.container}>
      <Image
        className={S.logo}
        src={IMAGE.LOGO_AMERICA_LETRAS_AZUL.src}
        alt="Logo América Financeira"
        width={100}
        height={100}
        layout="responsive"
      />
      <h3 className={S.subtitle}>Siga a gente</h3>
      <p className={S.paragraph}>
        Conheça nossa cultura, explore nossos serviços e veja como transformamos <br /> finanças em oportunidades todos
        os dias.
      </p>
      <div className={S['icons-section']}>
        {ICONS.map(({ icon: Icon, link }, index) => (
          <a key={index} href={link} target="_blank" rel="noopener noreferrer">
            <Icon className={S.icon} />
          </a>
        ))}
      </div>
    </div>
  </div>
)

export default Partners
