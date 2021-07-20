import { TypeTag } from "../constant/enum";

const maxRating = 100;
const maxStar = 5;

export const numberStar = (rating:number) => {
  const numRating = rating > maxRating ? maxRating : rating;
  const numStar = Math.round((numRating * maxStar) / maxRating);
  return numStar;
};

export const numberStarRemain = (star:number) => {
  return maxStar - star > 0 ? maxStar - star : 0;
};

export const sellPrice = (oldPrice:number, discount:number) => {
  const num = oldPrice - (oldPrice*discount)/100;
  if (oldPrice >= 0 && discount >= 0) {
    return num.toFixed(2);
  };
  return "0";
}

export const typeTag = (item:any) => {
  let typeTag = '';
  //tag sale
  if (item.discount > 0) {
    typeTag = TypeTag.Sale;

    if (item.discount >= 20) {
      typeTag = TypeTag.Hot;
    }
  }
  //tag new
  let aday=1000*60*60*24; //Set 1 day in milliseconds
  let aWeek = aday * 7;
  let today= new Date();
  let newDate = new Date(item.timeImported);
  let diff = today.getTime() - newDate.getTime();

  if(diff < aWeek){
    return typeTag = TypeTag.New
  }
  //tag hot, best-sell
  if (item.rate >= 90) {
    typeTag = TypeTag.Hot;
    if (item.timeSold > 1000) {
      typeTag = TypeTag.BestSell;
    }
  }
  return typeTag;
}

export const setNameTag = (item:any) => {
  if (typeTag(item) === TypeTag.Hot && item.discount >= 20) {
    return item.discount + '%';
  }
  return typeTag(item)
}
