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
} from "../actions/types";

const INITIAL_STATE = {
    tableData: [],
    editData: {},
    deleteData: {},
    Loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_TABLE_DATA:
            return { ...state, editData: {}, deleteData: {}, Loading: true };

        case GET_TABLE_DATA_SUCCESS:
            return {
                ...state,
                Loading: false,
                tableData: action.payload,
                editData: {},
                deleteData: {}
            };

        case GET_TABLE_DATA_FAILURE:
            return { ...state, tableData: action.payload, editData: {}, deleteData: {}, Loading: false };

        case EDIT_TABLE_DATA:
            return { ...state, editData: {}, Loading: true };

        case EDIT_TABLE_DATA_SUCCESS:
            return {
                ...state,
                Loading: false,
                editData: action.payload
            };

        case EDIT_TABLE_DATA_FAILURE:
            return { ...state, editData: action.payload, Loading: false };

        case REMOVE_TABLE_DATA:
            return { ...state, deleteData: {}, Loading: true };

        case REMOVE_TABLE_DATA_SUCCESS:
            return {
                ...state,
                Loading: false,
                deleteData: action.payload
            };

        case REMOVE_TABLE_DATA_FAILURE:
            return { ...state, deleteData: action.payload, Loading: false };

        default:
            return { ...state };
    }
};