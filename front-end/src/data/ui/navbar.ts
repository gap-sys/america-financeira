import { NavbarItemProps } from 'src/data/models'

export const MENU: NavbarItemProps[] = [
  {
    label: 'América Financeira',
    link: '#',
    children: [
      {
        label: 'Quem Somos',
        link: '/quem-somos',
      },
      {
        label: 'Nossas Unidades',
        link: '/nossas-unidades',
      },
      {
        label: 'Apresentação Institucional',
        link: '/apresentacao-institucional.pdf',
        new: 'PDF',
      },
    ],
  },
  {
    label: 'Simule seu Crédito',
    link: '#',
    children: [
      {
        label: 'Empréstimo FGTS',
        link: '/emprestimo-fgts',
      },
      {
        label: 'Empréstimo Pessoal',
        link: '/emprestimo-pessoal',
      },
      {
        label: 'Empréstimo Consignado',
        link: '/emprestimo-consignado',
      },
    ],
  },
  {
    label: 'Seja Parceiro',
    link: '/seja-um-parceiro',
  },
  {
    label: 'Carreira',
    link: '/trabalhe-conosco',
  },
]

export const MENULP: NavbarItemProps[] = [
  {
    label: 'Home',
    link: '#home',
    color: '#ffcc29',
  },
  {
    label: 'Vantagens',
    link: '#vantagens',
    color: '#FFF',
  },
  {
    label: 'Como obter',
    link: '#como-obter',
    color: '#FFF',
  },
  {
    label: 'Perguntas Frequentes',
    link: '#perguntas-frequentes',
    color: '#FFF',
  },
  {
    label: 'Depoimentos',
    link: '#depoimentos',
    color: '#FFF',
  },
]
