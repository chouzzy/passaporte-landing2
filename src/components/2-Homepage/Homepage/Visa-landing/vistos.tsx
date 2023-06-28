import { Flex } from "@chakra-ui/react";
import { MagnifyingGlass } from "phosphor-react";
import { ReactElement } from "react";
import { FcAutomotive, FcBusinessman, FcBusinesswoman, FcDebt, FcGraduationCap, FcInTransit, FcLandscape, FcLibrary, FcLike, FcManager, FcSearch, FcShop } from "react-icons/fc";

export interface vistoProps {
   id: number;
   icon: ReactElement;
   title: string;
   name: string;
   backgroundSource: string;
}

const vistos: vistoProps[] = [
   {
      id: 1,
      title: 'Estude em Portugal',
      name: 'Imersão acadêmica e cursos em Portugal: Se você já tem alguma carta de aceite ou quer buscar um curso para estudar em Portugal, conquiste o Visto de Estudo e abra portas para o seu futuro promissor.',
      icon: <FcSearch size={72} />,
      backgroundSource: 'static/img/visa-8.jpg'
   },
   {
      id: 2,
      title: 'Trabalhe em Portugal',
      name: 'Com contrato ou promessa de trabalho, esse Visto é o ideal para quem já tem uma opção de trabalho no país Luso. Ou seja, se você já tem algum contrato ou uma promessa de trabalho em Portugal, fale conosco para uma ida regular. Essa é a chance de ter e a sua carreira em ascensão!',
      icon: <FcBusinessman size={72} />,
      backgroundSource: 'static/img/visa-1.jpg'
   },
   {
      id: 3,
      title: 'Empreendedores',
      name: 'Empreendedorismo em solo português: Com o Visto de Empreendedor você vai fazer o seu negócio brilhar em Portugal.',
      icon: <FcShop size={72} />,
      backgroundSource: 'static/img/visa-2.jpg'
   },
   {
      id: 4,
      title: 'Trabalho de forma remota (nômade digital)',
      name: 'Trabalhe de onde quiser em Portugal, com o Visto de Nômade Digital você tem a liberdade para conciliar o trabalho e a qualidade de vida no território Europeu.',
      icon: <FcManager size={72} />,
      backgroundSource: 'static/img/visa-3.jpg'
   },
   {
      id: 5,
      title: 'Procura de Trabalho',
      name: 'Esse é o Visto para você que ainda não tem um contrato de trabalho em Portugal, mas deseja explorar novas oportunidades e adentrar de cabeça no sonho de viver em terras lusitanas conquistando por lá o seu espaço no mercado de trabalho e uma qualidade de vida melhor.',
      icon: <FcGraduationCap size={72} />,
      backgroundSource: 'static/img/visa-4.jpg'
   },
   {
      id: 6,
      title: 'Participação em programa de voluntariado',
      name: 'Caso você vá para o Portugal para trabalhar de forma voluntária, esse Visto é necessário para que você chegue de forma regular e possa contribuir com as causas que transformam vidas.',
      icon: <FcLibrary size={72} />,
      backgroundSource: 'static/img/visa-5.jpg'
   },

   {
      id: 7,
      title: 'Pessoas com rendimentos passivos',
      name: 'Se você tem uma renda passiva elevada, por meio de imóveis, pensões, aposentadoria, ou qualquer outro rendimento passivo, Portugal oferece uma oportunidade de Visto incrível para você viver por lá!',
      icon: <FcLike size={72} />,
      backgroundSource: 'static/img/visa-6.jpg'
   },

   {
      id: 8,
      title: 'Reagrupamento & Acompanhamento familiar',
      name: 'Se você se enquadra em algum dos Vistos acima e quer imigrar para Portugal com sua família, esse será o Visto necessário para que eles te acompanhem nessa incrível jornada! ',
      icon: <FcBusinesswoman size={72} />,
      backgroundSource: 'static/img/visa-7.jpg'
   },
]

export { vistos }