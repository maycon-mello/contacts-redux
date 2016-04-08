import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: String,
  cpf:  String,
  company: String,
  emails: [{ label: String, address: String }],
  phones: [{ label: String, number: String }],
  labels: [String],
  address: String,
  location: String,
  city: String,
  state: String,
  zipCode: String,
  anotations: String,
  site: String,
});

mongoose.model('Contact', ContactSchema)
