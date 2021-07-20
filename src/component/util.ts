import { TypeTag } from "../constant/enum";

const maxRating = 100;
const maxStar = 5;
const minPercentDiscount = 20;
const minPercentRate = 90;
const minTimeSold = 1000;

export const numberStar = (rating:number) => {
  const numRating = rating > maxRating ? maxRating : rating;
  const numStar = Math.round((numRating * maxStar) / maxRating);
  return numStar;
};

export const numberStarRemain = (star:number) => {
  return maxStar - star > 0 ? maxStar - star : 0;
};

export const sellPrice = (oldPrice:number, discount:number) => {
  if (oldPrice >= 0 && discount >= 0) {
    const priceDiscount = oldPrice - (oldPrice*discount)/100;
    return priceDiscount.toFixed(2);
  };
  return "0";
}

export const typeTag = (item:any) => {
  let typeTag = '';
  //tag sale
  if (item.discount > 0) {
    typeTag = TypeTag.Sale;

    if (item.discount >= minPercentDiscount) {
      typeTag = TypeTag.Hot;
    }
  }
  //tag new
  const aday=1000*60*60*24; //Set 1 day in milliseconds
  const aWeek = aday * 7;
  const today= new Date();
  const newDate = new Date(item.timeImported);
  const diff = today.getTime() - newDate.getTime();

  if(diff < aWeek){
    return typeTag = TypeTag.New;
  }
  //tag hot, best-sell
  if (item.rate >= minPercentRate) {
    typeTag = TypeTag.Hot;
    if (item.timeSold > minTimeSold) {
      typeTag = TypeTag.BestSell;
    }
  }
  return typeTag;
}

export const setNameTag = (item:any) => {
  if (typeTag(item) === TypeTag.Hot && item.discount >= minPercentDiscount) {
    return '-' + item.discount + '%';
  }
  return typeTag(item);
}
