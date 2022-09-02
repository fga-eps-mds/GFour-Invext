import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
    {
        title:'Patrimônio',
        path:'patrimonio',
        icon: <AiIcons.AiFillWallet/>,
    },
    {
        title:'Rentabilidade',
        path:'rentabilidade',
        icon: <AiIcons.AiFillWallet/>,
    },
    {
        title:'Ações',
        path:'acoes',
        icon: <AiIcons.AiFillFileAdd/>,
    },
    {
        title:'Histórico',
        path:'historico',
        icon: <AiIcons.AiOutlineHistory/>,
    },
    {
        title:'Perfil',
        path:'perfil',
        icon: <AiIcons.AiFillProfile/>,
    },
    {
        title:'Sair',
        path:'sair',
        icon: <AiIcons.AiOutlineLogout/>,
    },
    {
        title:'Ajuda',
        path:'ajuda',
        icon: <IoIcons.IoMdHelpCircle />,
    },  
];