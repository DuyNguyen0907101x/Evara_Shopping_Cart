import {Flex, Paragraph} from '../../styles/abstracts/_globalStyles';
import {ItemBox, ItemTag, ItemImageField, ItemContentField, ImageFront, ImageBack, RatingsStars, RatingPercent, ItemCurrentPrice,
  ItemOldPrice, CartButton, CartIcon, Ratings, ItemPrice, ItemCol, ItemName} from './ItemStyle';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { numberStar, numberStarRemain, sellPrice, typeTag, setNameTag } from '../util';
import { useMemo } from 'react';
export interface IItemProps {
  itemData?: any;
}

export default function Item({itemData}: IItemProps) {
  const ratingsStars = useMemo(() => {
    return [...Array(numberStar(itemData.rate))];
  }, [itemData.rate]);

  const remainStars = useMemo(() => {
    return [...Array(numberStarRemain(numberStar(itemData.rate)))];
  }, [itemData.rate]);

  return (
    <ItemBox>
      <ItemImageField>
        <ItemTag type={typeTag(itemData)}>{setNameTag(itemData)}</ItemTag>
        <ImageFront src={itemData.imageFront || ""} alt=""/>
        <ImageBack src={itemData.imageBack || ""} alt=""/>
      </ItemImageField>
      <ItemContentField>
        <Paragraph>{itemData.type || ""}</Paragraph>
        <ItemName>{itemData.name || ""}</ItemName>
        <Flex>
          <ItemCol>
            <Ratings>
              <RatingsStars>
                {
                  ratingsStars.map((star, index) => <FontAwesomeIcon icon={faStar} color="#FFCC00" key={index}/>)
                }
                {
                  numberStarRemain(numberStar(itemData.rate)) > 0 && 
                  remainStars.map((star, index) => <FontAwesomeIcon icon={faStar} color="#DDDDDD" key={index}/>)
                }
              </RatingsStars>
              <RatingPercent >{itemData.rate || '0'}%</RatingPercent>
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
