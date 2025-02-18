import { Meta, Header, Spotlight, Benefits, Banks, Panel, Faq } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

const BENEFITS = [
  {
    title: 'Consolidação de dívidas',
    subtitle: 'Simplifique sua vida financeira consolidando várias dívidas em uma única parcela mais baixa.',
    image: IMAGE.PAGAR_DIVIDAS,
  },

  {
    title: 'Educação e qualificação',
    subtitle: 'Invista no seu futuro com cursos e especializações, financiados por um crédito acessível.',
    image: IMAGE.AUMENTAR_LUCRO,
  },
  {
    title: 'Viagens e lazer',
    subtitle: 'Aproveite momentos especiais e faça aquela viagem dos sonhos com parcelas que cabem no seu bolso.',
    image: IMAGE.VIAGEM,
  },
]

const FAQLOAN = [
  {
    question: 'O que é um Empréstimo Pessoal?',
    answer:
      'O empréstimo pessoal é um tipo de crédito oferecido por instituições financeiras para pessoas físicas, que pode ser usado para diversas finalidades, como quitar dívidas, fazer compras ou cobrir despesas emergenciais.',
  },
  {
    question: 'Quais são os requisitos para obter um Empréstimo Pessoal?',
    answer:
      'Os requisitos geralmente incluem ter mais de 18 anos, apresentar documento de identidade, CPF, comprovante de renda e comprovante de residência. Além disso, é necessário ter uma conta bancária em seu nome.',
  },
  {
    question: 'Qual é o prazo de pagamento de um Empréstimo Pessoal?',
    answer:
      'O prazo de pagamento pode variar de acordo com a instituição financeira e o valor emprestado, mas geralmente varia entre 6 a 60 meses.',
  },
  {
    question: 'Quais são as taxas de juros de um Empréstimo Pessoal?',
    answer:
      'As taxas de juros podem variar bastante dependendo da instituição financeira, do perfil do tomador de crédito e das condições do mercado. É importante comparar diferentes opções antes de contratar.',
  },
  {
    question: 'Como posso solicitar um Empréstimo Pessoal online?',
    answer:
      'Para solicitar um empréstimo pessoal online, acesse o site da instituição financeira, preencha o formulário de solicitação com seus dados pessoais e documentos necessários, e aguarde a análise e aprovação do crédito.',
  },
]

const LoanPersonal = () => {
  const IMAGES = IMAGE.DUAS_PESSOAS_CONVERSANDO

  return (
    <div>
      <Meta
        title="Empréstimo Pessoal: Online, Ágil e Seguro"
        description="Empréstimo pessoal rápido e fácil, com as melhores condições e benefícios para atender todas suas necessidades financeiras pessoais. Simule agora!"
        keywords="empréstimo pessoal, crédito pessoal, América Financeira, simulação de empréstimo, condições de empréstimo, benefícios financeiros"
      />

      <Header
        title="Empréstimo Pessoal"
        subtitle={`Empréstimo pra você, \n rápido e fácil`}
        paragraph="*Sujeito à análise de crédito e condições do produto"
        image={IMAGES.src}
      />

      <Spotlight
        title="O que é o empréstimo pessoal?"
        subtitle="Sobre o empréstimo pessoal"
        paragraph="O empréstimo pessoal é um tipo de crédito oferecido por instituições financeiras para indivíduos que necessitam de dinheiro para diversas finalidades pessoais, como pagar dívidas, realizar compras ou lidar com emergências."
        label="Simular empréstimo"
        position="left"
        image={IMAGE.PESSOA_OLHANDO_PRA_VOCÊ.src}
        alt="O que é o Empréstimo Pessoal?"
        width={100}
        height={98}
      />

      <Benefits
        title={`Seu empréstimo pessoal \n ideal está aqui`}
        subtitle={`Oferecemos as melhores condições e benefícios para atender todas suas \n necessidades financeiras pessoais.`}
        items={BENEFITS}
        width={100}
        height={100}
      />

      <Banks />

      <Panel
        title="Cartão de Crédito"
        subtitle="A América oferece cartões de débito de bancos parceiros, com benefícios exclusivos. Somos especialistas em conectar você às melhores opções financeiras, sem ser um banco."
        paragraph="Solicitar agora"
        position="left"
        image={IMAGE.CARTAO_CREDITO.src}
        alt="Imagem de Cartão de Crédito"
        width={100}
        height={100}
      />

      <Panel
        title="Antecipação FGTS"
        subtitle="Antecipe seu FGTS com a América e tenha acesso rápido ao seu dinheiro quando precisar. Simplificamos o processo para você aproveitar seus recursos antes do prazo habitual."
        paragraph="Antecipar FGTS"
        position="right"
        image={IMAGE.INVESTIMENTO.src}
        alt="Imagem representativa de antecipação de FGTS"
        width={100}
        height={100}
      />

      <Faq items={FAQLOAN} title="Ficou com alguma dúvida sobre Empréstimo Pessoal?" />
    </div>
  )
}

export default LoanPersonal
