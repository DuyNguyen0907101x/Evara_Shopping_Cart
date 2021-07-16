import {Container, TitleComponent, Row, Col} from '../../styles/abstracts/_globalStyles';

import Products from '../../data/products.json'

import Item from '../Item';

export default function Shopping () {
  return (
    <main className='shopping'>
      <Container>
        <TitleComponent>SHOPPING</TitleComponent>
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
