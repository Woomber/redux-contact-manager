import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT
} from "./types";
import axios from "axios";

const apiurl = "https://jsonplaceholder.typicode.com/users";

export const getContacts = () => async dispatch => {
  let res = await axios.get(apiurl);

  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
};

export const getContact = id => async dispatch => {
  let res = await axios.get(`${apiurl}/${id}`);

  dispatch({
    type: GET_CONTACT,
    payload: res.data
  });
};

export const deleteContact = id => async dispatch => {
  try {
    await axios.delete(`${apiurl}/${id}`);
  } catch (ex) {
    console.log("Eliminado contacto no api");
  } finally {
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  }
};

export const addContact = contact => async dispatch => {
  const res = await axios.post(apiurl, contact);

  dispatch({
    type: ADD_CONTACT,
    payload: res.data
  });
};

export const updateContact = contact => async dispatch => {
  const res = await axios.put(`${apiurl}/${contact.id}`, contact);

  dispatch({
    type: UPDATE_CONTACT,
    payload: res.data
  });
};
