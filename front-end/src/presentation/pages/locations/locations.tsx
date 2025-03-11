import { Meta } from 'src/presentation/components'

import * as ICON from 'react-icons/ai'

import S from './locations.module.scss'

const LOCATIONS = [
  {
    name: 'São Pedro-SP',
    ramal: 'Matriz',
    whatsapp:
      'https://api.whatsapp.com/send?phone=5519988285625&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Am%C3%A9rica%20Financeira!',
    maps: 'https://www.google.com.br/maps/place/Am%C3%A9rica+Financeira/@-22.5513548,-47.9075013,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipN0EPaCwmbpZrPulyU81pc93vnQDG7ipU414Jjq!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipN0EPaCwmbpZrPulyU81pc93vnQDG7ipU414Jjq%3Dw86-h114-k-no!7i4284!8i5712!4m7!3m6!1s0x94c7b009f24b078b:0x6330be2ce5101a46!8m2!3d-22.5513526!4d-47.9076079!10e5!16s%2Fg%2F11bv6ps7ty?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    name: 'Campinas-SP',
    ramal: '1407',
    whatsapp:
      'https://api.whatsapp.com/send?phone=5519999744679&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Am%C3%A9rica%20Financeira!',
    maps: 'https://www.google.com/maps/place/R.+Bernardino+de+Campos,+471+-+Centro,+Campinas+-+SP,+13010-150/@-22.9053988,-47.0675227,17z/data=!3m1!4b1!4m5!3m4!1s0x94c8c8b0db4e8b11:0xacf82ad84bc13544!8m2!3d-22.9054038!4d-47.065334?shorturl=1',
  },
  {
    name: 'Hortolândia-SP',
    ramal: '4018',
    whatsapp:
      'https://api.whatsapp.com/send?phone=5519998530457&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Am%C3%A9rica%20Financeira!',
    maps: 'https://www.google.com/maps/place/R.+Zulmira+Soares+dos+Santos+-+Jardim+Santa+Clara+do+Lago+I,+Hortol%C3%A2ndia+-+SP,+13186-381/@-22.8893724,-47.1968044,17z/data=!3m1!4b1!4m6!3m5!1s0x94c8b90d2b9f6e69:0xdfe15f9ee6d11f29!8m2!3d-22.8893774!4d-47.1946157!15sCi1SdWE6IFp1bG1pcmEgUy4gRG9zIFNhbnRvcywxOTkgSkQgU2FudGEgQ2xhcmGSAQVyb3V0ZQ?shorturl=1',
  },
  {
    name: 'São Carlos-SP',
    ramal: '4016',
    whatsapp:
      'https://api.whatsapp.com/send?phone=5516997983710&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Am%C3%A9rica%20Financeira!',
    maps: 'https://www.google.com/maps/place/R.+Maj.+Jos%C3%A9+In%C3%A1cio,+2373+-+Centro,+S%C3%A3o+Carlos+-+SP,+13560-161/@-22.0168079,-47.8894557,17z/data=!3m1!4b1!4m5!3m4!1s0x94b877242a14f313:0x8e6543ecd4942ca9!8m2!3d-22.0168129!4d-47.887267?shorturl=1',
  },
  {
    name: 'Jundiaí-SP',
    ramal: '4003',
    whatsapp:
      'https://api.whatsapp.com/send?phone=5519974175639&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Am%C3%A9rica%20Financeira!',
    maps: 'https://www.google.com/maps/place/Rua+Cica,+600+-+Vila+Garcia,+Jundia%C3%AD+-+SP,+13206-765/@-23.2061044,-46.8826113,17z/data=!3m1!4b1!4m5!3m4!1s0x94cf26c90e2b6bcd:0x2866a6ecb1855f26!8m2!3d-23.2061093!4d-46.8804226?shorturl=1',
  },
  {
    name: 'Piracicaba-SP',
    ramal: '6044',
    whatsapp:
      'https://api.whatsapp.com/send?phone=5519996243477&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Am%C3%A9rica%20Financeira!',
    maps: 'https://www.google.com/maps/place/R.+Ipiranga,+876+-+Centro,+Piracicaba+-+SP,+13400-485/@-22.7301193,-47.6509749,19z/data=!3m1!4b1!4m5!3m4!1s0x94c6310609e08921:0x42089072b10baa8f!8m2!3d-22.7301205!4d-47.6504277',
  },
  {
    name: 'Rio Claro-SP',
    ramal: '4004',
    whatsapp:
      'https://api.whatsapp.com/send?phone=5519982591097&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Am%C3%A9rica%20Financeira!',
    maps: 'https://www.google.com/maps/place/R.+Quatro,+768+-+Centro,+Rio+Claro+-+SP,+13500-030/@-22.4128926,-47.5619534,17z/data=!3m1!4b1!4m5!3m4!1s0x94c7da5a574cfa39:0x59f2f787c699a9a7!8m2!3d-22.4128976!4d-47.5597647?shorturl=1',
  },
  {
    name: 'Itirapina-SP',
    ramal: '2201',
    whatsapp:
      'https://api.whatsapp.com/send?phone=5519982591097&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Am%C3%A9rica%20Financeira!',
    maps: 'https://www.google.com/maps/place/Av.+7,+380+-+Vila+Cianeli,+Itirapina+-+SP,+13530-000/@-22.2534045,-47.8265834,17z/data=!3m1!4b1!4m10!1m2!2m1!1sAv.+Sete,+380+-+COHAB+itarapina!3m6!1s0x94c7924ac8138359:0x7b86190ccabcdcc!8m2!3d-22.2534095!4d-47.8217125!15sCh9Bdi4gU2V0ZSwgMzgwIC0gQ09IQUIgaXRpcmFwaW5hkgERY29tcG91bmRfYnVpbGRpbmfgAQA!16s%2Fg%2F11f_j8pzvq?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    name: 'Sumaré-SP',
    ramal: '2163',
    whatsapp:
      'https://api.whatsapp.com/send?phone=5519982591097&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Am%C3%A9rica%20Financeira!',
    maps: 'https://www.google.com/maps/@-22.8172061,-47.2709989,3a,75y,60.54h,90t/data=!3m7!1e1!3m5!1sucFsGCzvBgYns3pprZbfFA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DucFsGCzvBgYns3pprZbfFA%26yaw%3D60.54!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D',
  },
]

const Locations = () => (
  <div>
    <Meta
      title="Nossas Unidades - América Financeira"
      description="Descubra as unidades da América Financeira em todo o Brasil. Localize a filial mais próxima para atendimento especializado."
      keywords="América Financeira, filiais, unidades, atendimento financeiro, Campinas, serviços financeiros, ramais, localização"
    />
    <div className={S['locations-container']}>
      <h1 className={S['title-section']}> Unidades Licenciadas</h1>
      <div className={S["aviso-legal"]}>
        <h2>Aviso Legal sobre a Independência das Unidades</h2>
        <p>
          A América Financeira é uma marca licenciada para operação por unidades independentes, por meio de contrato de
          uso de marca, firmado entre a licenciadora e cada unidade licenciada. Cada unidade opera com CNPJ próprio,
          gestão administrativa autônoma e independência financeira, sendo exclusivamente responsável por seus atos,
          compromissos e obrigações.
        </p>
        <p>
          Dessa forma, a América Financeira (licenciadora da marca) não responde solidária ou subsidiariamente por
          quaisquer obrigações ou responsabilidades de suas unidades licenciadas, incluindo, mas não se limitando a,
          questões trabalhistas, consumeristas, cíveis, tributárias ou administrativas.
        </p>
        <p>
          Quaisquer reclamações, litígios ou processos devem ser direcionados exclusivamente à unidade específica
          responsável pelo atendimento, conforme seu CNPJ e contratos próprios.
        </p>
        <p>Para mais informações sobre cada unidade licenciada, consulte os dados abaixo.</p>
      </div>

      <div className={S['locations-box']}>
        {LOCATIONS.map(({ name, ramal, whatsapp, maps }, key) => (
          <div className={S.box} key={key}>
            <h1 className={S['title-box']}>{name}</h1>
            <p className={S.paragraph}>
              Ramal: <em>{ramal}</em>
            </p>
            <div className={S['icons-section']}>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={S.icon}>
                <ICON.AiOutlineWhatsApp className={S.icon} size={28} />
              </a>
              <a href={maps} target="_blank" rel="noopener noreferrer" className={S.icon}>
                <ICON.AiOutlineEnvironment className={S.icon} size={28} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Locations
