import * as React from "react";
import {Flex, Paragraph} from '../../styles/abstracts/_globalStyles';
import {ItemBox, ItemTag, ItemImageField, ItemContentField, ImageFront, ImageBack, ItemRate, ItemCurrentPrice,
  ItemOldPrice, CartButton, CartIcon, Ratings, ItemPrice, ItemCol, ItemName} from './ItemStyle';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export interface IItemProps {
  itemData?: any;
}

const maxRating = 100;
const maxStar = 5;

export default function Item({itemData}: IItemProps) {
  const numberStar = (rating:number) => {
    const numRating = rating > maxRating ? maxRating : rating;
    const numStar = Math.round((numRating * maxStar) / maxRating);
    return numStar;
  }

  const numberStarRemain = (star:number) => {
    return maxStar - star > 0 ? maxStar - star : 0;
  }

  const sellPrice = (oldPrice:number, discount:number) => {
    const num = oldPrice - (oldPrice*discount)/100;
    if (oldPrice >= 0 && discount >= 0) {
      return num.toFixed(2);
    }
    return "0"
  }
  
  return (
    <ItemBox>
      <ItemImageField>
        <ItemTag type='hot'>Hot</ItemTag>
        <ImageFront src={itemData.imageFront || ""} alt=""/>
        <ImageBack src={itemData.imageBack || ""} alt=""/>
      </ItemImageField>
      <ItemContentField>
        <Paragraph>{itemData.type || ""}</Paragraph>
        <ItemName>{itemData.name || ""}</ItemName>
        <Flex>
          <ItemCol>
            <Ratings>
              <>
                {
                  [...Array(numberStar(itemData.rate))].map((star, index) => <FontAwesomeIcon icon={faStar} color="#FFCC00" key={index}/>)
                }
                {
                  numberStarRemain(numberStar(itemData.rate)) > 0 && 
                  [...Array(numberStarRemain(numberStar(itemData.rate)))].map((star, index) => <FontAwesomeIcon icon={faStar} color="#DDDDDD" key={index}/>)
                }
              </>
              <ItemRate>{itemData.rate || '0'}%</ItemRate>
            </Ratings>
            <ItemPrice>
              <ItemCurrentPrice>${sellPrice(itemData.oldPrice, itemData.discount)}</ItemCurrentPrice>
              {
                itemData.discount ? <ItemOldPrice>${itemData.oldPrice || "0"}</ItemOldPrice> : ""
              }
              
            </ItemPrice>
          </ItemCol>
          <ItemCol>
            <CartButton>
              <CartIcon>
                <FontAwesomeIcon icon={faShoppingCart} color="#009933" />
              </CartIcon>
            </CartButton>
          </ItemCol>
        </Flex>
      </ItemContentField>
    </ItemBox>
  );
}
