import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

export default function(store) {
  return syncHistoryWithStore(browserHistory, store);
}
