//#region Hooks
import useSelectCurrency from '../hooks/useSelectCurrency';
import { useEffect, useState } from 'react';
//#endregion
//#region Styles
import { InputSubmit } from './StyledComponents';
//#endregion
import { currencies } from '../data/currencies';
import Error from './Error';
//#region Code
const Form = ({setCurrencies}) => {
    const [ cryptos, setCryptos ] = useState([]);
    const [ error, setError ] = useState(false);
    const [ currency, SelectCurrency ] = useSelectCurrency("Elige tu moneda", currencies);
    const [ cryptocurrency, SelectCriptoCurrency ] = useSelectCurrency("Elige tu Criptomoneda", cryptos);

    useEffect(() => {
        const getTopCryptoList = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
            const response = await fetch(url);
            const result = await response.json();

            const criptos = result.Data.map(cripto => {
                const object = { id: cripto.CoinInfo.Name, name: cripto.CoinInfo.FullName };
                return object;
            });

            setCryptos(criptos);
        }

        getTopCryptoList();
    }, []);

    const handleSubmit = e => {
        e.preventDefault();

        if([currency, cryptocurrency].includes('')) {
            setError(true);
            return;
        }

        setError(false);
        setCurrencies({currency, cryptocurrency});
    }

    return(
        <>
            { error && <Error>Debe seleccionar una moneda y una criptomoneda</Error> }

            <form onSubmit={handleSubmit}>
                <SelectCurrency />
                <SelectCriptoCurrency />
                <InputSubmit 
                    type="submit" 
                    value="Cotizar" />
            </form>
        </>
    );
}

export default Form;
//#endregion