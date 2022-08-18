import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
    {
        title:'Carteira',
        path:'/Carteira',
        icon: <AiIcons.AiFillWallet/>,
        cName:'nav-test',
    },
    {
        title:'Ações',
        path:'/Acoes',
        icon: <AiIcons.AiFillFileAdd/>,
        cName:'nav-test',
    },
    {
        title:'Histórico',
        path:'/Historico',
        icon: <AiIcons.AiOutlineHistory/>,
        cName: 'nav-test',
    },
    {
        title:'Perfil',
        path:'/Perfil',
        icon: <AiIcons.AiFillProfile/>,
        cName:'nav-test',
    },
    {
        title:'Sair',
        path:'/Sair',
        icon: <AiIcons.AiOutlineLogout/>,
        cName:'nav-test',
    },
    {
        title:'Ajuda',
        path:'/Ajuda',
        icon: <IoIcons.IoMdHelpCircle />,
        cName:'nav-text'
    },
];