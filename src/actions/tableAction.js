import {
  GET_TABLE_DATA,
  GET_TABLE_DATA_SUCCESS,
  GET_TABLE_DATA_FAILURE,
  
  EDIT_TABLE_DATA,
  EDIT_TABLE_DATA_SUCCESS,
  EDIT_TABLE_DATA_FAILURE,

  REMOVE_TABLE_DATA,
  REMOVE_TABLE_DATA_SUCCESS,
  REMOVE_TABLE_DATA_FAILURE
} from "./types";

export const getTableData = () => ({
  type: GET_TABLE_DATA
});

export const getTableDataSuccess = response => ({
  type: GET_TABLE_DATA_SUCCESS,
  payload: response
});

export const getTableDataFailure = error => ({
  type: GET_TABLE_DATA_FAILURE,
  payload: error
});

export const editTableData = request => ({
  type: EDIT_TABLE_DATA,
  payload: request
});

export const editTableDataSuccess = response => ({
  type: EDIT_TABLE_DATA_SUCCESS,
  payload: response
});

export const editTableDataFailure = error => ({
  type: EDIT_TABLE_DATA_FAILURE,
  payload: error
});


export const removeTableData = request => ({
  type: REMOVE_TABLE_DATA,
  payload: request
});

export const removeTableDataSuccess = response => ({
  type: REMOVE_TABLE_DATA_SUCCESS,
  payload: response
});

export const removeTableDataFailure = error => ({
  type: REMOVE_TABLE_DATA_FAILURE,
  payload: error
});