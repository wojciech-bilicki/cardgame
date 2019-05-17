import { ADD_RESULT, REMOVE_RESULT } from "./resultActions";

const results = (state = [], action) => {
  switch (action.type) {
    case ADD_RESULT:
      return [
        ...state,
        {
          ...action.payload
        }
      ]
      case REMOVE_RESULT:
      console.log(action);
        return state.filter(item => item.id !== action.payload.id);
    default: 
      return state;
  }
  

}

export default results;