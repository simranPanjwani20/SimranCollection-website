const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Contact-info');
const bodyparser = require('body-parser');
const port = 80;
const path = require('path');
const fs = require('fs')

//making mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    age: String,
    number: String,
    email: String,
    address: String,
    others: String
  });

  const Contact = mongoose.model('Contact', contactSchema);

  //to view staic files
app.use('/static', express.static('static'))
app.use(express.urlencoded());

//setting the view engine
app.set('view engine', 'pug'); 
app.set('views', path.join(__dirname, 'views'));

//requests 
app.get('/', (req , res)=> {
 res.status(200).render('index.pug');
});
app.get('/about', (req , res)=> {
 res.status(200).render('about.pug');
   });
app.get('/contact', (req , res)=> {
 res.status(200).render('contact.pug');
   });
app.get('/saree', (req , res)=> {
    res.status(200).render('saree.pug');
      });
app.get('/suit', (req , res)=> {
        res.status(200).render('suit.pug');
          });
app.get('/lehenga', (req , res)=> {
            res.status(200).render('lehenga.pug');
              });
app.get('/products', (req , res)=> {
                res.status(200).render('products.pug');
                  });     
app.get('/cart', (req , res)=> {
  res.status(200).render('cart.pug');
                      });         

    //to get contact form info from post req using express(body parser)
app.post('/contact', (req, res )=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send('your info saved')
    }).catch(()=>{
        res.status(400).send('not saved')
    })
});

app.listen(port, ()=>{
    console.log('success');
})


