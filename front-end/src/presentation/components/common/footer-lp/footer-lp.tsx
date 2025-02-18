import Image from 'next/image'
import Link from 'next/link'

import { IMAGE } from 'src/presentation/assets'
import { ICONS } from 'src/data/ui'

import S from './footer-lp.module.scss'

const MENU: MenuProps[] = [
  {
    title: 'INSTITUCIONAL',
    items: [
      { label: 'Home', link: '#home' },
      { label: 'Vantagens', link: '#vantagens' },
      {
        label: 'Como obter',
        link: '#como-obter',
      },
      { label: 'Perguntas Frequentes', link: '#perguntas-frequentes' },
      {
        label: 'Depoimentos',
        link: '#depoimentos',
      },
    ],
  },
  {
    title: 'SOLUÇÕES',
    items: [
      { label: 'Empréstimo Pessoal', link: '/emprestimo-pessoal' },
      { label: 'Empréstimo Consignado', link: '/emprestimo-consignado' },
      { label: 'Empréstimo FGTS', link: '/emprestimo-fgts' },
    ],
  },
  {
    title: 'CONTATO',
    items: [
      { label: '(19) 98828-5625 (whatsapp)' },
      { label: '0800 000 0120 (ouvidoria)' },
      { label: 'Atendimento das 9h às 18h (dias úteis)' },
    ],
  },
]

type ItemProps = {
  label: string
  link?: string
}

interface MenuProps {
  title: string
  items: ItemProps[]
}

const FooterLP = () => (
  <footer className={S.container}>
    <div className={S['container-section']}>
      <div className={S['info-section']}>
        <Image className={S.img} src={IMAGE.LOGO_AMERICA_FINANCEIRA_SEGURO} alt="Logo América Financeira" />
        <p className={S['info-title']}>
          Há 15 anos atuando no mercado de consignado, essa é uma garantia de que todo o processo terá credibilidade,
          segurança, qualidade e excelência.
        </p>
        <h6 className={S.subtitle}>SIGA-NOS</h6>
        <div className={S['icons-section']}>
          {ICONS.map(({ icon: Icon, link }, key) => (
            <a key={key} href={link} target="_blank" rel="noopener noreferrer">
              <Icon className={S.icon} />
            </a>
          ))}
        </div>
      </div>
      <div className={S['details-section']}>
        {MENU.map((section, key) => (
          <div className={S['list-section']} key={key}>
            <h1 className={S.title}>{section.title}</h1>
            <ul className={S['list-box']}>
              {section.items.map(({ link, label }) => (
                <li key={key} className={S.list}>
                  {link ? (
                    <Link legacyBehavior href={link}>
                      <span className={S.link}>{label}</span>
                    </Link>
                  ) : (
                    <span className={S.link}>{label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className={S['container-info']}>
      <div className={S['rights-reserved-section']}>
        <p>2025 © Todos os direitos reservados. América Financeira</p>
      </div>
      <div className={S['terms-section']}>
        <p>
          <Link legacyBehavior href="/politica-de-privacidade">
            <span className={S.link}>Política de Privacidade</span>
          </Link>
        </p>
        <p>
          <Link legacyBehavior href="/termos-de-uso">
            <span className={S.link}>Termos de uso</span>
          </Link>
        </p>
      </div>
    </div>
    <p className={S['info-credits']}>
      A América Financeira não é uma instituição financeira e não realiza operações de crédito diretamente. Atuamos como
      correspondente bancário, seguindo as diretrizes do Banco Central do Brasil, conforme a Resolução nº 3.954, de 24
      de fevereiro de 2011. Toda avaliação de crédito é realizada de acordo com a política da instituição financeira
      escolhida pelo usuário. Antes da contratação de qualquer serviço através de nossos parceiros, fornecemos todas as
      condições e informações relacionadas ao contrato de forma completa e transparente. As taxas de juros, margem
      consignável e prazo de pagamento praticados nos empréstimos consignados observam as determinações de cada
      convênio, bem como a política de crédito da instituição financeira a ser utilizada. América Financeira - CNPJ
      16.965.518/0001-08 | Endereço: Av. Pres. Getúlio Vargas, 832 - Santa Cruz, São Pedro - SP, 13520-000.
    </p>
  </footer>
)

export default FooterLP
