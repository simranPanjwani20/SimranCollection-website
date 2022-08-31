let suit1 = document.getElementById('suit1');
let totalPrice = 0;
suit1.addEventListener('click', ()=>{
   if(suit1.textContent===' Add to Cart'){
    suit1.textContent='Added to cart';
    
    let item = document.getElementsByClassName('card-title');
    let ul= document.getElementById('ul');
    const node = document.createElement('li');
    const text = document.createTextNode(item[0].textContent);
    node.appendChild(text);
    ul.appendChild(node);
    
    
    let suitprice= document.getElementsByClassName('suitprice');
    let value= parseInt(suitprice[0].textContent);
    totalPrice+=value;
    
    
   }
})
let suit2 = document.getElementById('suit2');
suit2.addEventListener('click', ()=>{
   if(suit2.textContent===' Add to Cart'){
    suit2.textContent='Added to cart';
    let item = document.getElementsByClassName('card-title');
    
    let ul= document.getElementById('ul');
    const node = document.createElement('li');
    const text = document.createTextNode(item[1].textContent);
    node.appendChild(text);
    ul.appendChild(node);

    let suitprice= document.getElementsByClassName('suitprice');
    let value= parseInt(suitprice[1].textContent);
    totalPrice+=value;
   }
})
let suit3 = document.getElementById('suit3');
suit3.addEventListener('click', ()=>{
   if(suit3.textContent===' Add to Cart'){
    suit3.textContent='Added to cart';
    let item = document.getElementsByClassName('card-title');
    
    let ul= document.getElementById('ul');
    const node = document.createElement('li');
    const text = document.createTextNode(item[2].textContent);
    node.appendChild(text);
    ul.appendChild(node);

    let suitprice= document.getElementsByClassName('suitprice');
    let value= parseInt(suitprice[2].textContent);
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
