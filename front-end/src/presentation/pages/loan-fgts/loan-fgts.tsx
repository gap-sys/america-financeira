import { Meta, Header, Spotlight, Simulation, Banks, Panel, Faq } from 'src/presentation/components'

import { IMAGE } from 'src/presentation/assets'

import S from './loan-fgts.module.scss'

const FAQLOAN = [
  {
    question: 'O que é Empréstimo FGTS?',
    answer:
      'É um tipo de crédito que permite a antecipação dos valores do Fundo de Garantia por Tempo de Serviço (FGTS) disponíveis nas contas ativas e inativas.',
  },
  {
    question: 'Quem pode solicitar o Empréstimo FGTS?',
    answer: 'Trabalhadores com saldo disponível nas contas do FGTS, seja em contas ativas ou inativas.',
  },
  {
    question: 'Quais são os documentos necessários para solicitar o Empréstimo FGTS?',
    answer: 'Documento de identidade com foto (RG ou CNH), CPF, comprovante de residência e extrato do FGTS.',
  },
  {
    question: 'Qual o valor máximo que posso antecipar com o Empréstimo FGTS?',
    answer: 'O valor máximo depende do saldo disponível nas contas do FGTS e das políticas da instituição financeira.',
  },
  {
    question: 'Qual a taxa de juros do Empréstimo FGTS?',
    answer:
      'As taxas de juros variam conforme a instituição financeira, mas geralmente são mais baixas do que as de outros tipos de crédito.',
  },
  {
    question: 'Como funciona o pagamento do Empréstimo FGTS?',
    answer: 'O pagamento é feito através do saldo do FGTS disponível, descontado diretamente das contas do FGTS.',
  },
  {
    question: 'É possível antecipar o saque-aniversário do FGTS com este empréstimo?',
    answer: 'Sim, é possível antecipar o saque-aniversário do FGTS, recebendo o valor antecipadamente.',
  },
  {
    question: 'O que acontece se eu sacar o FGTS antes de quitar o empréstimo?',
    answer:
      'Se houver saldo suficiente na conta do FGTS, o valor será descontado automaticamente; caso contrário, a dívida permanecerá até ser quitada.',
  },
  {
    question: 'Posso usar o Empréstimo FGTS para qualquer finalidade?',
    answer: 'Sim, o valor antecipado pode ser utilizado conforme a necessidade do solicitante.',
  },
  {
    question: 'Quais são as vantagens do Empréstimo FGTS?',
    answer:
      'As principais vantagens incluem taxas de juros mais baixas, facilidade de contratação e uso do saldo do FGTS como garantia.',
  },
]

const LoanFGTS = () => {
  const IMAGES = IMAGE.DUAS_PESSOAS_CONVERSANDO

  return (
    <div className={S.container}>
      <Meta
        title="Empréstimo FGTS: Antecipe o saque aniversário do FGTS"
        description="O empréstimo FGTS permite utilizar o saldo do Fundo de Garantia como garantia, oferecendo condições especiais e flexibilidade para o pagamento. Simule agora!"
        keywords="empréstimo FGTS, crédito FGTS, América Financeira, simulação de empréstimo, antecipação FGTS, condições especiais"
      />

      <Header
        title="Empréstimo FGTS"
        subtitle={`Aproveite seu FGTS para \n transformar seus planos\nem realidade`}
        paragraph="*Sujeito à análise de crédito e condições do produto"
        image={IMAGES.src}
      />

      <Spotlight
        title="O que é o Empréstimo FGTS?"
        subtitle="Descubra o Empréstimo FGTS"
        paragraph="O empréstimo FGTS é uma modalidade de crédito que permite utilizar o saldo do Fundo de Garantia do Tempo de Serviço (FGTS) como garantia. É uma alternativa para quem precisa de dinheiro extra, oferecendo condições especiais e flexibilidade para o pagamento."
        label="Simule seu FGTS"
        position="right"
        image={IMAGE.DUAS_PESSOAS_CONVERSANDO.src}
        alt="Sobre o Empréstimo FGTS"
        width={100}
        height={98}
      />

      <Simulation />
      <Banks />

      <Panel
        title="Antecipação FGTS"
        subtitle="Antecipe seu FGTS com a América e tenha acesso rápido ao seu dinheiro quando precisar. Simplificamos o processo para você aproveitar seus recursos antes do prazo habitual."
        paragraph="Antecipar FGTS"
        position="right"
        image={IMAGE.INVESTIMENTO.src}
        alt="Imagem representativa de antecipação de FGTS"
        height={98}
        width={100}
      />

      <Panel
        title="Cartão de Crédito"
        subtitle="A América oferece cartões de débito de bancos parceiros, com benefícios exclusivos. Somos especialistas em conectar você às melhores opções financeiras, sem ser um banco."
        paragraph="Solicitar agora"
        position="left"
        image={IMAGE.CARTAO_CREDITO.src}
        alt="Imagem de Cartão de Crédito"
        height={100}
        width={100}
      />

      <Faq items={FAQLOAN} title="Ficou com alguma dúvida sobre Empréstimo FGTS?" />
    </div>
  )
}

export default LoanFGTS
