import '@/styles/globals.css'
// import NavBar from './Componets.js/NavBar'

export default function App({ Component, pageProps }) {

  return (
    <>
    {/* <NavBar /> */}
    <Component {...pageProps} />
    </>
  )
}
