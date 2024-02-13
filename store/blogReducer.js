const initialState = {
  pending: false,
  index: [],
  dict: {},
  error: null
};

const blog = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BLOGS_PENDING':
      return {
        ...state,
        pending: true,
        error: null
      };
    case 'FETCH_BLOGS_SUCCESS':
      return {
        pending: false,
        dict: action.dict,
        index: action.index,
        error: null
      };
    case 'FETCH_BLOGS_ERROR':
      return {
        dict: '',
        index: '',
        pending: false,
        error: action.error
      };
    default:
      return state;      
  }
}

export default blog;