var list=[];
function count(input) {
var c;
var d=0;
var z=false;
for(var x=0;x<input.length;x++){
  var number=0;
  for(let y=0;y<input.length;y++){
   if (input[x]==input[y]){
        number++;
      }
  }
  c=input[x];
  for (var i=0;i<input.length;i++){
    if (list[i]==input[x]){
       z=true;
       break;
    } else{
      z=false;
    }
  }
  if (z===false){list.push(c,number);
  }
}
return list;
}
let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'x'];
console.log(count(input1));

//----------------------------------------------------------------------------
var table=[];
var a;
var b;
var t;
var d;
function groupByKey(input) {
for (var x = 0; x<input.length;x++){
  d=0;
  for(var y = 0;y<input.length;y++){
   if (input[x].key==input[y].key){
            a=input[y].value
            b=input[x].key;
            d=a+d;
      }
    }
    for (var i=0;i<input.length;i++){
      if (table[i]==b){
         t=true;
         break;
      } else{
        t=false;
      }
    }
    if (t===false){
      table.push(b,d);
    }
    }

    return table;
  }
let input2 = [
{key: 'a', value: 3},
{key: 'b', value: 1},
{key: 'c', value: 2},
{key: 'a', value: 3},
{key: 'c', value: 5}
]
console.log(groupByKey(input2));
