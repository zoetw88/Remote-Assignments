

function countAandB(input){
    var y=0;
    var x=0;
    for (var i=0;i<input.length;i++){
        if(input[i] === "a"){
             x+=1;
          }else if (input[i] === "b"){
             y+=1;
          }
        }
        console.log(`${x+y} (${x}'a'letters and ${y}'b'letters)`);
     }


function toNumber(input){
  for (var i=0;i<input.length;i++){
      if (input[i] === "a"){
           input[i] ="1"
        }else if (input[i] === "b"){
           input[i] ="2"
        }else if (input[i] === "c"){
           input[i] ="3"
        }else if (input[i] === "d"){
           input[i] ="4"
        }else if (input[i] === "e"){
           input[i] ="5"
        }

      }
      console.log(input);

   }

    let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
    countAandB(input1);
    toNumber(input1);
    let input2 = ['e', 'd', 'c', 'd', 'e'];
    countAandB(input2);
    toNumber(input2);
