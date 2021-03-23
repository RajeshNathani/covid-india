import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
            </Head>
            <div className='banner heading-3'>
                <h1 className='heading heading-2'>Covid19 India</h1> 
            </div>
            <div className='header'>
                <div className='img'>
                     <img src='../image.png' ></img>
                </div>
                <div className='text'>
                     <h1>Wear a Mask</h1>
                </div>
            </div>
            <div>
                { children }
            </div>
        </>
    );
}

export default Layout;