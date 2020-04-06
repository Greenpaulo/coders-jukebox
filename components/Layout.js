import Head from 'next/head';
import Navbar from './Navbar';


const Layout = (props) => (
  <div>
    <Head>
      <title>CodeTunes</title>
      <link href="https://fonts.googleapis.com/css2?family=Baloo+Thambi+2&display=swap" rel="stylesheet"></link>
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
        font-family: 'Baloo Thambi 2';
        background-color: purple;
      }

      a {
        text-decoration: none;
      }
    
    `} 
    </style>
    
    <style jsx>{`
    
      

      



    `}</style>
  </div>
)

export default Layout;
