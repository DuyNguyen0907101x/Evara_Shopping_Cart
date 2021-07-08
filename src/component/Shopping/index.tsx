import './shopping.css';
import * as React from 'react';
import {Container, H2, Row, Col} from '../../styles/abstracts/_globalStyles';

import Products from '../../data/products.json'

import Item from '../Item';

export default function Shopping () {
  return (
    <main className='shopping'>
      <Container>
        <H2>Shopping</H2>
        <Row>
          {
            Products && Products.map((item, index) => {
              return (
                <Col col={4} key={index}>
                  <Item itemData={item}></Item>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </main>
  );
}
