import styled from 'styled-components';

export const Container = styled.div`
    width:min(100%, 1228px);

    margin: 50px auto;

    flex:1;
    display:flex;
    flex-basis: 316px;
    flex-direction:column;
    align-items:center;
    flex-basis: 316px;
    position:relative;
    
    gap:20px;

    @media(min-width:1168px){ 
        gap:45px;
        flex-direction:row;
        flex-flow:wrap;
        justify-content:space-evenly;
    }

    padding-bottom: 164px;
    
`;
export const Flag = styled.img`
    width:316px;
    max-width:100%;
    height:181px;
`;

export const Paginator = styled.div`
    position:absolute;
    bottom:50px;
    width:100%;
    display:flex;
    flex-flow:wrap;
    justify-content:center;

    gap:8px;
`;

export const PageButton = styled.button`
    height: 34px;
    width: 34px;
    border-radius: 2px;
    cursor:pointer;

    background-color:${({selected})=>selected?'var(--primary)':'white'};
    color:${({selected})=>selected?'white':'#8D8D8D'};

    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
`;

export const Icon = styled.img`
    width:12px;
    height: 12px;
`