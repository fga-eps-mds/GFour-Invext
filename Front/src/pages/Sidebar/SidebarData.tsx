import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as CgIcons from "react-icons/cg";

export const SidebarData = [
    {
        title:'Carteira',
        path:'carteira',
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
        icon: <CgIcons.CgProfile/>,
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