// import * as S from './style'
import products from '../../mocks/products.json'
import Product from './Product'

function Products() {
    return(
        <section role='produtos' aria-label='Produtos que estão bombando!'>
            {products.map((products) => (
                <Product key={products.id} {...products}/>
            ))}
        </section>
    )
}

export default Products