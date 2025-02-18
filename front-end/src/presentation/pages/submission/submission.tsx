import Image from 'next/image'

import { useState } from 'react'
import InputMask from 'react-input-mask'
import { useForm } from 'react-hook-form'

import { Meta, Button, Modal } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

import S from './submission.module.scss'

type SubmissionProps = {
  nome: string
  email: string
  whatsapp: string
  cpf: string
  estado: string
  cidade: string
  termos: boolean
}

const Submission = () => {
  const [modalMessage, setModalMessage] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SubmissionProps>({
    defaultValues: {
      nome: '',
      email: '',
      whatsapp: '',
      cpf: '',
      estado: '',
      cidade: '',
    },
  })

  const onSubmit = async (data: SubmissionProps) => {
    try {
      const response = await fetch('/api/partner', {
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

  const closeModal = () => setIsModalOpen(false)

  return (
    <div className={S.container}>
      <Meta
        title="Formulário seja parceiro"
        description="Junte-se ao programa de parceria da America Financeira e descubra os benefícios exclusivos de ser nosso parceiro. Oferecemos suporte especializado e oportunidades de crescimento."
        keywords="parceria, America Financeira, programa de parceria, suporte especializado, crescimento, soluções financeira"
      />
      <Image className={S.logo} src={IMAGE.LOGO_AMERICA_PARTNERS} alt="Logo América Financeira" />
      <form onSubmit={handleSubmit(onSubmit)} className={S.form}>
        <fieldset>
          <div className={S['box-title']}>
            <div>
              <p className={S['text-america']}>América Financeira</p>
              <legend className={S.title}>Formulário de Inscrição do Programa de Parceiros</legend>
              <p className={S.subtitle}>
                Olá 👋 Obrigado pelo seu interesse em se tornar um parceiro da America Financeira. Por favor, preencha o
                formulário abaixo e nossa equipe de parcerias entrará em contato em breve. Estamos ansiosos para
                analisar sua aplicação 🙌
              </p>
            </div>
          </div>

          <input
            {...register('nome', {
              required: 'Nome é obrigatório',
              minLength: { value: 4, message: 'Nome deve ter no mínimo 4 caracteres' },
            })}
            className={`${S['input-text']} ${errors.nome ? S['input-text-error'] : ''}`}
            type="text"
            placeholder="Nome"
          />
          {errors.nome && <span className={S.error}>{errors.nome.message}</span>}

          <input
            {...register('email', {
              required: 'E-mail é obrigatório',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'E-mail inválido' },
            })}
            className={`${S['input-text']} ${errors.email ? S['input-text-error'] : ''}`}
            type="text"
            placeholder="E-mail"
          />
          {errors.email && <span className={S.error}>{errors.email.message}</span>}

          <InputMask
            {...register('whatsapp', {
              required: 'Whatsapp é obrigatório',
              pattern: { value: /^\(\d{2}\) \d{5}-\d{4}$/, message: 'Whatsapp inválido' },
            })}
            mask="(99) 99999-9999"
            maskChar=""
            className={`${S['input-text']} ${errors.whatsapp ? S['input-text-error'] : ''}`}
            placeholder="Whatsapp"
            type="tel"
            inputMode="tel"
          />
          {errors.whatsapp && <span className={S.error}>{errors.whatsapp.message}</span>}

          <InputMask
            {...register('cpf', {
              required: 'CPF é obrigatório',
              pattern: { value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/, message: 'CPF inválido' },
            })}
            mask="999.999.999-99"
            maskChar=""
            className={`${S['input-text']} ${errors.cpf ? S['input-text-error'] : ''}`}
            type="text"
            placeholder="CPF"
            inputMode="numeric"
          />
          {errors.cpf && <span className={S.error}>{errors.cpf.message}</span>}

          <input
            {...register('estado', { required: 'Estado é obrigatório' })}
            className={`${S['input-text']} ${errors.estado ? S['input-text-error'] : ''}`}
            type="text"
            placeholder="Estado"
          />
          {errors.estado && <span className={S.error}>{errors.estado.message}</span>}

          <input
            {...register('cidade', { required: 'Cidade é obrigatória' })}
            className={`${S['input-text']} ${errors.cidade ? S['input-text-error'] : ''}`}
            type="text"
            placeholder="Cidade"
          />
          {errors.cidade && <span className={S.error}>{errors.cidade.message}</span>}

          <Button typeStyle="btn3" width="100%" label={isSubmitting ? 'Enviando...' : 'Enviar'} />
        </fieldset>
      </form>

      <Modal open={isModalOpen} close={closeModal} message={modalMessage} />
    </div>
  )
}

export default Submission
