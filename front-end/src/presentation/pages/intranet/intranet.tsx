import { Button, Meta } from 'src/presentation/components'

import { IconRainbow, IconBuildingBank, IconFlame, IconLink, IconMail, IconCurrencyDollar } from '@tabler/icons-react'

import S from './intranet.module.scss'
import Image from 'next/image'
import { IMAGE } from 'src/presentation/assets'
import { useState } from 'react'
import Link from 'next/link'

const ITEMS = [
  {
    icon: <IconRainbow />,
    title: 'Gay Sys',
    info: [{ text: 'Gap Sys', link: 'https://app.gapsys.com.br/login' }],
  },
  {
    icon: <IconFlame />,
    title: 'Hot Sys',
    info: [{ text: 'Hot Sys', link: 'https://hotsys.com.br/#/login' }],
  },
  {
    icon: <IconMail />,
    title: 'Webmail',
    info: [{ text: 'Webmail', link: 'https://webmail.americafinanceira.com.br/' }],
  },
  {
    icon: <IconLink />,
    title: 'Links úteis',
    info: [
      { text: 'Área do Parceiro', link: 'https://america.nodesistemas.com.br/' },
      { text: 'KingHost', link: 'https://kinghost.com.br' },
      { text: 'N8n', link: 'https://n8n.io' },
      { text: 'Kolmeya', link: 'https://kolmeya.com.br/auth/login' },
      { text: 'Vanguard', link: 'https://www.sistemavanguard.com.br/vanguard/' },
    ],
  },
  {
    icon: <IconBuildingBank />,
    title: 'Bancos',
    info: [
      { text: 'Banco Sabemi', link: 'https://www.portalseguro.srv.br/Login.aspx?ReturnUrl=%2f' },
      { text: 'Banco Santander', link: 'https://www.parceirosantander.com.br/spa-base/landing-page' },
      { text: 'Banco Mercantil', link: 'https://meu.bancomercantil.com.br/login' },
      { text: 'Banco Safra', link: 'https://epfweb.safra.com.br/Home/Login' },
      {
        text: 'Banco Itaú',
        link: 'https://openid.itau.com.br/services/oauth/authorize?client_id=f3c7c3bc-b4bb-48a4-8dad-07e0489cce70&redirect_uri=https:%2F%2Fic360.com.br%2Flogin%2Fcallback-partner-sts&scope=openid&response_type=code',
      },
      {
        text: 'Banco Pan',
        link: 'https://accounts-sso.bancopan.com.br/auth/realms/pan-parceiros/protocol/openid-connect/auth?client_id=pancred-fimenu&redirect_uri=https%3A%2F%2Fpanconsig.pansolucoes.com.br%2FFIMENU%2Fsignin-oidc&response_type=code&scope=openid%20profile&state=OpenIdConnect.AuthenticationProperties%3D0ps95YUcO21-_edBd8SfcOhK18RwwazE2hgpuxD-TdtNJ62GU-k-7m18bTIsuWYs_OEbaiZBDaMuPaRhTRBJ1TjMUajnoQk5jlUPHeq7uEnUGLATiAr_p3VUKkJx9UYQzqj2Fcz1ia0G2X8W6Fu5mLIOyBwOjGPmDrsyLwhFiyz9fKe8XHrpIvhG13sFgmEqH7WSoEjAKoO2XEvxtKBaFA&response_mode=form_post&nonce=638654822929597779.YzkxNGEyMDMtNTY2YS00N2Y4LTg4MjgtZGJiYzA3MzkyMmVhZGVmYTgyMzQtNmZjMC00NDUzLTk1MWUtZTA5NWJjYzMyNmIz&x-client-SKU=ID_NET461&x-client-ver=6.8.0.0',
      },
      { text: 'Banco Crefaz', link: 'https://crefazon.com.br/login' },
      { text: 'Banco BRB', link: 'https://simulador.incontadigital.com.br/admin' },
      {
        text: 'Banco Master',
        link: 'https://autenticacao.bancomaster.com.br/login?api=API_PLATAFORMA_VENDAS&idCliente=sst0fTHiMBAqdsOeKc',
      },
      { text: 'Banco V8', link: 'app.v8sistema.com' },
      { text: 'Banco Banrisul', link: 'https://bemweb.bempromotora.com.br/autenticacao/login' },
      { text: 'Banco BMG', link: 'https://www.bmgconsig.com.br/Index.do?method=prepare&logout=true' },
      {
        text: 'Banco C6 Bank',
        link: 'https://c6.c6consig.com.br/WebAutorizador/Login/AC.UI.LOGIN.aspx?FISession=9c50bfa0f1a8',
      },
      { text: 'Banco Crefisa', link: 'https://sfc.sistemascr.com.br/autorizador/Login/AC.UI.LOGIN.aspx' },
      { text: 'Banco Crefisa CP', link: 'https://app1.gerencialcredito.com.br/CREFISA/' },
      { text: 'Banco Daycoval', link: 'https://portaldecredito.daycoval.com.br/login' },
      {
        text: 'Banco Digio',
        link: 'https://funcaoconsig.digio.com.br/FIMENU/Login/AC.UI.LOGIN.aspx?FISession=a54c80d99af6',
      },
      { text: 'Banco Facta', link: 'https://desenv.facta.com.br/sistemaNovo/login.php' },
      { text: 'Banco Grana Pix', link: 'https://www.granapix.com.br/core/' },
      { text: 'Banco Totalcash', link: 'https://totalcash.net.br/login' },
      { text: 'Banco Icred', link: 'https://corban.icred.digital/' },
      { text: 'Banco Inbursa', link: 'https://www.inbursa.com.br/portalvendas/Login' },
      { text: 'Banco Olé (OLA)', link: 'https://ola.oleconsignado.com.br' },
      { text: 'Banco Presença Bank', link: 'https://portal.presencabank.com.br/parceiros/corban' },
      { text: 'Banco Qualibanking', link: 'https://quali.joinbank.com.br/sign-in' },
      {
        text: 'Banco Quero+',
        link: 'https://queromaiscredito.app/WebAutorizador/Login/AC.UI.LOGIN.aspx?FISession=d565c423d33e',
      },
      { text: 'Banco Vctex', link: 'https://www.appvctex.com.br/login' },
      { text: 'Banco Vem Card', link: 'https://sistema.vemcard.com.br/WebAppMenu/Login/ICLogin' },
      { text: 'Via Certa', link: 'https://sistema.acertapromotora.com.br' },
    ],
  },
  {
    icon: <IconCurrencyDollar />,
    title: 'Segurados',
    info: [{ text: 'BMG MED', link: 'https://www.bmgconsig.com.br/Index.do?method=prepare&logout=true' }],
  },
]

const Intranet = () => {
  const [showBanks, setShowBanks] = useState(false)
  const [showLinks, setShowLinks] = useState(false)
  const [showInsureds, setShowInsureds] = useState(false)

  return (
    <>
      <Meta
        title="Intranet - América Financeira"
        description="Acesse a Intranet da America Financeira para obter recursos exclusivos, informações internas e suporte especializado para nossa equipe e parceiros."
        keywords="Intranet, America Financeira, recursos internos, suporte especializado, equipe, parceiros"
      />

      <div className={S['header']}>
        <div className={S['box']}>
          <Image className={S.img} src={IMAGE.AREA_DE_ACESSO} alt="Área de acesso" />
          <h1 className={S['title']}>Intranet</h1>
        </div>

        <div className={S['icons-section']}>
          <div className={S['icons-box']}>
            <Image className={S.img} src={IMAGE.COMPUTADOR} alt="Computador" />
            <h1 className={S['title-icon']}>Gap Sys</h1>
            <Link href="https://app.gapsys.com.br/login" target="_blank">
              <Button typeStyle="btn2" label="Entrar" width="150px" />
            </Link>
          </div>
          <div className={S['icons-box']}>
            <Image className={S.img} src={IMAGE.ASSISTENCIA_SOCIAL} alt="Área do parceiro " />
            <h1 className={S['title-icon']}>Área do Parceiro</h1>
            <Link href="https://america.nodesistemas.com.br/" target="_blank">
              <Button typeStyle="btn2" label="Entrar" width="150px" />
            </Link>
          </div>
          <div className={S['icons-box']}>
            <Image className={S.img} src={IMAGE.EMAIL} alt="Email" />
            <h1 className={S['title-icon']}>Webmail</h1>
            <Link href="https://webmail.americafinanceira.com.br/" target="_blank">
              <Button typeStyle="btn2" label="Entrar" width="150px" />
            </Link>
          </div>
        </div>

        <div className={S['links-section']}>
          <div className={S['links-box']}>
            <Image className={S.img} src={IMAGE.BANK} alt="Bancos" />
            <h1 className={S['title-icon']}>Bancos autorizados</h1>
            <h4 onClick={() => setShowBanks(!showBanks)} className={S['clickable']}>
              {showBanks ? 'Ver menos' : 'Ver mais'}
            </h4>
            {showBanks && (
              <ul>
                {ITEMS.find((item) => item.title === 'Bancos')?.info.map((bank) => (
                  <li key={bank.text}>
                    <a href={bank.link} target="_blank" rel="noopener noreferrer">
                      {bank.text}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className={S['links-box']}>
            <Image className={S.img} src={IMAGE.PESQUISA} alt="Pesquisar" />
            <h1 className={S['title-icon']}>Links Úteis</h1>
            <h4 onClick={() => setShowLinks(!showLinks)} className={S['clickable']}>
              {showLinks ? 'Ver menos' : 'Ver mais'}
            </h4>
            {showLinks && (
              <ul>
                {ITEMS.find((item) => item.title === 'Links úteis')?.info.map((link) => (
                  <li key={link.text}>
                    <a href={link.link} target="_blank" rel="noopener noreferrer">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className={S['links-box']}>
            <Image className={S.img} src={IMAGE.SEGURADORAS} alt="Seguradoras" />
            <h1 className={S['title-icon']}>Seguradoras</h1>
            <h4 onClick={() => setShowInsureds(!showInsureds)} className={S['clickable']}>
              {showInsureds ? 'Ver menos' : 'Ver mais'}
            </h4>
            {showInsureds && (
              <ul>
                {ITEMS.find((item) => item.title === 'Segurados')?.info.map((link) => (
                  <li key={link.text}>
                    <a href={link.link} target="_blank" rel="noopener noreferrer">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Intranet
