import styled from 'styled-components';
import { List as SelectList } from '../Select/styles';


export const Header = styled.input.attrs({
    placeholderStyle:{
        color:'#8D8D8D',
        fontWeight:400,
        fontSize:'14px'
    }
})`
    width:100%;
    display:flex;
    align-items:center;

    cursor:pointer;

    padding-top:3px;
    padding-left:10px;
    padding-bottom:3px;
    
    border:none;
    outline:0;
    color:#8D8D8D;
    font-weight:400;
    font-size:14px;
    border-bottom: 2px solid #A8A8A8;

    &::placeholder,
    &::-webkit-input-placeholder {
        opacity:1;
        color:#8D8D8D;
        font-weight:400;
        font-size:14px;
    }
    &:-ms-input-placeholder {
        color:#8D8D8D;
        font-weight:400;
        font-size:14px;
    }

    &:hover{
        border-bottom: 2px solid #A8A8A8;
    }
`;

export const List = styled(SelectList)`
    top:42px;
`;
