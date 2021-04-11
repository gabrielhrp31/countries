import React from 'react'
import { useHistory } from 'react-router'

import logo from '../../assets/logo.svg'
import OutlineButton from '../OutlineButton'

import {Container,Logo} from './styles'

function Navbar({hideBackButton}) {


    const history = useHistory();

    function navigateBack(){
        history.goBack();
    }

    return (
        <Container>
            <Logo src={logo} />
            {
                !hideBackButton &&
                <OutlineButton onClick={navigateBack}>Voltar</OutlineButton>
            }
        </Container>
    )
}


export default Navbar
