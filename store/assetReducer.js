const initialState = {
  pending: false,
  asset: {},
  error: null
};

const asset = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ASSET_PENDING':
      return {
        ...state,
        pending: true,
        error: null
      };
    case 'FETCH_ASSET_SUCCESS':
      return {
        pending: false,
        asset: action.asset,
        error: null
      };
    case 'FETCH_ASSET_ERROR':
      return {
        asset: '',
        pending: false,
        error: action.error
      };
    default:
      return state;      
  }
}

export default asset;