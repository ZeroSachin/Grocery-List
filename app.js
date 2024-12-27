const input = document.querySelector("#input");
const addBtn = document.querySelector("#submit");
const list = document.querySelector(".list");
const clear = document.querySelector("#clear");
const del = document.querySelector(".trash");


function element(){
  let item = document.createElement("p");
    let id = new Date().getTime().toString();
    item.innerHTML=`<input class="check"  type="checkbox"> ${input.value}  <i class="fa-solid fa-trash  trash" id=${id}></i>`;
    list.appendChild(item);

    var deleteBtn = item.querySelector(`.trash`);

   let one = deleteBtn.addEventListener("click",()=>{
      list.removeChild(item);
    });
};
 

addBtn.addEventListener("click", ()=>{
  if(input.value != ""){
    element();
    input.value = "";
    clear.style.display = "block";
  }else{
    alert("List item name required.")
  }
});


clear.addEventListener("click", ()=>{
  list.innerHTML = "";
  clear.style.display = "none"; 
});


