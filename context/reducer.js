export default function appReducer(state, action) {
  switch (action.type) {
    case "SEARCH_YELP":
      return {
        ...state,
        businesses: [...action.payload.businesses],
        loading: false,
      };
    case "CLEAR_BUSINESSES":
      return {
        ...state,
        businesses: [],
        loading: false,
        term: "",
        location: "",
        sortBy: "best_match",
      };
    case "SET_PARAMETERS":
      return {
        ...state,
        term: action.payload.term,
        location: action.payload.location,
        sortBy: action.payload.sortBy,
      };
    default:
      return state;
  }
}
