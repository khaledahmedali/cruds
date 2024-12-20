let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let sudmit = document.getElementById('sudmit');

function getTotal(){
    if(price.value !='' && taxes.value !='' && ads.value !=''){
        let result = (+price.value + +taxes.value + +ads.value)
        - +discount.value;
        total.innerHTML = result;
        total.style.background ='#040';
    }else{
        total.innerHTML = ''
 total.style.background = 'rgb(150, 6, 6)';
    }
}



 let datapro;
 if(localStorage.product != null){
    datapro = JSON.parse(localStorage.product)
 }else{
    datapro =[]
 }

 sudmit.onclick = function(){
    let newPro ={
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value
    }
    if (newPro.count > 1){
      for(let i = 0 ;i <newPro.count;i++){
         datapro.push(newPro);
      }
    }else{
      datapro.push(newPro);
    }
   
    localStorage.setItem('product', JSON.stringify(datapro));
    clearData();
    showData();
 }





 function clearData(){
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';


 }


 function showData(){
    let table ='';
    for(let i = 0; i < datapro.length; i++){
        table +=`
          <tr>
                <td>${[i]}</td>
                 <td>${datapro[i].title}</td>
                <td>${datapro[i].price}</td>
                <td>${datapro[i].taxes}</td>
                <td>${datapro[i].ads}</td>
                <td>${datapro[i].discount}</td>
                 <td>${datapro[i].total}</td>
                <td>${datapro[i].category}</td>
                <td><button  onclick="updateData(${i})"id="update">update</button></td>
                <td><button onclick="deleteData(${i})" id="delet">delete</button></td>
               </tr> `
    }
    document.getElementById('tbody').innerHTML =table;
    let btnDelete =document.getElementById("deleteAll");
    if(datapro.length > 0){
        btnDelete.innerHTML =` 
        <button onclick="deleteAll()">delete All(${datapro.length})</button>
 `
    }else{
        btnDelete.innerHTML = '';
    }
}
   
 showData()

 //delete

 function deleteData(i){
    // console.log(i)
    datapro.splice(i,1);
    localStorage.product = JSON.stringify(datapro)
    showData()
 }

 //deleteAll

 function deleteAll(){
    localStorage.clear();
    datapro.splice(0)
    showData()
 } 


 function updateData(j){
   console.log(j)
 }