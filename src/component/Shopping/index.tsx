import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getShopping } from '../../redux/reducer/shopping/shoppingSlice';
import {Container, TitleComponent, Row, Col} from '../../styles/abstracts/_globalStyles';
import Item from '../Item';

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
            listShopping && listShopping.map((item:any, index:number) => {
              return (
                <Col col={3} key={index}>
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
