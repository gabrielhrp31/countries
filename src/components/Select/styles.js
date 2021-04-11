import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    height: 41.01px;
    min-width:min(100%, min(100%, 316px));
`;

export const Label = styled.div`
    color:var(--primary);
    font-weight:400;
    font-size:14px;
    line-height:17px;
`;

export const Header = styled.div`
    display:flex;
    align-items:center;

    cursor:pointer;

    padding-top:3px;
    padding-left:10px;
    padding-bottom:3px;
    
    color:#8D8D8D;
    font-weight:400;
    font-size:14px;
    border-bottom: 2px solid #A8A8A8;

    > img {
        margin-left:auto;
        margin-right:5px;
    }
`;

export const List = styled.ul`
    min-width:min(100%, min(100%, 328px));

    cursor:pointer;

    opacity:0;
    transition:.3s;
    z-index:-1;

    &.open{
        opacity:1;
        z-index:1;
    }

    list-style:none;

    padding-left: 16px;
    padding-right: 16px;

    overflow-y:auto;
    max-height:350px;
    
    background-color:white;
    top:16px;
    position:absolute;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


  
    &::-webkit-scrollbar {
        width: 8px;
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: var(--primary);
    }


`;

export const Item = styled.li`
    height:48px;

    display: flex;
    align-items: center;

    color:${({selected})=>selected?'#02AE99':'#8D8D8D'};
    font-weight:700;
    font-size: 16px;
    line-height: 20px;
`;