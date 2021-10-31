// const new_item = document.getElementById("newItem");

// // document.querySelector("button").addEventListener("click", function() {
// // const new_item = document.getElementById("newItem").value;
// //     document.querySelector("h1").innerHTML = new_item;
// //   });


// date
let mon =["January" , "February" , "March", "April" , "May" , "June", "July" , "August"  ,"September" , "October", "November" , "December"];

const today = new Date();
var date = today.getDate();
var month = today.getMonth() ;
var year = today.getFullYear();

let date_str = date + " " + mon[month] + " " + year ;

document.getElementById("date").innerHTML = date_str;
// date 



let items =[];
if(localStorage.length!=0)
{
  let data = localStorage.getItem("todo");
  if(data==null)
  {
  items=[];
  }else{
  items = JSON.parse(data);
  }
  items.forEach(getList);

}



document.getElementById("clear").addEventListener('click',function(){
  localStorage.clear();
  location.reload();
});



const new_item = document.getElementById("newItem");     // selecting input element

document.getElementById("add").addEventListener("click", function() {
  let value = new_item.value;
  let data = localStorage.getItem("todo");
  if(data==null)
  {
    items=[];
  }else{
  items = JSON.parse(data);
  }
  items.push(value);
  localStorage.setItem("todo", JSON.stringify(items));
  getList(value);
});

function getList(element)
{
  let app = document.querySelector('div');
  let li = document.createElement('lable');
  let ch = document.createElement("input");
  li.className='box';
  ch.type = "checkbox";
  li.textContent = element;
  if(li.textContent.trim()!='')
  {
  app.append(li);
  li.insertAdjacentElement('afterbegin',ch);
  }
} 