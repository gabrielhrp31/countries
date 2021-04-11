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


export const NotFound  = styled.h4`
    color:red;
    font-weight:lighter;
    margin:30px auto;
`