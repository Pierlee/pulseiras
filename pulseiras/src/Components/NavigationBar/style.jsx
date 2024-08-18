import styled from 'styled-components'

export const Navbar = styled.div`
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    justify-content: space-between;
    width: 100%;
    .logo img{
        margin-right: 20px;
        width: 140.75px;
        padding: 10px 0;
    }
    .navbar-left, .search {
        display: flex;
        align-items: center;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0;
        .logo img{
            width: 160px;
        }
        .navbar-left{
            display: flex;
            justify-content: space-between;
            width: 100%;
            padding: 0 20px;
        }
        .search{    
            justify-content: center;
            width: 100%;
            background: white;
            padding: 10px 20px;
            input{
                width: 300px;
                border: 1px solid black;
            }
            button{
                width: 100px;
                border: 1px solid black;
                background-color: white;
                color: black;
            }
        }
    }
`
export const Navitems = styled.ul`
    display: flex;
    list-style: none;
    gap: 20px;
    li{
        cursor: pointer;
        font-size: 1.5rem;
        &:hover {
            text-decoration: underline;
        }
        a {
            text-decoration: none;
            color: white;
        }
        white-space: nowrap;
    }
    @media (max-width: 768px) {
        position: absolute;
        top: 0;
        right: 0;
        background-color: #343A40;
        padding: 30px 30px 25px;
        flex-direction: column;
        li {
            font-size: 2rem;
            border-bottom: 2px solid white;
            padding-bottom: 10px;
        }
        li:last-child{
            border-bottom: none;
        }
        li:hover{
            color: lime;
        }
        display: none;
        &.show-menu{
            display: flex;
            z-index: 1;
        }
    }
`
export const SearchInput = styled.input`
    width: 150px;
    padding: 10px;
    margin-right: 15px;
`
export const SearchButton = styled.button`
    padding: 10px 20px;
    width: 80px;
    background-color: black;
    color: white;
    border: 1px solid white;
`
export const Hamburger = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    z-index: 2;
    .burger-bar{
        width: 40px;
        height: 6px;
        background-color: white;
        border-radius: 10px;
    }
    &.clicked .burger-bar:nth-child(1) {
        transform: rotate(45deg) translate(12px, 12px);
        transition: transform 0.3s ease-in-out;
    }

    &.clicked .burger-bar:nth-child(2) {
        opacity: 0;
    }

    &.clicked .burger-bar:nth-child(3) {
        transform: rotate(-45deg) translate(12px, -12px);
        transition: transform 0.3s ease-in-out;
    }
    @media (min-width: 768px) {
        display: none;
    }
`