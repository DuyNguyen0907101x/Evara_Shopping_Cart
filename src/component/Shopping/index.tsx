import {useDispatch, useSelector} from 'react-redux';
import {Container, TitleComponent, Row, Col} from '../../styles/abstracts/_globalStyles';
import Item from '../Item';
import { useEffect } from 'react';
import { getShopping } from '../../redux/reducer/shopping/shoppingSlice';

export default function Shopping () {
  const listShopping = useSelector((state:any) => state?.shopping?.list || []);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getShopping())
  }, [dispatch])
  
  return (
    <main className='shopping'>
      <Container>
        <TitleComponent>SHOPPING</TitleComponent>
        <Row>
          {
            listShopping && listShopping.map((item:any) => {
              return (
                <Col col={4} key={item.id}>
                  <Item itemData={item} />
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </main>
  );
}
