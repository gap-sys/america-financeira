import Image from 'next/image'
import Link from 'next/link'

import { Button } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

import S from './candidate.module.scss'

type CandidateProps = {
  position: 'left' | 'right'
}

const Candidate = ({ position }: CandidateProps) => {
  return (
    <div className={S.container}>
      {position === 'left' && (
        <>
          <div className={S['text-section']}>
            <h1 className={S.title}>Boas Vindas à América Financeira</h1>
            <p className={S.paragraph}>
              Imagine como seria trabalhar em um ambiente inovador, em uma empresa que não apenas supera desafios, mas
              os transforma em oportunidades de crescimento e aprendizado. Venha fazer parte da América Financeira e
              descubra como expandir sua jornada conosco. Conheça nossas vagas e seja parte dessa transformação.
            </p>
            <Link href="#candidate" target="_blank">
              <Button typeStyle="btn2" label="Candidate-se" width="300px" />
            </Link>
          </div>
          <div className={S['image-section']}>
            <Image
              width={100}
              height={98}
              layout="responsive"
              className={S.img}
              src={IMAGE.EQUIPE_TODA}
              alt="Equipe interagindo"
            />
          </div>
        </>
      )}
      {position === 'right' && (
        <>
          <div className={S['image-section']}>
            <Image
              width={100}
              height={98}
              layout="responsive"
              className={S.img}
              src={IMAGE.EQUIPE_TODOS_VERMELHO}
              alt="Equipe conversando"
            />
          </div>
          <div className={S['text-section']}>
            <h3 className={S.subtitle}>Nossa Cultura</h3>
            <h1 className={S.title}>A Cultura América Financeira é nossa essência</h1>
            <p className={S.paragraph}>
              Representa tudo o que nos conecta, nos inspira e nos move. Traduzimos os desafios diários em práticas que
              fortalecem nosso propósito e geram impacto. Aqui, cada pessoa tem um papel único e essencial para o nosso
              sucesso coletivo.
            </p>
            <Link href="#candidate" target="_blank">
              <Button typeStyle="btn2" label="Candidate-se" width="300px" />
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default Candidate
