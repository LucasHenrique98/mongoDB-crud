import mongoose from 'mongoose';

const nameSchema = mongoose.Schema({
  name: { type: String, require: true },
  username: { type: String, require: true },
});

const customerModel = mongoose.model('customers', nameSchema);

export { customerModel };
