import styled from 'styled-components';

export const ContentLeft = styled.div`
    padding-right: 20px;
    
    img {
        max-width: 100%;
        height: auto;
        border-radius: 4px;
    }
`;

export const ContentRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
        padding: 10px;
        background-color: #9353FF;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
            background-color: #4f3085;
        }
    }
    
`;

export const LabelSection = styled.div`
    h2 {
        margin-bottom: 10px;
    }
    padding-bottom: 10px;
    border-bottom: 2px solid black;
`;
export const PriceSection = styled.div`
    .price {
        font-size: 1.5rem;
        color: #333;
        font-weight: 600;
    }
    padding: 10px 0 ;
    border-bottom: 1px solid lightgray;
`;
export const ColorSection = styled.div`
    border-bottom: 1px solid lightgray;
    margin: 10px 0;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    .colors{
        display: flex;
        flex-direction: row;
    }
    .color{
        padding: 0 10px;
        text-align: center;
        width: 40px;
    }
    h3 {
        margin-bottom: 5px;
    }
`;
export const SizeSection = styled.div`
    margin: 10px 0;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    .sizes{
        display: flex;
        flex-direction: row;
    }
    .size{
        padding: 0 10px;
        text-align: center;
        width: 40px;
    }
    h3 {
        margin-bottom: 5px;
    }
`;
