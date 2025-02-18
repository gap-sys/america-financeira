import Link from 'next/link'

import { Meta, Button } from 'src/presentation/components'

import S from './error.module.scss'

const Error = () => (
  <div>
    <Meta
      title="Página não encontrada"
      description="Ocorreu um erro. Acesse nossa página inicial para encontrar o que você procura ou entre em contato com nosso suporte."
      keywords="erro, página não encontrada, América Financeira, suporte, ajuda"
    />

    <section className={S.container}>
      <h1 className={S.title}>Ops!</h1>
      <p className={S.subtitle}>
        Não conseguimos encontrar a página <br /> que você está procurando.
      </p>
      <p className={S.description}>
        Se não sabe para onde ir, qualquer caminho <br /> serve! - Gato Cheshire, Alice no País das Maravilhas.
      </p>
      <Link href="/">
        <Button width="300px" typeStyle="btn2" label="Voltar para a página principal" />
      </Link>
    </section>
  </div>
)

export default Error
