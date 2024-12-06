
import { products, updateFilters } from "./Product_Action";

const initialState = {
  products: [],
  filters: {
    searchQuery: '',
    category: '',
    sortbyprice:'',
    sortbyrating: "",
  },
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case products:
      return {
        ...state,
        products: action.payload,
      };

    case updateFilters:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};

export default productReducer;
