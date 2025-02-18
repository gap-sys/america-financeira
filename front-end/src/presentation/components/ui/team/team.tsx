import Image, { type StaticImageData } from 'next/image'

import { IMAGE } from 'src/presentation/assets'

import classNames from 'classnames'

import S from './team.module.scss'

const TEAMPHOTOS = [
  { src: IMAGE.EQUIPE_TODOS_AMARELO, alt: 'Equipe unida posando para foto' },
  { src: IMAGE.EQUIPE_TODA, alt: 'Foto final da equipe em evento de confraternização' },
  { src: IMAGE.DUAS_MENINAS, alt: 'Equipe assistindo apresentação na TV' },
  { src: IMAGE.EQUIPE_TODOS_VERMELHO, alt: 'Allan durante a confraternização da equipe' },
  { src: IMAGE.CONFRATERNIZACAO_TROFEU, alt: 'Equipe toda vestida de vermelho para evento especial' },
  { src: IMAGE.PARCEIROS, alt: 'Equipe celebrando com troféu em mãos' },
]

type TeamProps = {
  width: number
  height: number
}

const Team = ({ width, height }: TeamProps) => (
  <div className={S.container}>
    <div className={classNames(S.row, S['justify-content-center'])}>
      <div className={S['title-section']}>
        <h3 className={S.subtitle}>Nossa equipe</h3>
        <h1 className={S.title}>Conectando histórias e transformando vidas</h1>
      </div>
    </div>
    <div className={classNames(S.row, S['form-row'], S['align-items-center'])}>
      <div className={classNames(S.col, S['col-3'])}>
        <div className={S['img-square']}>
          <Image
            src={TEAMPHOTOS[5].src}
            alt={TEAMPHOTOS[5].alt}
            className={S['img-cover']}
            layout="responsive"
            height={height}
            width={width}
          />
        </div>
      </div>
      <div className={classNames(S.col, S['col-6'])}>
        <div className={classNames(S.row, S['form-row'], S['align-items-end'], S.mb2)}>
          {TEAMPHOTOS.slice(1, 3).map((img, index) => (
            <div key={index} className={classNames(S.col, S[`col-${index === 0 ? 7 : 6}`])}>
              <div className={S['img-square']}>
                <Image
                  layout="responsive"
                  width={width}
                  height={height}
                  src={img.src}
                  alt={img.alt}
                  className={S['img-cover']}
                />
              </div>
            </div>
          ))}
        </div>
        <div className={S.row}>
          {TEAMPHOTOS.slice(3, 5).map((img, index) => (
            <div key={index} className={classNames(S.col, S[`col-${index === 0 ? 5 : 7}`])}>
              <div className={S['img-square']}>
                <Image
                  width={width}
                  height={height}
                  layout="responsive"
                  src={img.src}
                  alt={img.alt}
                  className={S['img-cover']}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={classNames(S.col, S['col-3'])}>
        <div className={S['img-square']}>
          <Image
            src={TEAMPHOTOS[0].src}
            alt={TEAMPHOTOS[0].alt}
            className={S['img-cover']}
            layout="responsive"
            height={height}
            width={width}
            quality={100}
          />
        </div>
      </div>
    </div>
  </div>
)
export default Team
