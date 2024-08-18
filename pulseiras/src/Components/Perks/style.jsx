import styled from 'styled-components'

export const Container = styled.div`
    height: auto;
    width: 100%;
    background-color: black;
    color: white;
    text-align: center;
    padding-bottom: 80px;
    .main-title{
        padding: 30px 0;
        font-size: 4rem;
    }
`
export const PerksContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px){
        flex-direction: column;
    }
`
export const Perks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    padding: 10px;
    .perk-image{
        margin-right: 20px;
    }
    .perk-info{
        display: flex;
        justify-content: space-between;
        align-items: start;
        flex-direction: column;
        padding-right: 30px;
    }
    .perk-title{
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: 700;
        color: #DAFF01;
        text-transform: uppercase;
        white-space: nowrap;
    }
    .perk-paragraph{
        font-size: 13px;
        font-weight: 400;
    }
`