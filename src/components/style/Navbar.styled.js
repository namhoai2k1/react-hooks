import styled from 'styled-components';

export const StyleNavbar = styled.div`
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        height: 60px;
        background: rgb(235, 107, 68);
    }

    .nav-box {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
    }

    .nav-icon {
        height: 60px;
        line-height: 60px;
        font-size: 30px;
        margin-bottom: 5px;
    }

    .nav-list.active {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: #fff;
        border-radius: 5px;
        box-shadow: rgba(197, 197, 197, 0.2) 0px 7px 29px 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 100;
    }

    .nav-list {
        display: none;
    }

    .nav-list a {
        color: #000;
        text-decoration: none;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        line-height: 30px;
        width: 100%;
        height: 30px;
    }

    .nav-list a:hover {
        color: #fff;
        background: rgb(235, 107, 68);
    }
`;
