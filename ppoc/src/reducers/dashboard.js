const initialState = {
  people: {},
  movies: {}
};

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case "PEOPLE":
      return { ...state, people: action.payload };
    case "MOVIES":
      return { ...state, movies: action.payload };
    default:
      return { ...state };
  }
};

export default dashboard;
