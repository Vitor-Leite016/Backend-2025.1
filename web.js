export default function userWebRoutes (app){

app.get('/', (req, res) => {
    res.send('Qualquer coisa');
  });
  
  app.get('/Vitor', (req, res) => {
      res.send('Vitor é mo massa');
    });
  
    app.get('/user/:id', (req, res) => {
  
      res.json({
          params: req.params,
          query: req.query,
          method: req.method,
          headers: req.headers,
      });
    
  });

  app.get('/portifolio', (req, res) => {
    res.render('portifolio', {nome: 'Vitor'});

    });

}