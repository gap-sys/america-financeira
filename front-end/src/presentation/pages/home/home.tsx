import { Meta, Header, Founder, Carousel, Warning, Benefits, Faq } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

const BENEFITS = [
  {
    title: 'Quitar as dívidas',
    subtitle: 'Troque as dívidas caras por uma única, mais saudável e com parcelas mais acessíveis.',
    image: IMAGE.PAGAR_DIVIDAS,
  },
  {
    title: 'Impulsionar seu negócio',
    subtitle: 'Invista no seu capital com um crédito que te dá mais prazo e com juros mais baixos.',
    image: IMAGE.CRESCIMENTO_EMPRESA,
  },
  {
    title: 'Realizar sonhos',
    subtitle: 'Tire do papel o plano de reformar a casa ou adquirir novos bens com um crédito saudável.',
    image: IMAGE.SONHOS,
  },
]

const FAQLOAN = [
  {
    question: 'O que é Margem Consignável?',
    answer:
      'É o valor máximo do salário ou benefício líquido mensal que pode ser comprometido com parcelas de empréstimo consignado e despesas do cartão de crédito consignado. Não pode ultrapassar 40%, sendo 35% para empréstimo e 5% para o cartão.',
  },
  {
    question: 'O que é Cartão de Crédito Consignado?',
    answer:
      'É aquele em que o valor mínimo da fatura é descontado mensalmente do contracheque ou benefício INSS, com uma margem adicional de 5%, além dos 30% padrão do Empréstimo Consignado.',
  },
  {
    question: 'O que é averbação do contrato do Empréstimo Consignado?',
    answer:
      'É a autorização realizada pelo INSS ou órgãos conveniados para que as parcelas do empréstimo sejam consignadas ao banco.',
  },
  {
    question: 'Quais são os prazos máximos para pagamento do Empréstimo Consignado?',
    answer: 'Aposentados e Pensionistas INSS podem pagar em até 84 meses; Servidores Públicos, em até 96 meses.',
  },
  {
    question: 'Quais são os documentos para pedir um Empréstimo Online?',
    answer:
      'Documento de identidade com foto (RG ou CNH), CPF, conta bancária (exceto conta salário), e comprovante de renda fixa (holerite, extrato bancário, imposto de renda ou pro-labore).',
  },
  {
    question: 'O que é portabilidade de Crédito Consignado?',
    answer:
      'É a possibilidade de transferir a dívida de um empréstimo consignado de um banco para outro, buscando melhores condições, como taxas de juros menores ou prazos mais vantajosos.',
  },
  {
    question: 'Posso antecipar o pagamento das parcelas do Empréstimo Consignado?',
    answer:
      'Sim, é possível antecipar o pagamento das parcelas. Consulte seu banco para obter informações sobre o processo e eventuais descontos por antecipação.',
  },
  {
    question: 'Como funciona o processo de contratação do Empréstimo Consignado?',
    answer:
      'O processo inclui a solicitação do empréstimo, análise de crédito, aprovação, assinatura do contrato, e averbação pelo órgão pagador. Após a averbação, o valor é liberado na conta bancária do solicitante.',
  },
]

const Home = () => {
  const IMAGES = IMAGE.EMPRESTIMO_CONSIGNADO_APOSENTADOS

  return (
    <div>
      <Meta
        title="Empréstimo Online - América Financeira"
        description="Realize seus sonhos com os serviços de crédito da América Financeira. Oferecemos empréstimos rápidos, fáceis e descomplicados. Simule agora!"
        keywords="crédito, empréstimo, América Financeira, simulação de empréstimo, antecipação FGTS, cartão de crédito"
        image={IMAGES.src}
      />

      <Header
        title="Solicite seu crédito agora mesmo!"
        subtitle={`Realizando sonhos \n através do Crédito!`}
        paragraph="*Aqui seu empréstimo é rápido, fácil e descomplicado"
        image={IMAGES.src}
      />

      <Warning />
      <Carousel />

      <Benefits
        title={`O crédito de qualidade\nque você merece`}
        subtitle={`Um empréstimo pode ser a solução financeira que você precisa\n para melhorar sua vida.`}
        items={BENEFITS}
      />

      <Founder />
      <Faq items={FAQLOAN} title="Ficou com alguma dúvida?" />
    </div>
  )
}

export default Home
