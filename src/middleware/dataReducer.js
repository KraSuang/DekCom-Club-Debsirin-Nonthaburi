// reducers/dataReducer.js
const initialState = {
    data: null,
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'STORE_DATA':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default dataReducer;
  