import React from 'react';
import {useRouter} from 'next/router'
import { Heading } from '../../styles/Heading';
import Container from '../../styles/Container';

function Product() {
    const {query : { category, product }} = useRouter();
    return (
        <>
            <Container>
                <Heading>Categoria: {category}</Heading>
            </Container>
            <Container>
                <Heading>Produto: {product}</Heading>
            </Container>
        </>
    )
}

export default Product
