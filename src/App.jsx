import { useEffect, useState } from 'react';
import { Header, Container, Image } from './components/StyledComponents';
import Logo from "./img/logo.png";
import Form from './components/Form';
import Result from './components/Result';
import Spinner from './components/Spinner'

function App() {
  const [ currencies, setCurrencies ] = useState({});
  const [ result, setResult ] = useState({});
  const [ loading, setLoading ] = useState(false);
  
  const quotePrice = async (currency, cryptocurrency) => {
    setLoading(true);
    setResult({});
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`;
    const response = await fetch(url);
    const result = await response.json();
    setResult(result.DISPLAY[cryptocurrency][currency]);
    
    setLoading(false);
  }

  useEffect(() => {
    if(Object.keys(currencies).length > 0) {
      quotePrice(currencies.currency, currencies.cryptocurrency);
    }

  }, [currencies]);

  return (
    <Container>
      <Image 
        src={Logo}
        alt='Logo' />

      <div>
        <Header>Cotiza criptomonedas al instante</Header>
        <Form 
          setCurrencies={setCurrencies} />
        { loading && <Spinner /> }
        { result.PRICE && <Result result={result}/> }
      </div>
    </Container>
  )
}

export default App
