import * as S from './style'

function Title({children}) {
    return(
        <S.Container>
            <h2>{children}</h2>
        </S.Container>
    )
}

export default Title