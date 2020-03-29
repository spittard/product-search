import React, {useContext} from 'react';

import { ProductContext } from '../ProductContext';

export default function ActionLink(props) {
    const [,,,setFilter] = useContext(ProductContext);
    
    const handleClick = (group, product) => {
      setFilter({'group': group, 'value': product.fields[group][0]});
    }
  
    return (
      <a href="#" onClick={handleClick.bind(this, props.group, props.product)}>
          {props.product.fields[props.group][0]}
      </a>
    );
  }