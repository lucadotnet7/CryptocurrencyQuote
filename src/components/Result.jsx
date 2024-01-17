import { ResultContainer, TextResult, TextPrice, ResultImage } from "./StyledComponents";

const Result = ({result}) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = result;
    return(
        <ResultContainer>
            <ResultImage src={`https://www.cryptocompare.com${IMAGEURL}`} alt="Imagen criptomoneda" />
            <div>
                <TextPrice>El precio es de: <span>{PRICE}</span></TextPrice>
                <TextResult>El precio más alto del día: <span>{HIGHDAY}</span></TextResult>
                <TextResult>El precio más bajo del día: <span>{LOWDAY}</span></TextResult>
                <TextResult>Variación últimas 24hs: <span>{CHANGEPCT24HOUR}</span></TextResult>
                <TextResult>Última actualización: <span>{LASTUPDATE}</span></TextResult>
            </div>
        </ResultContainer>
    );
}

export default Result;