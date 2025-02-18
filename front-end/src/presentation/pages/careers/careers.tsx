import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Meta, Button, Modal, HeaderMobile, Candidate } from 'src/presentation/components'
import { ICON, IMAGE } from 'src/presentation/assets'

import S from './careers.module.scss'

import { IconCoin, IconCake, IconSchool, IconTrophy, IconAward } from '@tabler/icons-react'

const BENEFITS = [
  { title: 'PLR + Bônus', icon: <IconCoin size={36} /> },
  { title: 'Day Off Aniversário', icon: <IconCake size={36} /> },
  { title: 'Programas de desenvolvimento', icon: <IconSchool size={36} /> },
  { title: 'Gamificação', description: '(em certificações e desenvolvimento.)', icon: <IconTrophy size={36} /> },
  { title: 'Programa de reconhecimento por tempo de casa', icon: <IconAward size={36} /> },
]

type CareersProps = {
  nome: string
  email: string
  telefone: string
  dataNascimento: string
  filialInteresse: string
  cidade: string
  cep: string
  endereco: string
  numero: string
  motivo: string
  curriculo: FileList
}

const Careers = () => {
  const IMAGES = IMAGE.MULHER_CELULAR

  const [modalMessage, setModalMessage] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CareersProps>({
    defaultValues: {
      nome: '',
      telefone: '',
      dataNascimento: '',
      filialInteresse: '',
      cidade: '',
      cep: '',
      curriculo: undefined,
    },
  })

  const onSubmit = async (data: CareersProps) => {
    try {
      const formData = new FormData()
      formData.append('nome', data.nome)
      formData.append('telefone', data.telefone)
      formData.append('dataNascimento', data.dataNascimento)
      formData.append('filialInteresse', data.filialInteresse)
      formData.append('cidade', data.cidade)
      formData.append('cep', data.cep)
      if (data.curriculo?.[0]) {
        formData.append('curriculo', data.curriculo[0])
      }

      const response = await fetch('/api/submit', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Não foi possível processar a solicitação. Por favor, tente novamente mais tarde.')
      }

      setModalMessage('Obrigado! Em breve entraremos em contato.')
      reset()
    } catch (error) {
      reset()
      setModalMessage('Obrigado! Em breve entraremos em contato.')
    } finally {
      setIsModalOpen(true)
    }
  }

  const closeModal = () => setIsModalOpen(false)

  return (
    <div>
      <Meta
        title="Carreiras - América Financeira"
        description="Candidate-se para as vagas disponíveis na América Financeira e venha fazer parte do nosso time!"
        keywords="carreiras, emprego, América Financeira, oportunidades de trabalho, candidatura"
      />
      <HeaderMobile
        title="Carreiras"
        subtitle={`É hora de expandir sua \ncarreira com a América`}
        paragraph="*Entre para o nosso time"
        image={IMAGES.src}
        showLoanRequest={false}
      />

      <Candidate position="left" />

      <div className={S['about-container']}>
        <div className={S['about-section']}>
          <div className={S['image-section']}>
            <Image
              width={100}
              height={98}
              layout="responsive"
              className={S.img}
              src={IMAGE.DUAS_MENINAS}
              alt="Equipe tirando foto"
            />
          </div>
          <div className={S['text-section']}>
            <h1 className={S.title}>Somos a América Financeira</h1>
            <p className={S.paragraph}>
              Somos dinâmicos, adaptáveis e inovadores, sempre explorando novas oportunidades com energia e
              determinação. Estamos prontos para enfrentar desafios, formando líderes que combinam força de vontade com
              abertura e empatia. Valorizamos a proximidade nas relações como o alicerce de nossa equipe. Nosso
              propósito é transformar vidas por meio do conhecimento e do trabalho conjunto. Com uma atitude proativa,
              buscamos impactar positivamente aqueles que desejam conquistar uma vida financeira mais consciente e
              eficiente, aprimorando constantemente nossos processos.
            </p>
            <Link href="#candidate" target="_blank">
              <div className={S['text-team']}>
                <p className={S.text}>Entre para o nosso time</p>
                <ICON.IconArrowRight className={S.icon} />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Candidate position="right" />

      <div className={S['benefits-container']}>
        <div className={S['benefits-section']}>
          <div className={S['text-section']}>
            <h3 className={S.subtitle}>Benefícios</h3>
            <h1 className={S.title}>
              Reconhecimento e <br /> desenvolvimento
            </h1>
          </div>
          <div className={S['benefits-box']}>
            {BENEFITS.map(({ title, description, icon }, key) => (
              <div key={key} className={S.box}>
                <div className={S.icon}>{icon}</div>
                <h6 className={S.title}>{title}</h6>
                {description && <p className={S.description}>{description}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={S['form-container']} id="candidate">
        <div className={S['text-section']}>
          <h3 className={S.subtitle}>Oportunidades</h3>
          <h1 className={S.title}>
            Que tal expandir sua carreira na <br /> América Financeira?
          </h1>
          <p className={S.paragraph}>
            Se você se adapta bem às mudanças e gosta delas, a América Financeira <br /> é o seu lugar.
          </p>
          <div className={S['image-section']}>
            <Image className={S.img} src={IMAGE.LOGO_TRABALHAR_1} alt="Certificado de trabalho" />
            <Image className={S.img} src={IMAGE.LOGO_TRABALHAR_2} alt="Certificado de trabalho" />
            <Image className={S.img} src={IMAGE.LOGO_TRABALHAR_3} alt="Certificado de trabalho" />
            <Image className={S.img} src={IMAGE.LOGO_TRABALHAR_4} alt="Certificado de trabalho" />
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={S.form}>
          <fieldset>
            <div className={S['box-title']}>
              <div>
                <p className={S['text-america']}>América Financeira</p>
                <legend className={S.title}>Formulário de Candidatura</legend>
                <p className={S.subtitle}>
                  Bem-vindo(a)! 😊 Estamos felizes com seu interesse em fazer parte da nossa equipe. Complete o
                  formulário abaixo e entraremos em contato em breve. Boa sorte na sua candidatura! 🚀
                </p>
              </div>
            </div>

            <input
              {...register('nome', { required: 'Nome é obrigatório' })}
              className={`${S['input-text']} ${errors.nome ? S['input-text-error'] : ''}`}
              type="text"
              placeholder="Nome"
            />
            {errors.nome && <span className={S.error}>{errors.nome.message}</span>}

            <input
              {...register('telefone', { required: 'Telefone é obrigatório' })}
              className={`${S['input-text']} ${errors.telefone ? S['input-text-error'] : ''}`}
              placeholder="Telefone"
              type="tel"
              inputMode="tel"
            />
            {errors.telefone && <span className={S.error}>{errors.telefone.message}</span>}

            <input
              {...register('dataNascimento', { required: 'Data de Nascimento é obrigatória' })}
              className={`${S['input-text']} ${errors.dataNascimento ? S['input-text-error'] : ''}`}
              type="date"
              placeholder="Data de Nascimento"
            />
            {errors.dataNascimento && <span className={S.error}>{errors.dataNascimento.message}</span>}

            <select
              {...register('filialInteresse', { required: 'Filial de Interesse é obrigatória' })}
              className={`${S['input-text']} ${errors.filialInteresse ? S['input-text-error'] : ''}`}
            >
              <option value="">Selecionar filial</option>
              <option value="São Pedro-SP" selected>
                São Pedro-SP
              </option>
              <option value="Campinas-SP">Campinas-SP</option>
              <option value="Hortolândia-SP">Hortolândia-SP</option>
              <option value="São Carlos-SP">São Carlos-SP</option>
              <option value="Jundiaí-SP">Jundiaí-SP</option>
              <option value="Piracicaba-SP">Piracicaba-SP</option>
              <option value="Rio Claro-SP">Rio Claro-SP</option>
              <option value="Itirapina-SP">Itirapina-SP</option>
              <option value="Sumaré-SP">Sumaré-SP</option>
            </select>
            {errors.filialInteresse && <span className={S.error}>{errors.filialInteresse.message}</span>}

            <input
              {...register('cidade', { required: 'Cidade é obrigatória' })}
              className={`${S['input-text']} ${errors.cidade ? S['input-text-error'] : ''}`}
              type="text"
              placeholder="Cidade"
            />
            {errors.cidade && <span className={S.error}>{errors.cidade.message}</span>}

            <input
              {...register('cep', { required: 'CEP é obrigatório' })}
              className={`${S['input-text']} ${errors.cep ? S['input-text-error'] : ''}`}
              type="text"
              placeholder="CEP"
              inputMode="tel"
            />
            {errors.cep && <span className={S.error}>{errors.cep.message}</span>}

            <input
              {...register('curriculo', { required: 'Currículo é obrigatório' })}
              className={`${S['input-text']} ${errors.curriculo ? S['input-text-error'] : ''}`}
              type="file"
              accept=".pdf"
            />
            {errors.curriculo && <span className={S.error}>{errors.curriculo.message}</span>}

            <Button typeStyle="btn3" width="100%" label={isSubmitting ? 'Enviando...' : 'Enviar'} />
          </fieldset>
        </form>
      </div>

      <Modal open={isModalOpen} close={closeModal} message={modalMessage} />
    </div>
  )
}

export default Careers
