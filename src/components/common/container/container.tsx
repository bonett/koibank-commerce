import React from 'react'
import { Container } from './container.styled';

const ContainerComponent = ({ children }: any) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default ContainerComponent;