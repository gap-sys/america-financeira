import { Meta, Terms } from 'src/presentation/components'

import S from './privacy-agreement.module.scss'

const POLICY = {
  title: '',
  overview:
    'Sua privacidade é essencial para nós. Estamos comprometidos com a proteção e o uso adequado das suas informações pessoais, conforme a LGPD e as normas do Banco Central do Brasil.',

  introduction1: 'Quem somos',
  subtitle1:
    'A Mastermind Serviços Administrativos Ltda oferece serviços de assessoria financeira e intermediação de crédito. Somos uma empresa com uma vasta experiência no mercado, atuando com transparência e comprometimento com a confiança de nossos clientes. Nosso CNPJ é 54.139.158/0001-76, e somos responsáveis pela segurança e integridade dos dados tratados.',

  introduction2: 'Nosso Compromisso com a Privacidade',
  subtitle2:
    'Nosso compromisso com a privacidade é sério. Estamos sempre buscando oferecer a melhor experiência para nossos clientes, garantindo que seus dados pessoais sejam tratados com a máxima segurança e respeito. Nos comprometemos a seguir rigorosamente as normas da LGPD e todas as legislações pertinentes, para que você possa se sentir tranquilo ao utilizar nossos serviços.',

  introduction3: 'Objetivo da Política',
  subtitle3:
    'O objetivo desta política é esclarecer de forma clara e transparente como coletamos, tratamos e protegemos os dados pessoais de nossos usuários, proporcionando mais segurança e confiança. Queremos garantir que todos saibam o que fazemos com seus dados e como os utilizamos para oferecer a melhor experiência em nossos serviços.',

  introduction4: 'Coleta de Dados',
  subtitle4:
    'Coletamos dados de maneira direta, por meio de informações fornecidas pelos próprios usuários, como nome, CPF, dados bancários e outros dados que possam ser necessários. Também coletamos dados de forma indireta, como informações automatizadas sobre navegação em nosso site e dados obtidos de terceiros, para garantir um serviço mais eficiente e personalizado.',

  introduction5: 'Finalidade do Tratamento de Dados',
  subtitle5:
    'Utilizamos seus dados para vários fins essenciais ao funcionamento de nossos serviços, como autenticar transações financeiras, oferecer serviços personalizados, prevenir fraudes, cumprir com nossas obrigações legais e, claro, melhorar constantemente nossos produtos e serviços para oferecer a melhor experiência possível.',

  introduction6: 'Consentimento para Coleta de Dados',
  subtitle6:
    'Solicitamos seu consentimento antes de coletar ou utilizar seus dados para qualquer finalidade não prevista nesta política. O consentimento é fundamental para garantir a transparência no uso das informações. Além disso, você tem o direito de revogar seu consentimento a qualquer momento, de forma simples e prática, caso assim deseje.',

  introduction7: 'Compartilhamento de Dados',
  subtitle7:
    'Seus dados podem ser compartilhados com instituições financeiras, autoridades públicas e prestadores de serviços que nos auxiliam a oferecer nossos serviços. Sempre respeitaremos sua privacidade e garantiremos que qualquer compartilhamento de dados seja feito de forma segura, com a devida proteção.',

  introduction8: 'Segurança e Proteção de Dados',
  subtitle8:
    'Adotamos diversas medidas técnicas e organizacionais para proteger seus dados contra acessos não autorizados, perdas ou qualquer forma de uso indevido. Contudo, é importante frisar que, apesar de todos os esforços, não podemos garantir segurança absoluta contra incidentes imprevistos, dado o caráter dinâmico da tecnologia.',

  introduction9: 'Seus Direitos sobre Dados Pessoais',
  subtitle9:
    'Você tem o direito de acessar, corrigir, excluir ou portar seus dados pessoais a qualquer momento. Além disso, pode revogar seu consentimento a qualquer momento ou até mesmo se opor ao uso de seus dados para determinadas finalidades, conforme estipulado pela LGPD. Estamos sempre à disposição para garantir o respeito aos seus direitos.',

  introduction10: 'Retenção de Dados',
  subtitle10:
    'Armazenamos seus dados pelo tempo necessário para cumprir os objetivos desta política, bem como para atender a obrigações legais. Quando não houver mais necessidade de manutenção dos dados, tomaremos as medidas adequadas para descartá-los de maneira segura.',

  conclusion: 'Detalhes Adicionais',
  description:
    'Caso tenha mais dúvidas ou precise de mais informações, estamos à disposição para esclarecimentos. Entre em contato conosco para uma explicação mais detalhada sobre como protegemos seus dados. Esta política entra em vigor a partir de Maio/2021, e pode ser atualizada conforme necessário para atender às normas e legislações vigentes.',
}

const PrivacyAgreement = () => (
  <div className={S.container}>
    <Meta
      title="Política de Privacidade"
      description="Leia nossa Política de Privacidade e saiba como protegemos e utilizamos suas informações pessoais."
      keywords="política de privacidade, proteção de dados, LGPD"
    />

    <div className={S.header}>
      <div className={S.box}>
        <h1 className={S.title}>Política de Privacidade</h1>
      </div>
    </div>

    <Terms
      title={POLICY.title}
      overview={POLICY.overview}
      introduction1={POLICY.introduction1}
      subtitle1={POLICY.subtitle1}
      introduction2={POLICY.introduction2}
      subtitle2={POLICY.subtitle2}
      introduction3={POLICY.introduction3}
      subtitle3={POLICY.subtitle3}
      introduction4={POLICY.introduction4}
      subtitle4={POLICY.subtitle4}
      introduction5={POLICY.introduction5}
      subtitle5={POLICY.subtitle5}
      introduction6={POLICY.introduction6}
      subtitle6={POLICY.subtitle6}
      introduction7={POLICY.introduction7}
      subtitle7={POLICY.subtitle7}
      introduction8={POLICY.introduction8}
      subtitle8={POLICY.subtitle8}
      introduction9={POLICY.introduction9}
      subtitle9={POLICY.subtitle9}
      introduction10={POLICY.introduction10}
      subtitle10={POLICY.subtitle10}
      conclusion={POLICY.conclusion}
      description={POLICY.description}
    />
  </div>
)

export default PrivacyAgreement
