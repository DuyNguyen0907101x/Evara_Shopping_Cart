import styled from "styled-components";

export const ItemTag = styled.span<{
  typeTag?: string
}>`
  position: absolute;
  top: 10px;
  left: 10px;
  color: #fff;
  padding: 5px 10px;
  border-radius: 15px;
  line-height: 1;
  font-size: 12px;
  z-index: 1;
  text-transform: capitalize;
  background-color: ${({typeTag}) => {
    switch(typeTag) {
      case "hot":
        return "#ff75a0"
      case "new":
        return "#99bbad"
      case "best sell":
        return "#ffab73"
      case "sale":
        return "#a1cae2"
      default:
        return "unset"
    }
  }}
`

export const ItemBox = styled.div`
  padding: 12px 12px 15px 12px;
  border: 1px solid #cce7d0;
  border-radius: 25px;
  height: 100%;
`

export const ImageBack = styled.img`
  display: none;
`

export const ImageFront = styled.img`
  display: block;
`

export const ItemImageField = styled.div`
  position: relative;
  border-radius: 20px;
  padding-bottom: 100%;
  overflow: hidden;
  margin-bottom: 15px;
  cursor: pointer;
  
  &:hover ${ImageBack} {
    display: block;
  }

  &:hover ${ImageFront} {
    display: block;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const ItemContentField = styled.div`
  padding: 0 10px 0 10px;
`

export const ItemRate = styled.div`
  padding-left: 10px;
  font-size: 14px
`

export const ItemCurrentPrice = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin: 0;
  line-height: 1;
  color: #088178;
`

export const ItemOldPrice = styled.p`
  font-size: 14px;
  text-decoration: line-through;
  padding-left: 10px;
  margin: 0;
  line-height: 1;
  color: #BBBBBB;
`

export const CartButton = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`

export const CartIcon = styled.div`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background-color: #e8f6ea;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    background-color: #088178;

    & svg {
      color: #fff;
    }
  }
`

export const Ratings = styled.div`
  display: flex;
  margin-bottom: 10px
`

export const ItemPrice  = styled.div`
  display: flex;
  align-items: flex-end;
`

export const ItemCol = styled.div`
  width: 50%;
`;

export const ItemName = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;