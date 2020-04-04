/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useContext} from 'react';

import { ProductContext } from '../ProductContext';

export default function ActionLink(props) {
    const [,,,setFilter] = useContext(ProductContext);
    
    const handleClick = (group, value) => {
      setFilter({'group': group, 'value': value});
    }
  
    return (
      <a href="#" onClick={handleClick.bind(this, props.group, props.value)}>
          {props.value}
      </a>
    );
  }