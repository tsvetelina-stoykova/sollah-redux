const fetchOneAsset = ({id}) => {
  return async (dispatch) => {
    dispatch({type: 'FETCH_ASSETS_PENDING'});

    try {
      const res = await fetch(`https://sollahlibrary.com/mapi/4/assets/${id}`);
      const asset = await res.json();
      const index = id;
      console.log("index", index)
      const dict = {};
      dict[asset.id] = asset
   

      if (index != undefined) {
        dispatch({type: 'FETCH_ASSETS_SUCCESS',index, dict})
      } else {
        throw new Error('JSON response is wrong data format.');
      }
    } catch(err) {
      dispatch({type: 'FETCH_ASSETS_ERROR', error: err.message});
      console.log('ERROR', err.message)
    }
  }
 }

 export default fetchOneAsset;