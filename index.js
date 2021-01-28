import express from 'express';
import { customerRouter } from './routes/customerRouter.js';
import mongoose from 'mongoose';

mongoose
  .connect(
    'mongodb+srv://mongodbteste:lukkinha123@cluster0.wufl7.mongodb.net/sample_analytics?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(console.log('Conectado ao MongoDB Atlas'))
  .catch((err) => {
    console.log('Erro ao Conectar' + err);
  });

const app = express();
app.use(express.json());

app.use(customerRouter);

app.listen(3000, () => {
  console.log('API iniciada');
});
