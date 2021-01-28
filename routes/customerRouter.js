import express from 'express';
import { customerModel } from '../models/customerModel.js';

const router = express.Router();

//create
router.post('/customer', async (req, res) => {
  try {
    const customer = new customerModel(req.body);

    await customer.save();
    res.send(customer);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/customer', async (req, res) => {
  try {
    const customer = await customerModel.find(
      {},
      { _id: 1, name: 1, username: 1 }
    );
    res.send(customer);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put('/customer/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const data = await customerModel.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/customer/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await customerModel.findByIdAndDelete({ _id: id });

    if (!data) {
      res.status(404).send('Documento não Encontrado');
    } else {
      res.send('Documento excluído com sucesso');
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

export { router as customerRouter };
