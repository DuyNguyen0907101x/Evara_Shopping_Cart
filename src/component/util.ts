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