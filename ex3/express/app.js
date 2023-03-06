const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (_, res) => {
  res.send({
    message: 'Hello world'
  });
});

app.post('/', (_, res) => {
  res.send({
    message: 'Foo bar'
  });
});

app.put('/foo', (req, res) => {
  res.send({
    method: req.method,
    url: req.url
  })
});


//Random number
app.get('/',(_,res)=>{
function aleatoreo(){

numeroAleatorio = Math.floor(Math.random() * 10) + 1
return(numeroAleatorio);
}


res.send({
    message:`Random Number: ${numeroAleatorio}`
})

});


//Fibonacci
app.post('/',(_,res)=>{
    
    function fibonacci(){
    let num1 = 0;
    let num2 = 1;
    
    console.log(num1); // Mostramos el primer número de la secuencia, que es 0.
    
    for (let i = 1; i < 10; i++) {
      console.log(num2); // Mostramos el siguiente número de la secuencia.
      let temp = num1 + num2; // Calculamos el siguiente número de la secuencia.
      num1 = num2;
      num2 = temp;
    }
}
res.send({
    message:`10 numeros de fibonacci: ${fibonacci}`
    });

});

app.listen(PORT, () => {
  console.log(`Server is running at PORT :${PORT}`);
});