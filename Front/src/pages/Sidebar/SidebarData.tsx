import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
    {
        title:'Patrimônio',
        path:'patrimonio',
        icon: <FaIcons.FaMoneyBillWave/>,
        className: "nav-link"
    },
    {
        title:'Rentabilidade',
        path:'rentabilidade',
        icon: <AiIcons.AiOutlineRise/>,
        className: "nav-link"
    },
    {
        title:'Ações',
        path:'acoes',
        icon: <AiIcons.AiFillFileAdd/>,
        className: "nav-link"
    },
    {
        title:'Histórico',
        path:'historico',
        icon: <AiIcons.AiOutlineHistory/>,
        className: "nav-link"
    },
    {
        title:'Perfil',
        path:'perfil',
        icon: <AiIcons.AiFillProfile/>,
        className: "nav-link disabled"
    },
    {
        title:'Sair',
        path:'sair',
        icon: <AiIcons.AiOutlineLogout/>,
        className: "nav-link"
    },
    {
        title:'Ajuda',
        path:'ajuda',
        icon: <IoIcons.IoMdHelpCircle />,
        className: "nav-link disabled"
    },  
];