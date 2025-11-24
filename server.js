   const express = require('express');
   const app = express();
   const PORT = process.env.PORT || 10000;

   app.get('/', (req, res) => {
     res.send('Funciona. Aquí irá n8n después.');
   });

   app.listen(PORT, () => {
     console.log(`Servidor en puerto ${PORT}`);
   });
