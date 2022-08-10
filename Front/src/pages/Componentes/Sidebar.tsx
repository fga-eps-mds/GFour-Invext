/******import React, {FC, useState} from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import styled from "styled-components";

const Nav = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    background-color: black;
`;

const SidebarNav = styled.div<{ sidebar: boolean}>
    width: 250px;
    height: 100vh;
    backgroud-color: black;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
;

const SidebarWrap = styled.div``;

**/