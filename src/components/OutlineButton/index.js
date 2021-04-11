import React from 'react'

import backIcon from '../../assets/icons/back.svg'

import { Container, BackIcon } from './styles';

function OutlineButton({children, hideIcon, ...props}) {
    return (
        <Container {...props}>
            {!hideIcon &&
                <BackIcon src={backIcon} />
            }
            {children}
        </Container>
    )
}

export default OutlineButton
