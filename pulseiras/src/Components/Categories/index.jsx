import * as S from './style'
import camisetas from '../../assets/images/categorias/categoria-camiseta.png'
import bolsa from '../../assets/images/categorias/categoria-bolsa.png'
import calcados from '../../assets/images/categorias/categoria-calcados.png'
import calcas from '../../assets/images/categorias/categoria-calcas.png'
import casacos from '../../assets/images/categorias/categoria-casacos.png'
import oculos from '../../assets/images/categorias/categoria-oculos.png'

function Categories() {
    return(
        <S.Container>
            <h2 className='title'>Search for category</h2>
            <div className='categories-flex'>
                <div className='category-item'>
                    <img src={camisetas} alt="" />
                    <p className='subtitle'>hello im bob</p>
                </div>
                <div className='category-box'>
                    <img src={bolsa} alt="" />
                    <p className='subtitle'>hello im bob</p>
                </div>
                <div className='category-box'>
                    <img src={calcados} alt="" />
                    <p className='subtitle'>hello im bob</p>
                </div>
                <div className='category-box'>
                    <img src={calcas} alt="" />
                    <p className='subtitle'>hello im bob</p>
                </div>
                <div className='category-box'>
                    <img src={casacos} alt="" />
                    <p className='subtitle'>hello im bob</p>
                </div>
                <div className='category-box'>
                    <img src={oculos} alt="" />
                    <p className='subtitle'>hello im bob</p>
                </div>
            </div>
        </S.Container>
    )
}

export default Categories