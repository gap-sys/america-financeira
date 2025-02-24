import { useState } from 'react'
import S from './faq-fgts.module.scss'
import Link from 'next/link'
import { ICON } from 'src/presentation/assets'
import FaleConoscoNav from '../button/fale-conosco'

const FaqFGTS = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: 'Quais são os requisitos para solicitar a antecipação do FGTS?',
      answer:
        'É necessário ter saldo disponível no FGTS, ser maior de idade ou emancipado, e estar no regime de saque-aniversário. Caso precise, você pode alterar a modalidade diretamente pelo aplicativo.',
    },
    {
      question: 'Qual o valor da taxa de juros para a antecipação?',
      answer: 'A taxa de juros varia de acordo com a política da instituição financeira responsável pela operação.',
    },
    {
      question: 'É necessário passar por uma análise de crédito?',
      answer: 'Sim, a análise de crédito é realizada antes da liberação do valor solicitado.',
    },
    {
      question: 'Se eu for demitido, ainda poderei resgatar meu FGTS?',
      answer: 'Sim, mesmo em caso de demissão, você mantém o direito de resgatar o valor antecipado do FGTS.',
    },
    {
      question: 'Como são pagos os valores das parcelas?',
      answer: 'As parcelas são descontadas diretamente do saldo disponível na sua conta do FGTS de forma automática.',
    },
  ]

  const toggleFaq = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div id="perguntas-frequentes" className={S['faq-fgts']}>
      <h2 className={S['faq-fgts__subtitle']}>FAQ</h2>
      <h3 className={S['faq-fgts__title']}>Dúvidas Frequentes</h3>
      <div className={S['faq-fgts__list']}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${S['faq-fgts__item']} ${activeIndex === index ? S['faq-fgts__item--active'] : ''}`}
          >
            <div className={S['faq-fgts__question']} onClick={() => toggleFaq(index)}>
              <div className={S.box}>
                <span className={S.number}>{`0${index + 1}.`}</span>
                {faq.question}
              </div>
              <span className={S['faq-fgts__icon']}>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && <div className={S['faq-fgts__answer']}>{faq.answer}</div>}
          </div>
        ))}
      </div>
      <div className={S['button-container']}>
        <Link
          href="https://api.whatsapp.com/send?phone=5519988335683&text=Ol%C3%A1,%20gostaria%20de%20simular%20minha%20antecipa%C3%A7%C3%A3o%20do%20FGTS."
          target="_blank"
          rel="noopener noreferrer"
          legacyBehavior
        >
          <div className={S['button-section']}>
            <a className={S.link}>
              <span>Fale Conosco</span>
            </a>
            <ICON.IconBrandWhatsapp className={S.icon} />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default FaqFGTS
