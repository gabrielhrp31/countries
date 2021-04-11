import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 123px;

    padding: 0 22px;

    width:min(100%, 1366px);
    margin-left: auto;
    margin-right: auto;
    display:flex;
    flex-direction:column;
    flex-flow: wrap;
    gap: 22px;
    

    @media(min-width:1506px){
        padding:0; 
        flex-direction:row;
        gap: 58px;
    }
`;

export const CountryData = styled.div`
    width:min(100%, 1366px);
    display: flex;
    flex-direction:column;

    @media (min-width:1366px){
        flex-direction:row;
        margin-top:0;
    }

    > div {
        width:fit-content;

        > img{
            width:min(100%, 443px);
        }

        &:first-child{
            width:min(100%, 443px);
        }

        &:last-child{
            margin-top:22px;
            display:flex;
            flex-direction:column;
            justify-content:space-evenly;
            gap:22px;

            > p {
                font-family: Montserrat, sans-serif;
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: 22px;
                letter-spacing: 0em;
                text-align: left;
                color:#454545;

            }

            @media (min-width:1366px){
                margin-top:0;
                margin-left:24px;
                gap:0;
            }
        }
    }
`