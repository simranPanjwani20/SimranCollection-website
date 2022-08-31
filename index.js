let saree1 = document.getElementById('saree1');
let totalPrice = 0;
saree1.addEventListener('click', ()=>{
   if(saree1.textContent===' Add to Cart'){
    saree1.textContent='Added to cart';
    
    let item = document.getElementsByClassName('card-title');
    let ul= document.getElementById('ul');
    const node = document.createElement('li');
    const text = document.createTextNode(item[0].textContent);
    node.appendChild(text);
    ul.appendChild(node);
    
    
    let sareeprice= document.getElementsByClassName('sareeprice');
    let value= parseInt(sareeprice[0].textContent);
    totalPrice+=value;
    
    
   }
})
let saree2 = document.getElementById('saree2');
saree2.addEventListener('click', ()=>{
   if(saree2.textContent===' Add to Cart'){
    saree2.textContent='Added to cart';
    let item = document.getElementsByClassName('card-title');
    
    let ul= document.getElementById('ul');
    const node = document.createElement('li');
    const text = document.createTextNode(item[1].textContent);
    node.appendChild(text);
    ul.appendChild(node);

    let sareeprice= document.getElementsByClassName('sareeprice');
    let value= parseInt(sareeprice[1].textContent);
    totalPrice+=value;
   }
})
let saree3 = document.getElementById('saree3');
saree3.addEventListener('click', ()=>{
   if(saree3.textContent===' Add to Cart'){
    saree3.textContent='Added to cart';
    let item = document.getElementsByClassName('card-title');
    
    let ul= document.getElementById('ul');
    const node = document.createElement('li');
    const text = document.createTextNode(item[2].textContent);
    node.appendChild(text);
    ul.appendChild(node);

    let sareeprice= document.getElementsByClassName('sareeprice');
    let value= parseInt(sareeprice[2].textContent);
    totalPrice+=value;
   }
})
 let cart = document.getElementById('cart');
 cart.addEventListener('click', ()=>{
   ul.style.display='block';
})
let price = document.getElementById('price');
 price.addEventListener('click', ()=>{
     var tprice= document.getElementById('tprice');
     tprice.textContent = 'total price =' + totalPrice
     tprice.style.display='block';
})


