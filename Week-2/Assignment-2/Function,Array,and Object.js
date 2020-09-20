
var a;
var b;
var c;
var average;
function avg(data) {
a =data.products[0].price;
b =data.products[1].price;
c =data.products[2].price;
average=(a+b+c)/3;
return average;
}
console.log(
avg({
size:3,
products:[
{
name:"Product 1",
price:100
},
{
name:"Product 2",
price:700
},
{
name:"Product 3",
price:250
}
]
})
) // should print the average price of all products
