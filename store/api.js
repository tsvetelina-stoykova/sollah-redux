export const fetchAssets = () => {
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


export const fetchBlogs = () => {
  return async (dispatch) => {
      dispatch({type: 'FETCH_BLOGS_PENDING'});

      try {
          const res = await fetch('https://sollahlibrary.com/mapi/4/blogs');
          const res_blogs = await res.json();
          const blogs = res_blogs.posts;
          const index = blogs.map(b => b.seo_id);
          const dict={};
          for(let b of blogs) {
              dict[b.seo_id] = b;
          }
         
          if(Array.isArray(index)) {
              dispatch({type: 'FETCH_BLOGS_SUCCESS', index, dict})
          } else {
              throw new Error('JSON response is wrong data format.');
          }
      }
      catch(err) {
          dispatch({type: 'FETCH_BLOGS_ERROR', error: err.message});
          console.log('ERROR', err.message)
      }
  }
}

export const fetchOneAsset = (id) => {
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

