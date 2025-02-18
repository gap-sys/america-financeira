import S from './terms.module.scss'

type ItemProps = {
  title: string
  description: string
}

interface TermsProps {
  title: string
  overview: string
  introduction1: string
  subtitle1: string
  introduction2: string
  subtitle2: string
  introduction3: string
  subtitle3: string
  introduction4: string
  subtitle4: string
  introduction5: string
  subtitle5: string
  introduction6: string
  subtitle6: string
  introduction7?: string
  subtitle7?: string
  introduction8?: string
  subtitle8?: string
  introduction9?: string
  subtitle9?: string
  introduction10?: string
  subtitle10?: string
  conclusion: string
  description: string
}

const Terms = ({
  title,
  overview,
  introduction1,
  subtitle1,
  introduction2,
  subtitle2,
  introduction3,
  subtitle3,
  introduction4,
  subtitle4,
  introduction5,
  subtitle5,
  introduction6,
  subtitle6,
  introduction7,
  subtitle7,
  introduction8,
  subtitle8,
  introduction9,
  subtitle9,
  introduction10,
  subtitle10,
  conclusion,
  description,
}: TermsProps) => (
  <div className={S.container}>
    <h1 className={S['title']}>{title}</h1>
    <p className={S.overview}>{overview}</p>

    {/* Introduções e subtítulos */}
    <h3 className={S['subtitle']}>{introduction1}</h3>
    <p className={S['content']}>{subtitle1}</p>
    <h3 className={S['subtitle']}>{introduction2}</h3>
    <p className={S['content']}>{subtitle2}</p>
    <h3 className={S['subtitle']}>{introduction3}</h3>
    <p className={S['content']}>{subtitle3}</p>
    <h3 className={S['subtitle']}>{introduction4}</h3>
    <p className={S['content']}>{subtitle4}</p>
    <h3 className={S['subtitle']}>{introduction5}</h3>
    <p className={S['content']}>{subtitle5}</p>
    <h3 className={S['subtitle']}>{introduction6}</h3>
    <p className={S['content']}>{subtitle6}</p>
    <h3 className={S['subtitle']}>{introduction7}</h3>
    <p className={S['content']}>{subtitle7}</p>
    <h3 className={S['subtitle']}>{introduction8}</h3>
    <p className={S['content']}>{subtitle8}</p>
    <h3 className={S['subtitle']}>{introduction9}</h3>
    <p className={S['content']}>{subtitle9}</p>
    <h3 className={S['subtitle']}>{introduction10}</h3>
    <p className={S['content']}>{subtitle10}</p>
    <h3 className={S['subtitle']}>{conclusion}</h3>
    <p className={S['content']}>{description}</p>
  </div>
)

export default Terms
