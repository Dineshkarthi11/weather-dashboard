import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
        color: #ffffff;
        line-height: 1.6;
        font-size: 16px;
        overflow-x: hidden;
    }

    #root {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 60px 20px;
        background: transparent;
        min-height: 100vh;
    }

    h2 {
        font-size: 2.5rem;
        color: #ff6f61;
        margin-bottom: 30px;
        text-align: center;
        letter-spacing: 1.5px;
    }

    input[type="text"] {
        padding: 15px;
        border: 2px solid #ff6f61;
        border-radius: 30px;
        width: calc(100% - 30px);
        font-size: 1rem;
        outline: none;
        transition: border-color 0.3s, box-shadow 0.3s;
        box-shadow: 0 0 10px rgba(255, 111, 97, 0.2);
        background: #ffffff;
        color: #333;
    }

    input[type="text"]:focus {
        border-color: #ff8563;
        box-shadow: 0 0 15px rgba(255, 111, 97, 0.4);
    }

    button {
        background: linear-gradient(to right, #ff6f61, #ff8563);
        color: #fff;
        padding: 15px 30px;
        border: none;
        border-radius: 30px;
        cursor: pointer;
        font-size: 1rem;
        margin-top: 15px;
        transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
        box-shadow: 0 10px 20px rgba(255, 111, 97, 0.4);
    }

    button:hover {
        background: linear-gradient(to right, #ff8563, #ff6f61);
        transform: translateY(-5px);
        box-shadow: 0 15px 25px rgba(255, 111, 97, 0.6);
    }

    ul {
        list-style-type: none;
        padding: 0;
        width: 100%;
    }

    li {
        background: linear-gradient(to right, #304352, #d7d2cc);
        border-radius: 20px;
        margin-bottom: 25px;
        padding: 25px;
        box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s, box-shadow 0.3s;
    }

    li:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
    }

    li h3 {
        font-size: 1.8rem;
        color: #ffffff;
        margin-bottom: 15px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    li p {
        font-size: 1.1rem;
        color: #eeeeee;
    }

    .weather-details {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-top: 25px;
        background: linear-gradient(to bottom right, #43c6ac, #191654);
        padding: 30px;
        border-radius: 20px;
        box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
    }

    .weather-details p {
        font-size: 1.3rem;
        color: #ffffff;
    }

    .weather-details h3 {
        margin-top: 25px;
        font-size: 2rem;
        color: #ff6f61;
    }

    .weather-details ul {
        margin-top: 15px;
        padding-left: 0;
    }

    .weather-details li {
        margin-bottom: 15px;
        padding: 15px;
        background-color: rgba(255, 255, 255, 0.1);
        border-left: 6px solid #ff6f61;
        border-radius: 10px;
    }

    .weather-details li p {
        font-size: 1.1rem;
        color: #ffffff;
    }

    .weather-details li:first-child {
        border-left: 6px solid #ff8563;
    }
`;
