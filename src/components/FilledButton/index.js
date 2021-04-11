import React from 'react'
import { Container } from './styles'

function FilledButton({children, ...props}) {
    return (
        <Container {...props}>
            {children}
        </Container>
    )
}

export default FilledButton
