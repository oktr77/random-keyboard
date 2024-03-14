import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import KeyboardDisplay from 'components/KeyboardDisplay';
import MainInput from 'components/MainInput';
import { DEFAULT_KEYS, shuffleKeys } from 'keys';
import { StringMap } from 'keys';
import mainImage from 'main.jpg';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
  }

  #app-root, .app, .map, .ol-map {
    height: 100%;
  }

  .main-image {
    display: block;
    margin: 0 auto;
    height: 75vh;
  }
`;

const App = () => {
  const [keys, setKeys] = useState<StringMap>(DEFAULT_KEYS);
  const [value, setValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let str = event.target.value;
    let newKeys = keys;

    if( str.length > value.length ) {
      let last = str[str.length-1];
      last = last.toLowerCase();
      if( keys[last] !== undefined ) {
        last = keys[last];
        str = str.slice(0, -1) + last;
        newKeys = shuffleKeys(keys);
      }
    }

    setValue(str);
    setKeys(newKeys);
  }

  return (
    <>
      <GlobalStyle/>
      <div className='app'>
        <MainInput value={value} onChange={handleInputChange}/>
        <KeyboardDisplay keys={keys}/>  

        <img className='main-image' src={mainImage}/>
      </div>
    </>
  );
}

export default App;
