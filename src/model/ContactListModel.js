import Model from './Model';
import WS from '../data/RestClient';

class ListModel extends Model {

  constructor() {
    super();
    this.state = {
      list: [],
      currentPage: 0,
      filter: {},
      currentContact: null,
      isFetching: false,
    }
    this.update();
  }

  filter(options) {
    this.state.filter = options;
    this.update();
  }

  loadMore() {
    this.state.currentPage++;
  }

  update() {
    let _this = this;
    let resource = '/contacts?';
    let filter = this.state.filter;
    resource += 'page=' + this.state.currentPage;
    if (filter.type && filter.value) {
      resource = resource + '&filterType=' + filter.type + '&filterValue=' + filter.value;
    }

    WS.get(resource)
      .then(list => _this.setList(list))
      .catch(err => {
        console.log(err);
        _this.setList([]);
      });
    this.state.isFetching = true;
    this.notify(this.state);
  }

  getList() {
    return this.state.list;
  }

  getState() {
    return this.state;
  }

  setList(list) {
    this.state.list = list;
    this.state.isFetching = false;
    this.notify(this.state);
  }

  setCurrentContact(contact) {
    this.state.currentContact = contact;
    this.notify(this.state);
  }

  getContact(id) {
    let contact = this.state.list.filter(c => c._id === id)[0];
    console.log(contact);
    if (contact) {
      return contact;
    }
    console.log("fetch contact");
    let _this = this;
    WS.get('/contacts/' + id)
      .then(contact => _this.setCurrentContact(contact))
      .catch(err => {
        console.log(err);
        _this.setCurrentContact(null);
      });
    return null;
  }

}

let model = new ListModel();
export default model;
module.exports.ContactListModel = ListModel;
