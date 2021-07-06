import "../Shopping/shopping.css";
import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export interface IItemProps {
  itemData: any;
}

export default function Item({itemData}: IItemProps) {
  console.log('itemData', itemData);
  
  return (
    <div className="item-box">
      <div className="item-image">
        <span className="item-tag tag-hot">Hot</span>
        <img className='img-front' src={itemData.imageFront || ''} alt=""/>
        <img className='img-back' src={itemData.imageBack || ''} alt=""/>
      </div>
      <p className="item-type">{itemData.type || ''}</p>
      <h3 className="item-title">{itemData.name || ''}</h3>
      <div className="item-info">
        <div className="item-col">
          <div className="item-rate">
            <div className="rate-star">
              <FontAwesomeIcon icon={faStar} color="#FFCC00" />
              <FontAwesomeIcon icon={faStar} color="#FFCC00" />
              <FontAwesomeIcon icon={faStar} color="#FFCC00" />
              <FontAwesomeIcon icon={faStar} color="#FFCC00" />
              <FontAwesomeIcon icon={faStar} color="#DDDDDD" />
            </div>
            <div className="rate-percent">{itemData.rate || '0'}%</div>
          </div>
          <div className="item-price">
            <p className="item-current-price">${itemData.sellPrice || '0'}</p>
            <p className="item-old-price">${itemData.oldPrice || '0'}</p>
          </div>
        </div>
        <div className="item-col">
          <div className="cart-button">
            <div className="cart-icon">
              <FontAwesomeIcon icon={faShoppingCart} color="#009933" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
