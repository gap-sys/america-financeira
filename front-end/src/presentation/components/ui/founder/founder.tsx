import Image from 'next/image'

import { IMAGE } from 'src/presentation/assets'

import S from './founder.module.scss'

const Founder = () => (
  <div className={S.container}>
    <div className={S['box-section']}>
      <div className={S['title-section']}>
        <h3 className={S.subtitle}>Vem com a América Financeira</h3>
        <h1 className={S.title}>
          Conheça nossa <br /> liderança
        </h1>
      </div>
      <div className={S['about-section']}>
        <div className={S['image-section']}>
          <a href="https://www.instagram.com/allanbertho/" target="_blank" rel="noopener noreferrer">
            <Image src={IMAGE.FOUNDER} alt="Allan Bertho, CEO da América Financeira" className={S.img} />
          </a>
        </div>
        <div className={S['text-section']}>
          <h1 className={S.title}>Allan Diego Bertho</h1>
          <h3 className={S.subtitle}>CEO</h3>
          <p className={S.paragraph}>
            Allan Bertho é um empresário de São Pedro, SP, com uma trajetória marcada por resiliência e inovação.
            Nascido em uma família humilde, Allan iniciou sua carreira profissional aos 14 anos, passando por diversas
            áreas até se encontrar no mundo dos negócios e das vendas.
          </p>
          <p className={S.paragraph}>
            Com experiência em empresas como Senac e Porto Seguro, Allan fundou a América Financeira e Seguros em 2012.
            Superando inúmeros desafios, ele desenvolveu o Método HOT, um sistema revolucionário de vendas validado e
            testado por sua empresa. Hoje, com 12 anos de mercado, a América Financeira é um nome consolidado, e Allan
            está pronto para compartilhar seu método de sucesso com parceiros e empreendedores.
          </p>
          <p className={S.paragraph}>
            O Método HOT oferece uma solução completa e integrada para otimizar vendas ativas e receptivas, garantindo
            alta performance e crescimento sustentável. Allan Bertho é um exemplo de perseverança e visão estratégica,
            dedicado a transformar desafios em oportunidades e a elevar o padrão de vendas no mercado financeiro.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default Founder
