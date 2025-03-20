import React from 'react'

import { BsArrowRight } from 'react-icons/bs'

import { ICON } from 'src/presentation/assets'

import S from './fgts-simulation.module.scss'
import Link from 'next/link'

interface FgtsSimulationProps {
  backgroundColor: string
  color: string
}

const FgtsSimulation: React.FC<FgtsSimulationProps> = ({ backgroundColor, color }) => {
  return (
    <div className={S['container']} style={{ backgroundColor }}>
      <div className={S['fgts-simulation']}>
        <div className={S['text-section']}>
          <ICON.IconUsers style={{ color }} className={S.icon} size={64} />
          <p className={S['text']} style={{ color }}>
            Simule agora mesmo! Informe seu saldo FGTS:
          </p>
        </div>
        <div className={S['simulation-section']}>
          <div className={S['input-wrapper']}>
            <span className={S['currency']}>R$</span>
            <input type="number" placeholder="Ex.: 4.000,00" className={S['input']} min="0" inputMode="numeric" />
            <Link
              href="https://wa.me/message/DIKVSOOIFZJZK1"
              target="_blank"
              rel="noopener noreferrer"
              legacyBehavior
            >
              <button className={`${S.button}`}>
                Simular <BsArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>
        <Link
          href="https://api.whatsapp.com/send?phone=5519988285625&text=Ol%C3%A1,%20gostaria%20de%20simular%20minha%20antecipa%C3%A7%C3%A3o%20do%20FGTS"
          target="_blank"
          rel="noopener noreferrer"
          legacyBehavior
        >
          <button className={`${S['button-phone']}`}>
            Simular <BsArrowRight className={S.icon} size={24} />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default FgtsSimulation
