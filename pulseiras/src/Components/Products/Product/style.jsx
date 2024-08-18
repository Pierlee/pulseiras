import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 0;
    .title{
        text-align: center;
        padding-bottom: 20px;
        font-size: 2rem;
    }
`
export const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
`
export const Card = styled.div`
    margin: 15px;
    button{
        padding: 8px 15px;
        background-color:#9353FF;
        color: white;
        width: 100px;
    }
    button:hover{
        background-color: #4f3085;
    }
    .card-info{
        padding: 10px;
        border: 1px solid gray;
        border-top: none;
        margin-top: -5px;
        display: flex;
        gap: 10px 0;
        justify-content: space-around;
        flex-direction: column;
    }
`
