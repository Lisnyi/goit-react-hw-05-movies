import styled from "styled-components";

const ListOfMovies = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0;

    li {
        margin-bottom: 4px;

        &:last-child{
            margin-bottom: 0;
        }
    }
`

export default ListOfMovies