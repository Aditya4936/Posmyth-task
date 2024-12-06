export const products = 'products';
export const updateFilters = 'updateFilters';

export const fetchproducts = () => async (dispatch) => {
  
  const res = await fetch('https://fakestoreapi.com/products');

  const resData = await res.json();
  dispatch({
    type: products,
    payload: resData,
  });
};

export const setFilters = (filters) => ({

  type: updateFilters,
  payload: filters,
});
