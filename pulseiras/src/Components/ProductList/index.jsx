import * as S from './style'
import productList from '../../mocks/productList.json'
import Title from '../Title'
import Product from './Product'
import { useState } from 'react'
import ModalMoreDetails from '../ModalMoreDetails'

function ProductList() {
    const [selectedProduct, setSelectedProduct] = useState(null)

    const handleSeeMoreClick = (product) => {
        setSelectedProduct(product)  // Set the clicked product as the selected one
        console.log(product)
    };

    const handleCloseModal = () => {
        setSelectedProduct(null) // Close the modal by clearing the selected product
    }

    return(
        <section role='products' aria-label='Produtos que estão bombando!'>
            <Title>Products</Title>
            <S.Container>
                {productList.map((product) => (
                    <Product 
                        key={product.id} 
                        {...product}
                        onSeeMoreClick={() => handleSeeMoreClick(product)} //to importando o mocks pra ca, vou fazer o map de produtos e para cada produto quero criar um Componente Product, entao agora esse compnente vai receber todas essas informacoes de mocks e agora preciso fazer algo com elas no outro arquivo. preciso entender como fazer o product arquivo primeiro.
                    />
                ))}
            </S.Container>
            {selectedProduct &&(
                <ModalMoreDetails
                    isOpen={!!selectedProduct}
                    onClose={handleCloseModal}
                    product={selectedProduct}
                >
                </ModalMoreDetails>
            )}
        </section>
    )
}

export default ProductList