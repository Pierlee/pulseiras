import * as S from './style'
// import bolsa from '../../assets/images/produtos/bolsa.png'
// import calca from '../../assets/images/produtos/calca.png'
// import camiseta from '../../assets/images/produtos/camiseta.png'
// import jaquetajeans from '../../assets/images/produtos/jaqueta-jeans.png'
// import oculos from '../../assets/images/produtos/oculos.png'
// import tenis from '../../assets/images/produtos/tenis.png'

function Product({
    src, 
    title, 
    description, 
    price,
}) {
    return(
        <S.Container>
            <h2 className='title'>Products</h2>
            <S.CardsContainer>
                <S.Card>
                    <img src={src} alt={title} />
                    <div className='card-info'>
                        <h3 className='card-title'>{title}</h3>
                        <p className='description'>{description}</p>
                        <h2 className='price'>{price}</h2>
                        <button>See more</button>
                    </div>
                </S.Card>
            </S.CardsContainer>
        </S.Container>
    )
}

export default Product