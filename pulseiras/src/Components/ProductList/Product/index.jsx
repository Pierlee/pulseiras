import * as S from './style'


function Product({
    src, 
    id,
    title, 
    alt,
    description, 
    price,
    onSeeMoreClick
}) {
    // Função que será chamada ao clicar em "See More"
    const handleClick = () => {
        onSeeMoreClick({ src, id, title, description, price }) // Passa as informações do produto para a função passada como prop
    }

    return(
        <S.Card>
            <div className='image-container'>
                <img src={src} alt={alt} />
            </div>
            <div className='card-info'>
                <h3 className='card-title'>{title}</h3>
                <p className='description'>{description}</p>
                <h2 className='price'>{price}</h2>
                <button onClick={handleClick}>See more</button>
            </div>
        </S.Card>
    )
}

export default Product