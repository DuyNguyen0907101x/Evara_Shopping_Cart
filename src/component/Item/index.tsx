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
const maxStart = 5;

export default function Item({itemData}: IItemProps) {
  const numberStar = (rating:number) => {
    const numRating = rating > maxRating ? maxRating : rating;
    const numStar = Math.round((numRating * maxStart) / maxRating);
    return numStar;
  }

  const numberStarRemain = (rating:number) => {
    return maxStart - rating > 0 ? maxStart - rating : 0;
  }

  const sellPrice = (oldPrice:number, discount:number) => {
    const num = oldPrice - (oldPrice*discount)/100;
    if (oldPrice >= 0 && discount >= 0) {
      return num.toFixed(2);
    }
    return "0"
  }

  const typeItemTag = (item:any) => {
    let typeTag = '';

    //tag sale
    if (item.discount > 0) {
      typeTag = 'sale';

      if (item.discount >= 20) {
        typeTag = 'hot';
      }
    }

    //tag new
    let aday=1000*60*60*24; //Set 1 day in milliseconds
    let aWeek = aday * 7;
    let today= new Date();
    let newDate = new Date(item.timeImported);
    let diff = today.getTime() - newDate.getTime();

    if(diff < aWeek){
      return typeTag = 'new'
    }
    
    //tag hot, best-sell
    if (item.rate >= 90) {
      typeTag = 'hot';
      if (item.timeSold > 1000) {
        typeTag = 'best sell';
      }
    }
    return typeTag;
  }

  const checkDiscount = (item:any) => {
    if (typeItemTag(itemData) === 'hot' && item.discount >= 20) {
      return item.discount + '%';
    }
    return typeItemTag(item)
  }
  
  return (
    <ItemBox>
      <ItemImageField>
        <ItemTag typeTag={typeItemTag(itemData)}>{checkDiscount(itemData)}</ItemTag>
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
