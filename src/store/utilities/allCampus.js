const axios = require("axios");
const FETCH_CAMPUS = "FETCH_CAMPUS";
const DELETE_CAMPUS = "DELETE_CAMPUS";
const ADD_CAMPUS = "ADD_CAMPUS";
const EDIT_CAMPUS = "EDIT_CAMPUS";

const fetchAllCampus = campus => {
  return {
    type: FETCH_CAMPUS,
    payload: campus
  };
};

const removeCampus = id => {
  console.log(id);
  return {
    type: DELETE_CAMPUS,
    payload: id
  };
};

const addCampus = arr => {
  return {
    type: ADD_CAMPUS,
    payload: arr
  };
};

const editCampus = arr => {
  return {
    type: EDIT_CAMPUS,
    payload: arr
  };
};

export const deleteCampusThunk = id => async dispatch => {
  try {
    await axios.delete(
      `https://campus-manager-api.herokuapp.com/campuses/${id}`
    );
    dispatch(removeCampus(id));
  } catch (err) {
    console.log(err);
  }
};

export const addCampusThunk = arr => async dispatch => {
  try {
    let { data } = await axios.post(
      "https://campus-manager-api.herokuapp.com/campuses",
      arr
    );
    let campus = await data;
    dispatch(addCampus(campus));
    console.log(data);
  } catch (err) {
    console.log(err);
  }
  //   dispatch(addCampus(arr));
};

export const fetchAllCampusThunk = () => async dispatch => {
  try {
    let data = await axios.get(
      "https://campus-manager-api.herokuapp.com/campuses"
    );
    dispatch(fetchAllCampus(data.data));
    console.log(data.data);
  } catch (err) {
    console.log(err);
  }
};

export const editCampusThunk = (id, arr) => async dispatch => {
  try {
    let data = await axios.put(
      `https://campus-manager-api.herokuapp.com/campuses/${id}`,
      arr
    );
    dispatch(editCampus(arr));
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_CAMPUS:
      return action.payload;
    case DELETE_CAMPUS:
      return state.filter(item => item.id !== action.payload);
    case ADD_CAMPUS:
      return [...state, action.payload];
    case EDIT_CAMPUS:
      return [
        ...state.filter(item => item.id !== action.payload.id),
        action.payload
      ];
    default:
      return state;
  }
};
