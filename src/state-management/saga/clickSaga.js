import { put, takeEvery } from "redux-saga/effects"
import { addClickAction, removeClickAction, AddSaga, RemoveSaga } from "../store/clicks-reducer"

const delay = (ms) => new Promise(res => setTimeout(res, ms))

//saga workers
function* incrementClicksWorker() {
    yield delay(1000)
    yield put(addClickAction(2));
}

function* decrementClicksWorker() {
    yield delay(1000)
    yield put(removeClickAction(2));
}

//saga watcher
export function* clicksWatcher() {
    yield takeEvery(AddSaga, incrementClicksWorker);
    yield takeEvery(RemoveSaga, decrementClicksWorker);    
}