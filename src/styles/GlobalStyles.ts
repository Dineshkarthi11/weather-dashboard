import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
       * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background: linear-gradient(to right, #87CEFA, #00BFFF);
        color: #757575;
        line-height: 1.6;
        font-size: 16px;
        overflow-x: hidden;
    }

    #root {
        display: flex;
        justify-content: flex-start;
        padding: 60px 20px;
        min-height: 100vh;
        flex-wrap: wrap;
    }

    h2 {
        font-size: 2.5rem;
        color: #ffffff;
        margin-bottom: 30px;
        text-align: center;
        letter-spacing: 1.5px;
        width: 100%;
    }

    input[type="text"] {
        padding: 15px;
        border: 2px solid #ffffff;
        border-radius: 30px;
        width: calc(100% - 30px);
        font-size: 1rem;
        outline: none;
        transition: border-color 0.3s, box-shadow 0.3s;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        background: rgba(255, 255, 255, 0.8); /* Slightly transparent */
        color: #333;
        margin-bottom: 20px;
    }

    input[type="text"]:focus {
        border-color: #B0E0E6;
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
    }

    button {
        background: linear-gradient(to right, #87CEFA, #00BFFF);
        color: #fff;
        padding: 15px 30px;
        border: none;
        border-radius: 30px;
        cursor: pointer;
        font-size: 1rem;
        margin-top: 15px;
        transition: background 0.4s, transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 10px 20px rgba(0, 0, 139, 0.4);
    }

    button:hover {
        background: linear-gradient(to right, #00BFFF, #87CEFA);
        transform: translateY(-5px);
        box-shadow: 0 15px 25px rgba(0, 0, 139, 0.6);
    }

    ul {
        list-style-type: none;
        padding: 0;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
    }

    li {
        border-radius: 20px;
        padding: 25px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: url('https://i.pinimg.com/originals/43/e1/7a/43e17aa3c2ba523273401a7f7a130a8c.gif') center center/cover no-repeat;
    }

    li:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 30px rgba(0, 0, 139, 0.3);
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
        color: #ffffff;
    }

    .weather-details {
        display: flex;
        flex-direction: row;
        gap: 15px;
        margin-top: 25px;
        padding: 30px;
        border-radius: 20px;
        box-shadow: 0 15px 25px rgba(0, 0, 139, 0.2);
        flex-wrap: wrap;
        width: 100%;
    }

    .weather-details p {
        font-size: 1.3rem;
        color: #9E9E9E;
    }

    .weather-details h3 {
        margin-top: 25px;
        font-size: 2rem;
        color: #ffffff;
    }

    .weather-details ul {
        margin-top: 15px;
        padding-left: 0;
    }

    .weather-details li {
        background-color: rgba(255, 255, 255, 0.1); /* Transparent background */
        border-radius: 20px;
        padding: 15px;
        margin-bottom: 15px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        border-left: 6px solid #00BFFF;
        box-shadow: 0 5px 15px rgba(0, 0, 139, 0.2); /* Positive shadow for lift effect */
    }

    .weather-details li:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 139, 0.4); /* Enhanced shadow on hover */
    }
    
    .weather-details li p {
        font-size: 1.1rem;
        color: #ffffff;
    }
`;
