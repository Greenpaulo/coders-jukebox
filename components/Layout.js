import Head from 'next/head';
import Navbar from './Navbar';
import colors from '../css-variables/colors';

const Layout = (props) => (
  <div>
    <Head>
      <title>CodeTunes</title>
      <meta name="description" content="A social music app for coders"/>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width"/>
      <link href="https://fonts.googleapis.com/css2?family=Baloo+Thambi+2&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
      />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    </Head>
    <Navbar/>
    {props.children}
    

    <style global jsx>{`
    
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      body {
        font-family: 'Baloo Thambi 2', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.8em;
        background-color: black;
        height: 100vh;
      }

      .container {
        max-width: 1100px;
        margin: auto;
        overflow: hidden;
      }

      a {
        text-decoration: none;
        color: black;
      }

      button {
        color: white;
        padding: 0.5rem 1rem ;
        border-radius: 5px;
        font-size: 1rem;
        background-color: ${colors.primary};
        border: none;
        cursor: pointer;
        transition: background-color 0.2s ease-in-out;
        transition: transform 80ms ease-in;
        }

      button:active {
        transform: scale(0.95);
      }

      button:focus {
        outline: none;
      }
      
      button:hover {
        background-color: #e5305a;
      }
    
    `} 
    </style> 
  </div>
)

export default Layout;
