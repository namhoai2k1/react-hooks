import styled from 'styled-components'; 

export const StyleUseEffect = styled.div`
    ul {
        list-style: none;
    }
    
    margin-top: 10px;
    color: var(--orange);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .nav-menu{
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin:20px 0;
    }

    button {
        background: var(--pink-3);
        color: var(--milk);
        border: none;  
        border-radius: 5px;
        cursor: pointer;
        padding: 10px;
    }

    .box-button{
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin:20px 0;
        gap: 10px;
    }
    .btn-gototop {
        position: fixed;
        bottom: 20px;
        right: 20px;
    }

    .width-window, .count-down {
        margin-top: 20px;
        font-size: 24px;
        font-weight: bold;
        background: var(--pink-3);
        color: var(--milk);
        border-radius: 5px;
        padding: 10px;
        text-align: center;
    }

    .avatar-preview {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 20px;
    }

    .avatar-preview  img {
        border-radius: 5px;
        margin-top: 20px;
        object-fit: cover;
    }

    .lesson-active {
        background: var(--pink-1);
        color: var(--milk);
        border-radius: 5px;
        padding: 10px;
        text-align: center;
    }
`