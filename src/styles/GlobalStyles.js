import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    *, button, input{
        border:0;
        background:none;
        font-family: 'Montserrat', sans-serif;
    }

    #root{
        margin-top:100px;
        min-height: calc(100vh - 100px);

        display:flex;
        flex-direction:column;
    }

    .field-margin{
        margin-bottom:85px;
    }

    @media(min-width:1168px){
        .field-margin{
            margin-bottom:0;
        }
    }


    :root {
        --primary: #6D2080;
    }
`;