'use client'

import { useState } from 'react'

import { Button } from 'src/presentation/components'

import S from './faq.module.scss'

type ItemProps = {
  question: string
  answer: string
}

interface FaqProps {
  title: string
  items: ItemProps[]
}

const Faq = ({ items, title }: FaqProps) => {
  const [faqs, setFaqs] = useState(items ? items.map((faq) => ({ ...faq, open: false })) : [])
  const [showAll, setShowAll] = useState(false)

  const toggleFAQ = (index: number) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) => ({
        ...faq,
        open: i === index ? !faq.open : faq.open,
      }))
    )
  }

  const handleShowAll = () => {
    setShowAll(true)
  }

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5)

  return (
    <div className={S.container}>
      <h1 className={S.title}>{title}</h1>
      {visibleFaqs.map((faq, index) => (
        <div
          className={`${S['faq-section']} ${faq.open ? S.open : ''}`}
          key={index}
          onClick={() => toggleFAQ(index)}
          role="button"
          tabIndex={0}
        >
          <div className={S['faq-question']}>{faq.question}</div>
          {faq.open && <div className={S['faq-answer']}>{faq.answer}</div>}
        </div>
      ))}
      {!showAll && faqs.length > 5 && (
        <div className={S['btn-section']}>
          <Button typeStyle="btn2" label="Ver mais" width="150px" onClick={handleShowAll} />
        </div>
      )}
    </div>
  )
}

export default Faq
