import React from 'react'
import {useRouter} from 'next/router'

function Product() {
    const {query : { category, product }} = useRouter();
    return (
        <>
            <div>
                <h1>Categoria: {category}</h1>
            </div>
            <div>
                <h1>Produto: {product}</h1>
            </div>
        </>
    )
}

export default Product
