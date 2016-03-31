class Model {

  constructor() {
    this.listeners = [];
  }
  
  subscribe(listener) {
    let _this = this;
    _this.listeners.push(listener);
    return () => {
      _this.listeners = _this.listeners.filter(l => l !== listener);
    }
  }

  notify(message) {
    this.listeners.forEach(listener => listener(message));
  }

  getListeners() {
    return this.listeners;
  }
}

export default Model;
