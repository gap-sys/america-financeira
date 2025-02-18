import Image from 'next/image'
import Link from 'next/link'

import { IMAGE } from 'src/presentation/assets'
import { ICONS } from 'src/data/ui'

import S from './footer.module.scss'

const MENU: MenuProps[] = [
  {
    title: 'Produtos',
    items: [
      { label: 'Empréstimo Pessoal', link: '/emprestimo-pessoal' },
      { label: 'Empréstimo Consignado', link: '/emprestimo-consignado' },
      { label: 'Empréstimo FGTS', link: '/emprestimo-fgts' },
    ],
  },
  {
    title: 'Central de Atendimento',
    items: [{ label: '0800 000 0120 (ouvidoria)' }, { label: 'Atendimento das 9h às 18h (dias úteis)' }],
  },
  {
    title: 'Outras informações',
    items: [
      { label: 'Quem somos', link: '/quem-somos' },
      { label: 'Seja parceiro', link: '/seja-um-parceiro' },
      {
        label: 'Nossas Unidades',
        link: '/nossas-unidades',
      },
      {
        label: 'Intranet',
        link: '/area-de-acesso',
      },
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

const Footer = () => (
  <footer className={S.container}>
    <div className={S['container-section']}>
      <div className={S['info-section']}>
        <Image className={S.img} src={IMAGE.LOGO_AMERICA_FINANCEIRA_SEGURO} alt="Logo América Financeira" />
        <h6 className={S.subtitle}>Nos siga nas redes sociais:</h6>
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
        <p>
          América Financeira - Todos os direitos reservados <br /> | CNPJ: 16.965.518/0001-08 | Av. Pres. Getulio <br />{' '}
          Vargas, 832 - Santa Cruz, São Pedro - SP, 13520-000
        </p>
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
  </footer>
)

export default Footer
