const fetchAssets = () => {
  return async (dispatch) => {
    dispatch({type: 'FETCH_ASSETS_PENDING'});

    try {
      const res = await fetch('https://sollahlibrary.com/mapi/4/assets');
      const res_assets = await res.json();
      const assets = res_assets.assets;
      const index = assets.map(a => a.id)
      const dict = {};
      for (let a of assets) {
        dict[a.id] = a;
      }

      if (Array.isArray(index)) {
        dispatch({type: 'FETCH_ASSETS_SUCCESS', index, dict})
      } else {
        throw new Error('JSON response is wrong data format.');
      }
    } catch(err) {
      dispatch({type: 'FETCH_ASSETS_ERROR', error: err.message});
      console.log('ERROR', err.message)
    }
  }
}

export default fetchAssets;