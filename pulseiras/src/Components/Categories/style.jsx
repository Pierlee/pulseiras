import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    margin: 30px 0;
    .title{
        margin-bottom: 20px;
        font-size: 2rem;
        font-weight: 600;
    }
    .categories-flex{
        padding: 0 20px;
        display: flex;
        gap: 20px;
        justify-content: center;
        flex-wrap: wrap;
    }
    .category-item {
        overflow: hidden;
    }
    .category-item img{
        width: 100%;
        height: auto;
    }
    .subtitle{
        background-color: black;
        color: white;
        text-align: center;
        padding: 7px;
        margin-top: -4px;
    }

`
