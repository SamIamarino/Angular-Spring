var reviews = [5, 5.5, 6, 7, 9];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
console.log("The total is ".concat(total));
var avg = total / reviews.length;
console.log("The average is ".concat(avg));
