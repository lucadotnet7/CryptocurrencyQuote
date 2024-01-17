import styled from '@emotion/styled';

export const Header = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

export const Container = styled.div`
    max-width: 900px;
    margin: 0 auto;
    width: 90%;
    @media(min-width: 992px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2rem;
    }
`;

export const Image = styled.img`
    max-width: 400px;
    width: 80%;
    margin: 100px auto 0 auto;
    display: block;
`;

export const InputSubmit = styled.input`
  background-color: #9497FF;
  border: none;
  width: 100%;
  padding: 10px;
  color: #FFF;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color .3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #7A7DFE;
    cursor: pointer;
  }
`;

export const Label = styled.label`
  color: #FFF;
  display: block;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`;

export const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
`;

export const Text = styled.div`
  background-color: #B7322C;
  color: #FFF;
  padding: 15px;
  font-size: 22px;
  text-transform: uppercase;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  text-align: center;
`;

export const ResultContainer = styled.div`
  color: #FFF;
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;

export const TextResult = styled.p`
  font-size: 18px;
  span {
    color: #00bcd4;
  }
`;

export const TextPrice = styled.p`
  font-size: 24px;
  span {
    font-weight: 400;
    color: #FFEB3B;
  }
`;

export const ResultImage = styled.img`
  display: block;
  width: 120px;
`;