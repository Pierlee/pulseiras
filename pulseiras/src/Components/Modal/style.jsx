import styled from 'styled-components'

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    p{
        font-size: 1.3rem;
    }
    h2{
        padding-bottom: 10px;
    }
    h3{
        padding-bottom: 5px;
    }
`
export const ModalHeader = styled.div`
    width: 100%;
    display: flex;
    padding-left: 20px;
    padding-right: 30px;
    font-size: 1.2rem;
    justify-content: flex-start;
    gap: 10px;
    align-items: center;
    background-color: black;
    color: white;
    height: 65px;
`
export const ModalContainer = styled.div`
    width: 700px;
    height: 522px;
    background-color: white;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    position: relative;
`
export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: white;
`
export const ProductImage = styled.div`
    padding-right: 20px;
`
export const ModalBody = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`
export const ModalFooter = styled.div`
    padding: 20px;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
`;

