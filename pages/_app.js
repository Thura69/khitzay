import '../styles/globals.css'
import Header from '../components/header'
import MobileMenu from '../components/mobileMenu'
import Subscribe from '../components/subscribe'
import Footer from '../components/footer'


function MyApp({ Component, pageProps }) {
  return <>
    <Header />
    <MobileMenu/>
    <Component {...pageProps} />
    <Subscribe />
    <Footer/>
  </>
}

export default MyApp
