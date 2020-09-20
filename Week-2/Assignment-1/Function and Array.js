
function max(numbers) {
  var maximum=numbers[0];
  for(let i=0;i<numbers.length;i++){
   if (maximum<numbers[i+1]){
      var maximum=numbers[i+1]
  }
}
return maximum;
}

//------------------------------findposition-----------------------------
function findPosition(numbers, target) {
var p;
var i;
 for(i=0;i<numbers.length;i++){
  if(numbers[i]==target){
    p =i; break;
  }else{
    p=-1;
  }
}
return p;
}

console.log( max([1, 2, 4, 5]) ); // should print 5
console.log( max([5, 2, 7, 1, 6]) ); // should print 7
console.log( findPosition([5, 2, 7, 1, 6], 5) ); // should print 0
console.log( findPosition([5, 2, 7, 1, 6], 7) ); // should print 2
console.log( findPosition([5, 2, 7, 7, 7, 1, 6], 7) ); // should print 2 (the first position)
console.log( findPosition([5, 2, 7, 1, 6], 8) ); // should print -1
// your code here, for-loop method preferred
