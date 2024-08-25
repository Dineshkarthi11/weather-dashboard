import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: #f0f4f7;
        color: #333;
        line-height: 1.6;
    }

    #root {
        display: flex;
        justify-content: center;
        padding: 40px;
        background-color: #f0f4f7;
        min-height: 100vh;
    }

    h2 {
        font-size: 1.8rem;
        color: #1a237e;
        margin-bottom: 20px;
    }

    input[type="text"] {
        padding: 10px;
        border: 1px solid #1a237e;
        border-radius: 4px;
        width: calc(100% - 22px);
        font-size: 1rem;
    }

    button {
        background-color: #1a237e;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1rem;
        margin-top: 10px;
        transition: background-color 0.3s;
    }

    button:hover {
        background-color: #0d47a1;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        background-color: #ffffff;
        border-radius: 8px;
        margin-bottom: 20px;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s;
    }

    li:hover {
        transform: translateY(-5px);
    }

    li h3 {
        font-size: 1.4rem;
        color: #1a237e;
        margin-bottom: 10px;
    }

    li p {
        font-size: 1rem;
        color: #666;
    }

    .weather-details {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 20px;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .weather-details p {
        font-size: 1.2rem;
        color: #0d47a1;
    }

    .weather-details h3 {
        margin-top: 20px;
        font-size: 1.6rem;
        color: #1a237e;
    }

    .weather-details ul {
        margin-top: 10px;
        padding-left: 0;
    }

    .weather-details li {
        margin-bottom: 10px;
        padding: 10px;
        background-color: #e3f2fd;
        border-left: 4px solid #1a237e;
    }

    .weather-details li p {
        font-size: 1rem;
        color: #0d47a1;
    }

    .weather-details li:first-child {
        border-left: 4px solid #0d47a1;
    }
`;