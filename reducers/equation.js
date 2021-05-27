const initialState = {
  reactants: [],
  products: [],
};

export const NEW_RCTN = "NEW_RCTN";
export const NEW_PROD = "NEW_PROD";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case NEW_RCTN:
      return { ...state, reactants: [...state.reactants, payload] };

    case NEW_PROD:
      return { ...state, products: [...state.products, payload] };

    default:
      return state;
  }
};
