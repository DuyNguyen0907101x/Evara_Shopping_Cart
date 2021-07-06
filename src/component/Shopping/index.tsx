import './shopping.css';
import * as React from 'react';
import {Container, H2} from '../../styles/style';

import Products from '../../data/products.json'

import Item from '../Item';

export default function Shopping () {
  return (
    <main className='shopping'>
      <Container>
        <H2 className="sub-title">Shopping</H2>
        <div className="row">
          {
            Products && Products.map((item, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <Item itemData={item}></Item>
                </div>
              )
            })
          }
        </div>
      </Container>
    </main>
  );
}
