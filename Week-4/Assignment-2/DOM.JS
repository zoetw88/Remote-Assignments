function ajax(src, callback){
    var xhr=new XMLHttpRequest();
         xhr.open('GET',src);
         xhr.send();
         xhr.onreadystatechange =function(){
         if (xhr.readyState === 4) {
             if (xhr.status >= 200 && xhr.status< 400) {
                 var result =JSON.parse(xhr.responseText);
                 callback(result);
                 console.log('成功');
             }
            else{
                console.log('資料錯誤');
            }
        }
        }
    };
  
function render(data){  
    var currentDiv = document.createElement("div");
    data.forEach(function(seperate){
        var newDiv = document.createElement("div"); 
        newDiv.innerHTML='&bigstar;&Tab;'+seperate["name"]+'&Tab;'+'&dollar;&Tab;'+ seperate["price"] +'&Tab;' + '&Tab;&lpar;'+seperate["description"]+'&rpar;&Tab;'
        currentDiv.appendChild(newDiv);
    });
    var Div = document.querySelector('#start'); 
    Div.appendChild(currentDiv);
};
ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){
     render(response);
    });