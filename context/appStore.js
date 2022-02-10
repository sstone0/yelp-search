import { createContext, useReducer } from "react";
import appReducer from "./reducer";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const appState = {
    businesses: [],
    term: "",
    location: "New York",
    sortBy: "best_match",
    loading: false,
  };

  const [state, dispatch] = useReducer(appReducer, appState);

  const searchYelp = async (term, location, sortBy) => {
    console.log(sortBy);
    try {
      const res = await fetch(
        `/api/search?term=${term}&location=${location}&sort_by=${sortBy}`
      );
      const data = await res.json();
      dispatch({
        type: "SEARCH_YELP",
        payload: data,
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  const setTermParameters = (params) => {
    const terms = {
      term: params.term ? params.term : appState.term,
      location: params.location ? params.location : appState.location,
      sortBy: params.sortBy ? params.sortBy : appState.sortBy,
    };

    dispatch({
      type: "SET_PARAMETERS",
      payload: terms,
    });
  };

  const clearBusinesses = () => dispatch({ type: "CLEAR_BUSINESSES" });

  return (
    <AppContext.Provider
      value={{
        businesses: state.businesses,
        term: state.term,
        location: state.location,
        sortBy: state.sortBy,
        searchYelp,
        setTermParameters,
        clearBusinesses,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
