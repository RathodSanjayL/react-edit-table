import { all, fork, put, takeEvery } from "redux-saga/effects";

import { GET_TABLE_DATA,EDIT_TABLE_DATA,REMOVE_TABLE_DATA } from "../actions/types";

// import functions from action
import {
    getTableDataSuccess,
    getTableDataFailure,
    editTableDataSuccess,
    editTableDataFailure,
    removeTableDataSuccess,
    removeTableDataFailure
} from "../actions/tableAction";

const data = [
    {
        firstName: "Sanjay",
        lastName: "Rathod",
        username: "sanjay_rathod",
        email: "sanjay@test.com",
        passsword: "yJG2MuL5piY"
    },
    {
        firstName: "Nayan",
        lastName: "Boghani",
        username: "nayan_007",
        email: "test@nayan.com",
        passsword: "S7p9ReUoQe"
    },
    {
        firstName: "Kevin",
        lastName: "Ladani",
        username: "kevin_ladani",
        email: "kevin@KL.com",
        passsword: "MWU9hc"
    },
    {
        firstName: "Raj",
        lastName: "Kangad",
        username: "rk_123",
        email: "test@test.com",
        passsword: "kRtWP1"
    },
    {
        firstName: "Saloni",
        lastName: "Rathod",
        username: "saloni_ra",
        email: "sr@sr.com",
        passsword: "o78ibUPPmDlZ"
    },
    {
        firstName: "Karan",
        lastName: "Joshi",
        username: "KJ_React",
        email: "test@test12.com",
        passsword: "g2jd4AwfpA"
    },
    {
        firstName: "Nirav",
        lastName: "Sav",
        username: "sav_nir",
        email: "sav@nir.edu",
        passsword: "GAsgPpKvJx"
    }
]

const responceSuccess = {
    "ReturnCode" : 0,
    "ReturnMessage" : "Data Edit Successfully"
}

const responceDeleteSuccess = {
    "ReturnCode" : 0,
    "ReturnMessage" : "Data Delete Successfully"
}

function* getTableDataRequest() {
    try {
        yield put(getTableDataSuccess(data));
    } catch (error) {
        yield put(getTableDataFailure(error));
    }
}

function* editTableDataRequest(payload) {
    try {
        yield put(editTableDataSuccess(responceSuccess));
    } catch (error) {
        yield put(editTableDataFailure(error));
    }
}


function* deleteTableDataRequest(payload) {
    try {
        yield put(removeTableDataSuccess(responceDeleteSuccess));
    } catch (error) {
        yield put(removeTableDataFailure(error));
    }
}

function* getTableData() {
    yield takeEvery(GET_TABLE_DATA, getTableDataRequest);
}

function* editTableData() {
    yield takeEvery(EDIT_TABLE_DATA, editTableDataRequest);
}

function* deleteTableData() {
    yield takeEvery(REMOVE_TABLE_DATA, deleteTableDataRequest);
}

export default function* rootSaga() {
    yield all([
        fork(getTableData),
        fork(editTableData),
        fork(deleteTableData)
    ]);
}