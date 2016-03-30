import express from 'express';
import mongoose from 'mongoose';
import util from '../util';

const router = express.Router();
const Contact = mongoose.model('Contact');

/**
 *
 * @param {Object} contact
 */
function create (res, contact) {
  Contact.create(contact).then(
    result => {
      result = beforeSend(result);
      console.log("creatted");
      console.log(result);
      res.status(201).json();
    },
    error => {
      console.log(error);
      res.status(500).json(error);
    }
  );
}
/**
 *
 *
 * @param {Object} contact
 * @returns {Promise} promise
 */
function update (res, contact) {
  let id = contact._id;
  delete contact._id;

  console.log(contact);

  return Contact.findByIdAndUpdate(id, contact).exec().then(
    () => {
      contact._id = id;
      contact = beforeSend(contact);
      res.status(201).json(contact);
    },
    error => {
      console.log(error);
      res.status(500).json(error);
    }
  );
}
/**
 *
 *
 * @param {Object} body
 * @returns {Object} contact
 */
function parseBody (body) {
  var contact = body;
  // extract contact data from body
  // contact = body;
  // if (contact.date) {
  //     contact.date = util.date.fromString(contact.date);
  // }
  //
  return contact;
}

function beforeSend (contact) {
  var obj = {};

  return contact;
}

/*
 * List
 * @param {Object} req http request
 * @param {Object} res http response
 */
router.get('/', (req, res, next) => {
  let cursor,
      query = {},
      page = req.query.page || 0,
      pageSize = 10;

  cursor = Contact.find({ name: new RegExp(req.query.filter, "i") });

  cursor.exec().then(
    // success
    contactArray => res.json(contactArray.slice(page * pageSize, page * pageSize + pageSize)),
    // error
    error => {
      console.error(error);
      res.status(500).json(error);
    }
  );
});

/*
 * Save
 * @param {Object} req http request
 * @param {Object} res http response
 */
router.post('/', (req, res) => {
  let promise,
      contact =  parseBody(req.body);

  if (contact._id) {
    promise = update(res, contact);
  } else {
    promise = create(res, contact);
  }
});

/*
 * Get by id
 * @param {Object} req http request
 * @param {Object} res http response
 */
router.get('/:id', (req, res, next) => {
  let _id = req.params.id;
  Contact.findById(_id).exec().then(
    // success
    contact => {
      if (!contact) {
        throw new Error("Contact doesn't found");
      }
      beforeSend(contact);
      res.json(contact);
    },
    // error
    error => {
        console.log(error);
        res.status(404).json(error);
    }
  );
});
/*
 * Delete
 * @param {Object} req http request
 * @param {Object} res http response
 */
router.delete('/:id', (req, res, next) => {
  let _id = req.params.id;
  Contact.remove({"_id": _id}).exec().then(
      // success
      () => res.end(),
      // error
      error => console.error(error)
  );
});

export default app => app.use('/contacts', router);
