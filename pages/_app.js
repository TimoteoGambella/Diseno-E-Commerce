import '../styles/styles.scss';
import 'animate.css';
function MyApp({ Component, pageProps }) {
  
  return (<>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossOrigin="anonymous"/>
    <Component {...pageProps} />
  </>)
}

export default MyApp
