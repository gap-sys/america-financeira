import { Meta, Header, Benefits, Faq, Banks, Spotlight } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

const BENEFITS = [
  {
    title: 'Investimento em saúde',
    subtitle: 'Cuide da sua saúde e da sua família com tratamentos médicos e dentários financiados de forma acessível.',
    image: IMAGE.SAUDE_INVESTIMENTO,
  },
  {
    title: 'Melhoria da casa',
    subtitle: 'Renove sua casa, faça reformas e melhore o seu espaço de viver com um crédito de baixo custo.',
    image: IMAGE.CASA_DOS_SONHOS,
  },
  {
    title: 'Renovação de bens',
    subtitle: 'Troque seu carro, móveis ou eletrônicos antigos por novos, com condições de pagamento acessíveis.',
    image: IMAGE.MOVEIS_CASA,
  },
]

const FAQLOAN = [
  {
    question: 'Qual a diferença entre Empréstimo Consignado e Empréstimo Pessoal?',
    answer:
      'O Empréstimo Consignado tem as parcelas descontadas diretamente da folha de pagamento ou benefício, geralmente com taxas de juros mais baixas, enquanto o Empréstimo Pessoal é pago via boleto ou débito automático, com taxas de juros mais altas.',
  },
  {
    question: 'Quem pode contratar um Empréstimo Consignado?',
    answer:
      'Aposentados e pensionistas do INSS, servidores públicos, militares e funcionários de empresas privadas conveniadas.',
  },
  {
    question: 'Existe um limite de idade para contratar um Empréstimo Consignado?',
    answer: 'Sim, geralmente a idade máxima é de 80 anos, mas pode variar de acordo com a instituição financeira.',
  },
  {
    question: 'Posso contratar mais de um Empréstimo Consignado?',
    answer: 'Sim, desde que a soma das parcelas não ultrapasse a margem consignável disponível.',
  },
  {
    question: 'Quais são as taxas de juros do Empréstimo Consignado?',
    answer:
      'As taxas de juros variam entre as instituições financeiras, mas geralmente são mais baixas do que as do Empréstimo Pessoal.',
  },
  {
    question: 'O que acontece se eu perder o emprego durante o pagamento do Empréstimo Consignado?',
    answer: 'As parcelas continuarão a ser cobradas, mas o pagamento poderá ser renegociado diretamente com o banco.',
  },
  {
    question: 'Como faço para saber minha margem consignável disponível?',
    answer:
      'Você pode consultar a margem consignável disponível através do seu contracheque ou benefício do INSS, ou diretamente com o RH da sua empresa ou instituição financeira.',
  },
  {
    question: 'Posso quitar o Empréstimo Consignado antes do prazo?',
    answer: 'Sim, é possível quitar o empréstimo antecipadamente, e você pode obter desconto nos juros futuros.',
  },
  {
    question: 'Como é feita a contratação de um Empréstimo Consignado online?',
    answer:
      'Você pode fazer a solicitação através do site ou aplicativo do banco, enviando os documentos necessários e assinando o contrato digitalmente.',
  },
  {
    question: 'Quais são as vantagens do Empréstimo Consignado?',
    answer:
      'As principais vantagens incluem taxas de juros mais baixas, parcelas fixas descontadas diretamente do salário ou benefício, e prazos de pagamento mais longos.',
  },
]

const LoanPayroll = () => {
  const IMAGES = IMAGE.EMPRESTIMO_CONSIGNADO_APOSENTADOS

  return (
    <div>
      <Meta
        title="Empréstimo Consignado: Seguro, Rápido e com Taxas Baixas"
        description="O empréstimo consignado é a solução ideal para quem busca crédito com segurança e taxas de juros baixas. Simule agora e veja como é fácil."
        keywords="empréstimo consignado, crédito consignado, América Financeira, simulação de empréstimo, taxas baixas, segurança financeira"
      />

      <Header
        title="Empréstimo Consignado"
        subtitle={`Dinheiro extra para \n alcançar seus planos \n e realizar os seus sonhos`}
        paragraph="*Sujeito à análise de crédito e condições do produto"
        image={IMAGES.src}
      />

      <Spotlight
        title="O que é o empréstimo consignado?"
        subtitle="Sobre o empréstimo consignado"
        paragraph="O empréstimo consignado é um tipo de crédito onde as parcelas são descontadas diretamente da folha de pagamento. Isso garante condições mais favoráveis, como taxas de juros mais baixas e prazos mais flexíveis. Ideal para quem busca um crédito com segurança e benefícios exclusivos."
        label="Simular empréstimo consignado"
        position="left"
        image={IMAGE.IDOSO_REALIZANDO_EMPRESTIMO.src}
        alt="O que é o Empréstimo Consignado?"
        width={100}
        height={98}
      />

      <Benefits
        title={`Benefícios do empréstimo \n consignado para você`}
        subtitle={`Descubra como o empréstimo consignado pode facilitar sua vida\nfinanceira com taxas baixas e condições vantajosas.`}
        items={BENEFITS}
        width={100}
        height={100}
      />

      <Banks />
      <Faq items={FAQLOAN} title="Ficou com alguma dúvida sobre Empréstimo Consignado?" />
    </div>
  )
}

export default LoanPayroll
