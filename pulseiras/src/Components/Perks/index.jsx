import * as S from './style'
import pix from '../../assets/x-diamond.svg'
import exchange from '../../assets/arrow-repeat.svg'
import sustainability from '../../assets/flower-1.svg'

function Perks() {
    return(
        <S.Container>
            <h1 className='main-title'>Check out our perks</h1>
            <S.PerksContainer>
                <S.Perks>
                    <div className='perk-image'>
                        <img src={pix} alt="" />
                    </div>
                    <div className='perk-info'>
                        <h2 className='perk-title'>Pague pelo pix</h2>
                        <p className='perk-paragraph'>Troca grátis</p>
                    </div>
                </S.Perks>
                <S.Perks>
                    <div className='perk-image'>
                        <img src={exchange} alt="" />
                    </div>
                    <div className='perk-info'>
                        <h2 className='perk-title'>Pague pelo pix</h2>
                        <p className='perk-paragraph'>Troca grátis</p>
                    </div>
                </S.Perks>
                <S.Perks>
                    <div className='perk-image'>
                        <img src={sustainability} alt="" />
                    </div>
                    <div className='perk-info'>
                        <h2 className='perk-title'>Pague pelo pix</h2>
                        <p className='perk-paragraph'>Troca grátis</p>
                    </div>
                </S.Perks>
            </S.PerksContainer>
        </S.Container>
    )
}

export default Perks