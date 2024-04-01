const express =  require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('Hola mundo express')
});

app.get('/clientes', (req, res) => {
    const clientes = ['Harold', 'Jesus', 'Jusepi'];
    res.json(clientes);
});

app.get('/productos', (req, res) => {
    const producto = ['Televisor', 'Licuadora', 'Teclado'];
    res.json(producto);
});

const PORT = 11100;
app.listen(PORT, () =>{
    console.log('Se ejecuta la aplicación')
});