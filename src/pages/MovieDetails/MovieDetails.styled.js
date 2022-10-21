import styled from "styled-components";

export const GoBackButton = styled.button`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`

export const DetailsBox = styled.div`
    display: flex;
    padding-bottom: 5px;
    box-shadow: 0px 5px 4px -2px rgba(0,0,0,0.6);

    ul {
        list-style: none;
        padding: 0;
        display: flex;
        
        li {
            margin-right: 5px;

            &:last-child {
                margin-right: 0;
            }
        }
    }

    img {
        width: 300px;
        display: block;
        margin-right: 15px;
    }
`

export const AdditionalInformationBox = styled.div`
    box-shadow: 0px 5px 4px -2px rgba(0,0,0,0.6);
    padding-bottom: 15px;

    ul {
        margin: 0;
    }

    li {
        margin-bottom: 5px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`