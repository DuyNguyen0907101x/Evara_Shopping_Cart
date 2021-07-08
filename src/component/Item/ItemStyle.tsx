import styled from "styled-components";

export const ItemTag = styled.span<{
  tagHot?: boolean,
  tagNew?: boolean
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
  background-color: ${({tagHot, tagNew}) => 
    tagHot 
    ? '#ff75a0' 
    : (tagNew 
      ? '#99bbad' 
      : 'unset')}
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

export const P = styled.p`
  margin: 0 0 10px 0;
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
