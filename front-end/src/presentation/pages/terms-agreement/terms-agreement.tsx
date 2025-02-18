import { Meta, Terms } from 'src/presentation/components'
import S from './terms-agreement.module.scss'

const TERMS = {
  title: 'Uso do Site',
  overview:
    'Os presentes Termos e Condições regulam o uso do site da América Financeira, bem como todos os conteúdos, serviços e produtos oferecidos por meio deste. O acesso e uso do site estão condicionados à aceitação e conformidade com os termos aqui estabelecidos, bem como com as políticas adicionais que possam ser publicadas de tempos em tempos. O site é de propriedade da América Financeira, sendo operado sob sua responsabilidade. A utilização deste site está sujeita à sua aceitação integral e sem modificações dos termos contidos neste documento, incluindo as disposições da Política de Privacidade da América Financeira.',

  introduction1: 'Aceitação dos Termos',
  subtitle1:
    'Ao acessar ou utilizar qualquer parte deste site, você declara que leu, compreendeu e concorda com todos os termos e condições descritos neste documento. Caso não concorde com qualquer parte destes Termos, você não deverá acessar o site ou utilizar os serviços nele oferecidos.',

  introduction2: 'Propriedade Intelectual',
  subtitle2:
    'Todos os direitos de propriedade intelectual sobre o conteúdo deste site, incluindo textos, imagens, vídeos, gráficos, logotipos, marcas registradas, softwares e outros materiais, são de titularidade exclusiva da América Financeira ou de seus respectivos licenciadores. Estes conteúdos são protegidos por leis de direitos autorais, marcas registradas, patentes e outros direitos de propriedade intelectual, sendo vedada a sua reprodução, distribuição ou modificação sem a devida autorização expressa da América Financeira.',

  introduction3: 'Uso Permitido',
  subtitle3:
    'Este site é destinado exclusivamente para uso pessoal e não comercial. O usuário não está autorizado a utilizar qualquer conteúdo do site para fins comerciais sem a expressa autorização da América Financeira. O uso do site está sujeito às limitações estabelecidas nos presentes Termos de Uso e nas legislações vigentes.',

  introduction4: 'Limitação de Responsabilidade',
  subtitle4:
    'A América Financeira não se responsabiliza por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais, incluindo, mas não se limitando à perda de lucros, dados, ou qualquer outra perda intangível, resultante de (i) seu acesso ao site, uso ou incapacidade de usá-lo; (ii) qualquer erro ou omissão no conteúdo do site; (iii) qualquer ato ou conduta de terceiros no site. A América Financeira não oferece garantias de que o site será livre de erros ou interrupções.',

  introduction5: 'Modificação dos Termos',
  subtitle5:
    'A América Financeira se reserva o direito de, a qualquer momento, modificar ou atualizar os presentes Termos e Condições de Uso, sem necessidade de aviso prévio. O usuário é responsável por revisar periodicamente os Termos, sendo que o uso contínuo do site após quaisquer modificações será considerado como aceitação das alterações.',

  introduction6: 'Contato',
  subtitle6:
    'Caso o usuário tenha quaisquer dúvidas ou solicitações relacionadas aos Termos de Uso, deverá entrar em contato com a América Financeira através dos canais de comunicação disponibilizados no site. Todos os contatos serão tratados conforme nossa Política de Privacidade.',

  conclusion: 'Disposições Finais',
  description:
    'Os presentes Termos e Condições de Uso são regidos pela legislação brasileira. Qualquer disputa relacionada a este Acordo será resolvida de acordo com as leis do Brasil, no foro da cidade de São Paulo, SP. Caso alguma disposição deste Acordo seja considerada inválida ou inaplicável por um tribunal competente, as demais disposições continuarão em vigor. Estes Termos e Condições constituem o acordo integral entre as partes e substituem todos os acordos ou entendimentos anteriores relacionados ao uso do site.',
}

const TermsAgreement = () => (
  <div className={S.container}>
    <Meta
      title="Termos de Uso"
      description="Leia os Termos de Uso da América Financeira e compreenda as condições para utilizar nossos serviços."
      keywords="termos de uso, América Financeira, políticas, serviços"
    />

    <div className={S['header']}>
      <div className={S.box}>
        <h1 className={S.title}>Termos de Uso</h1>
      </div>
    </div>

    <Terms
      title={TERMS.title}
      overview={TERMS.overview}
      introduction1={TERMS.introduction1}
      subtitle1={TERMS.subtitle1}
      introduction2={TERMS.introduction2}
      subtitle2={TERMS.subtitle2}
      introduction3={TERMS.introduction3}
      subtitle3={TERMS.subtitle3}
      introduction4={TERMS.introduction4}
      subtitle4={TERMS.subtitle4}
      introduction5={TERMS.introduction5}
      subtitle5={TERMS.subtitle5}
      introduction6={TERMS.introduction6}
      subtitle6={TERMS.subtitle6}
      conclusion={TERMS.conclusion}
      description={TERMS.description}
    />
  </div>
)

export default TermsAgreement
