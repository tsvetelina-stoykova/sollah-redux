const fetchOneAsset = (id) => {
  return async (dispatch) => {
    dispatch({type: 'FETCH_ASSET_PENDING'});

    try {
      const res = await fetch(`https://sollahlibrary.com/mapi/4/assets/${id}`);
      const asset = await res.json();

      if (asset != undefined) {
        dispatch({type: 'FETCH_ASSET_SUCCESS', asset})
      } else {
        throw new Error('JSON response is wrong data format.');
      }
    } catch(err) {
      dispatch({type: 'FETCH_ASSET_ERROR', error: err.message});
      console.log('ERROR', err.message)
    }
  }
 }

 export default fetchOneAsset;