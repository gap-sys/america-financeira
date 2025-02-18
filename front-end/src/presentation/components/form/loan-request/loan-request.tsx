'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'

import { Modal, Button } from 'src/presentation/components'

import S from './loan-request.module.scss'

type LoanRequestProps = {
  nome: string
  email: string
  whatsapp: string
  cpf: string
  tipoSolicitacao: string
  termos: boolean
}

const LoanRequest = () => {
  const [modalMessage, setModalMessage] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoanRequestProps>({
    defaultValues: {
      nome: '',
      email: '',
      whatsapp: '',
      cpf: '',
    },
  })

  const onSubmit = async (data: LoanRequestProps) => {
    try {
      const response = await fetch('/api/loan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Não foi possível processar a solicitação. Por favor, tente novamente mais tarde.')
      }

      setModalMessage('Obrigado! Em breve entraremos em contato.')
      reset()
    } catch (error) {
      setModalMessage('Ops! Por favor, tente novamente mais tarde.')
    } finally {
      setIsModalOpen(true)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={S.form}>
        <fieldset>
          <legend className={S.title}>O dinheiro que você precisa, com as menores taxas.</legend>
          <input
            {...register('nome', {
              required: 'Nome é obrigatório',
              minLength: {
                value: 4,
                message: 'Nome deve ter no mínimo 4 caracteres',
              },
            })}
            className={`${S['input-text']} ${errors.nome ? S['input-text-error'] : ''}`}
            type="text"
            placeholder="Nome"
          />

          <input
            {...register('email', {
              required: 'E-mail é obrigatório',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'E-mail inválido',
              },
            })}
            className={`${S['input-text']} ${errors.email ? S['input-text-error'] : ''}`}
            type="text"
            placeholder="E-mail"
          />

          <InputMask
            {...register('whatsapp', {
              required: 'Whatsapp é obrigatório',
              pattern: {
                value: /^\(\d{2}\) \d{5}-\d{4}$/,
                message: 'Whatsapp inválido',
              },
            })}
            mask="(99) 99999-9999"
            maskChar=""
            className={`${S['input-text']} ${errors.whatsapp ? S['input-text-error'] : ''}`}
            type="tel"
            inputMode="tel"
            placeholder="Whatsapp"
          />

          <InputMask
            {...register('cpf', {
              required: 'CPF é obrigatório',
              pattern: {
                value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                message: 'CPF inválido',
              },
            })}
            mask="999.999.999-99"
            maskChar=""
            className={`${S['input-text']} ${errors.cpf ? S['input-text-error'] : ''}`}
            type="text"
            placeholder="CPF"
            inputMode="numeric"
          />

          <select
            className={`${S['input-text']} ${errors.tipoSolicitacao ? S['input-text-error'] : ''}`}
            {...register('tipoSolicitacao', {
              required: 'Tipo de solicitação é obrigatório',
            })}
          >
            <option value="" disabled hidden>
              Qual tipo de solicitação?
            </option>
            <option className={S['option']} value="Credito Pessoal">
              Crédito Pessoal
            </option>
            <option className={S['option']} value="Credito Consignado">
              Crédito Consignado
            </option>
            <option className={S['option']} value="Antecipação FGTS">
              Antecipação FGTS
            </option>
            <option className={S['option']} value="Cartão de Crédito">
              Cartão de Crédito
            </option>
          </select>

          <div className={S['terms-box']}>
            <input
              className={`${S.checkbox} ${errors.termos ? S['checkbox-error'] : ''}`}
              type="checkbox"
              {...register('termos', {
                required: 'Você deve aceitar os termos para continuar',
              })}
              name="termos"
            />
            <label className={S['label-checkbox']} htmlFor="termos">
              Aceito receber comunicações da América Financeira
            </label>
          </div>

          <Button typeStyle="btn1" width="100%" label={isSubmitting ? 'Contratando' : 'Quero contratar'} />
        </fieldset>
      </form>

      <Modal open={isModalOpen} close={closeModal} message={modalMessage} />
    </div>
  )
}

export default LoanRequest
