import styled from "styled-components";

const Header = styled.header`
    margin: 0;
    padding: 10px;
    box-shadow: 0px 1px 5px black;
    margin-bottom: 15px;
    
    nav {
        height: 33px;
        display: flex;
    }

    a {
        margin-right: 15px;
        font-weight: bold;
        padding: 5px;
        text-decoration: none;
        color: black;

        &.active{
            color: darkred;
        }

        &:last-child {
            margin-right: 0;
        }
    }
`

export default Header