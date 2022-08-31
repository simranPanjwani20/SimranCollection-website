let lehenga1 = document.getElementById('lehenga1');
let totalPrice = 0;
lehenga1.addEventListener('click', ()=>{
   if(lehenga1.textContent===' Add to Cart'){
    lehenga1.textContent='Added to cart';
    
    let item = document.getElementsByClassName('card-title');
    let ul= document.getElementById('ul');
    const node = document.createElement('li');
    const text = document.createTextNode(item[0].textContent);
    node.appendChild(text);
    ul.appendChild(node);
    
    
    let lehengaprice= document.getElementsByClassName('lehengaprice');
    let value= parseInt(lehengaprice[0].textContent);
    totalPrice+=value;
    
    
   }
})
let lehenga2 = document.getElementById('lehenga2');
lehenga2.addEventListener('click', ()=>{
   if(lehenga2.textContent===' Add to Cart'){
    lehenga2.textContent='Added to cart';
    let item = document.getElementsByClassName('card-title');
    
    let ul= document.getElementById('ul');
    const node = document.createElement('li');
    const text = document.createTextNode(item[1].textContent);
    node.appendChild(text);
    ul.appendChild(node);

    let lehengaprice= document.getElementsByClassName('lehengaprice');
    let value= parseInt(lehengaprice[1].textContent);
    totalPrice+=value;
   }
})
let lehenga3 = document.getElementById('lehenga3');
lehenga3.addEventListener('click', ()=>{
   if(lehenga3.textContent===' Add to Cart'){
    lehenga3.textContent='Added to cart';
    let item = document.getElementsByClassName('card-title');
    
    let ul= document.getElementById('ul');
    const node = document.createElement('li');
    const text = document.createTextNode(item[2].textContent);
    node.appendChild(text);
    ul.appendChild(node);

    let lehengaprice= document.getElementsByClassName('lehengaprice');
    let value= parseInt(lehengaprice[2].textContent);
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
