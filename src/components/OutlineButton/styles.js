import styled from 'styled-components';

export const Container = styled.button`
    display:flex;
    align-items:center;
    justify-content:space-evenly;

    text-indent: -9999px;
    white-space: nowrap;
    border:none; 

    font-size:18px;
    font-style:normal;
    font-weight:normal;
    color: var(--primary);
    line-height:21.94px;
    margin-left:auto;
    margin-right:33px;

    cursor:pointer;

    @media (min-width:1024px){
        text-indent: unset;
        white-space: unset;

        margin-right:67px;

        width: 134px;
        height: 36px;
        border: 1px solid #6D2080;
    }
`;

export const BackIcon = styled.img`
    width:24px;
    height:24px;
`;
