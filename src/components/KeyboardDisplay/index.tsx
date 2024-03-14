import React from 'react';
import styled from 'styled-components';
import { StringMap } from 'keys';
const BREAK_INDEXES = [10, 20];

interface Props {
  keys: StringMap;
}

function insertBreaks(array: any[]) {
  BREAK_INDEXES.forEach(brIndex => array.splice(brIndex, 0, <br key={'break_'+brIndex}/>));
  return array;
}

const KeyboardDisplayKey = styled.div`
  display: inline-block;
  border: 1px solid black;
  margin: 1px;
  padding: 1px 3px;
`;

const KeyboardDisplay = ({ keys, ...props }: Props) => (
  <div {...props}>
    {
      insertBreaks(
        Object.entries(keys).map(([key, value]) => (
          <KeyboardDisplayKey
            key={key}
            className='keyboard-display__key'
          >
            {value}
          </KeyboardDisplayKey>
        ))
      )
    }  
  </div>
);

const StyledKeyboardDisplay = styled(KeyboardDisplay)`
  margin: 20px auto;
  text-align: center;
`;

export default StyledKeyboardDisplay; 
