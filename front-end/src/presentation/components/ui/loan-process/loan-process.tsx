import React from 'react'
import S from './loan-process.module.scss'
import Image from 'next/image'
import { ICON, IMAGE } from 'src/presentation/assets'
import Link from 'next/link'
import  FaleConoscoNav from '../../common/button/fale-conosco'

const LoanProcess = () => {
  return (
    <div className={S['container-box']}>
      <div id="como-obter" className={S['container']}>
        <div className={S['left']}>
          <div className={S['image-wrapper']}>
            <Image src={IMAGE.PESSOA_EMPRESARIA} alt="Mulher segurando um celular" className={S['image']} />
            <div className={S['badge']} style={{ top: '72%', left: '60%' }}>
              ⚡ Dinheiro rápido!
            </div>
            <div className={S['badge']} style={{ top: '43%', left: '-8%' }}>
              ✅ Sem burocracia!
            </div>
          </div>
        </div>
        <div className={S['right']}>
          <div className={S['text-section']}>
            <ICON.IconUsers className={S['icon-title']} size={64} />
            <h2 className={S['title']}>Como obter meu empréstimo?</h2>
          </div>
          <ul className={S['list']}>
            <li>Ter 18 anos ou mais, ou ser legalmente emancipado;</li>
            <li>CPF ativo e regular na Receita Federal;</li>
            <li>Possuir conta bancária, seja corrente ou poupança;</li>
            <li>Escolher a modalidade de saque-aniversário;</li>
            <li>Conceder autorização para o banco acessar seus dados e saldo do FGTS;</li>
            <li>Obter aprovação na simulação.</li>
          </ul>
          <h3 className={S['highlight']}>Dinheiro na conta!</h3>
          <FaleConoscoNav /> 
        </div>
      </div>
    </div>
  )
}

export default LoanProcess
