import "../Shopping/shopping.css";
import * as React from "react";
import {Flex, Padding, Width, FontSize} from '../../styles/abstracts/_globalStyles';
import {ItemBox, ItemTag, ItemImageField, ImageFront, ImageBack, P, ItemCurrentPrice,
  ItemOldPrice, CartButton, CartIcon} from './ItemStyle';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export interface IItemProps {
  itemData?: any;
}

export default function Item({itemData}: IItemProps) {
  return (
    <ItemBox>
      <ItemImageField>
        <ItemTag tagHot={true} >Hot</ItemTag>
        <ImageFront src={itemData.imageFront || ''} alt=""/>
        <ImageBack src={itemData.imageBack || ''} alt=""/>
      </ItemImageField>
      <Padding paddingLeft='10px' paddingRight='10px'>
        <P>{itemData.type || ''}</P>
        <P>{itemData.name || ''}</P>
        <Flex>
          <Width w='50%'>
            <P>
              <Flex>
                <Flex>
                  <FontAwesomeIcon icon={faStar} color="#FFCC00" />
                  <FontAwesomeIcon icon={faStar} color="#FFCC00" />
                  <FontAwesomeIcon icon={faStar} color="#FFCC00" />
                  <FontAwesomeIcon icon={faStar} color="#FFCC00" />
                  <FontAwesomeIcon icon={faStar} color="#DDDDDD" />
                </Flex>
                <Padding paddingLeft='10px'>
                  <FontSize fSize='14px'>{itemData.rate || '0'}%</FontSize>
                </Padding>
              </Flex>
            </P>
            <Flex alignItems='flex-end'>
              <ItemCurrentPrice>${itemData.sellPrice || '0'}</ItemCurrentPrice>
              <ItemOldPrice>${itemData.oldPrice || '0'}</ItemOldPrice>
            </Flex>
          </Width>
          <Width w='50%'>
            <CartButton>
              <CartIcon>
                <FontAwesomeIcon icon={faShoppingCart} color="#009933" />
              </CartIcon>
            </CartButton>
          </Width>
        </Flex>
      </Padding>
    </ItemBox>
  );
}
