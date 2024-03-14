import React from 'react';
import styled from 'styled-components';

const MainInput = ({ value, onChange, ...props }) => (
  <div {...props}>
    <input value={value} onChange={onChange}/>  
  </div>
)

export default styled(MainInput)`
  margin: 20px auto;
  text-align: center;
`;
