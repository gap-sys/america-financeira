import React from 'react'
import S from './loan-process.module.scss'
import Image from 'next/image'
import { ICON, IMAGE } from 'src/presentation/assets'
import Link from 'next/link'

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
          <Link
            href="https://api.whatsapp.com/send?phone=5519988335683&text=Ol%C3%A1,%20gostaria%20de%20simular%20minha%20antecipa%C3%A7%C3%A3o%20do%20FGTS."
            target="_blank"
            rel="noopener noreferrer"
            legacyBehavior
          >
            <div className={S['button-section']}>
              <a className={S.link}>
                <span>Fale Conosco</span>
              </a>
              <ICON.IconBrandWhatsapp className={S.icon} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoanProcess
