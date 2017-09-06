export default function TodosReducer(state = [], action) {
  switch(action.type) {
      case "ADD_TODO":
          const obj = {id: state.length, title: action.value, complete: false};
          return [...state, obj];
      case "REMOVE_TODO":
          const newstate = state.filter((item) => item.id != action.value);
          return newstate;
      case "COMPLETE_TODO":
          const updatedstate = state.map((item) => {
            if(item.id == action.value) {
              return Object.assign({}, item, {complete: true});
            } else {
              return item;
            }
          })
          return updatedstate;
      case "GET_JOKES":
          console.log(action.value);
          return [...state, ...action.value];
      default:
          return state;
  }
}
