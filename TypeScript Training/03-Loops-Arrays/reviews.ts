let reviews: number[] = [5, 5.5, 6, 7, 9];

let total: number = 0;

for (let i = 0; i < reviews.length; i++) {
  console.log(reviews[i]);
  total += reviews[i];
}

console.log(`The total is ${total}`);
let avg: number = total / reviews.length;

console.log(`The average is ${avg}`);
