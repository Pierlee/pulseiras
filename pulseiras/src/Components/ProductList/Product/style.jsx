import styled from 'styled-components'

export const Card = styled.div`
    .image-container{
        width: 360px;
        height: 422px;
    }
    img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
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
        background-color: white;
        width: 360;
        z-index: 3;
        padding: 10px;
        border: 1px solid gray;
        border-top: none;
        display: flex;
        gap: 10px 0;
        justify-content: space-around;
        flex-direction: column;
    }
`
