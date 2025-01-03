if (process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config({
      path: './src/config/.env',
    });
  }
  import connectDatabase from './DB/database.js';
  import app from './app.js';
  
  const PORT = process.env.PORT;
  
  const server = app.listen(PORT, async () => {
    connectDatabase();
    console.log('The Server is running on Port:8080 URL: http://localhost:8080');
  });