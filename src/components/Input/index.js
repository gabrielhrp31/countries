import React from 'react'
import { Header } from '../AutoComplete/styles'
import { Container, Label } from '../Select/styles'

function Input({label, ...props}) {
    return (
        <Container>
            <Label>{label}</Label>
            <Header {...props} />
        </Container>
    )
}

export default Input
