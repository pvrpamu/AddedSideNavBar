import API from "../api/API";

export const fetchPeople = url => dispatch => {
  API.get(url)
    .then(response => {
      dispatch({
        type: "PEOPLE",
        payload: response.data
      });
    })
    .catch(e => {
      console.log(`😱 Axios request failed: ${e}`);
    });
};

export const fetchMovies = url => dispatch => {
  API.get(url)
    .then(response => {
      dispatch({
        type: "MOVIES",
        payload: response.data
      });
    })
    .catch(e => {
      console.log(`😱 Axios request failed: ${e}`);
    });
};
