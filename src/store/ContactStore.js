// import {combineReducers, createStore} from 'redux';
//
// const contact = (state, action) => {
//   switch(action.type) {
//     case 'ADD_CONTACT':
//       return {
//         id  : action.id,
//         text: action.text,
//         completed: false
//       };
//     break;
//     case 'EDIT_TODO':
//       if (state.id !== action.id ) {
//         return state;
//       }
//
//       return {
//         ...state,
//         completed: !state.completed
//       };
//     break;
//     default:
//       return state;
//   }
// };
//
// const contacts = (state=[], action) => {
//   switch(action.type) {
//     case 'ADD_CONTACT':
//       return [
//         ...state,
//         todo(undefined, action)
//       ];
//     break;
//     case 'EDIT_CONTACT':
//       return state.map(t =>contact(t, action));
//     break;
//     case 'SEARCH':
//       return state.map(t =>contact(t, action));
//     break;
//     default:
//       return state;
//   }
// };
//
// // const visibilityFilter = (state='SHOW_ALL', action) => {
// //   switch (action.type) {
// //     case 'SET_VISIBILITY_FILTER':
// //       return action.filter;
// //     break;
// //     default:
// //       return state;
// //   }
// // };
// // }
// // const contactApp = combineReducers({
// //   contacts,
// //   visibilityFilter
// // });
//
// module.exports = createStore(contacts);
