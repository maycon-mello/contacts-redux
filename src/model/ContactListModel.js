import Model from './Model';
import WS from '../data/RestClient';

class ListModel extends Model {

  constructor() {
    super();
    this.state = {
      list: [],
      currentPage: 0,
      filter: {},
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

  getContact(id) {
    return this.state.list.filter(c => c._id === id)[0];
  }

}

let model = new ListModel();
export default model;
module.exports.ContactListModel = ListModel;
