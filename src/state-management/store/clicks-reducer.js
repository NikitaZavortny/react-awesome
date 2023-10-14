//store
const defstate = {
    clicks: 0,
};

//action names
const Add = "Add"
const Remove = "Remove"
export const AddSaga = "AddSaga"
export const RemoveSaga = "RemoveSaga"

//this is basic reducer
export const ClickReducer = (state = defstate, action) => {
    switch (action.type) {
        case Add: return { ...state, clicks: state.clicks + action.payload }
        case Remove: return { ...state, clicks: state.clicks - action.payload }
        default: return state;
    }
};

//actions
export const addClickAction = (payload) =>({type: Add, payload: payload});
export const removeClickAction = (payload) => ({ type: Remove, payload: payload });


export const SagaAddClickAction = (payload) => ({ type: "AddSaga", payload: payload });//action for redux-saga
export const SagaRemoveClickAction = (payload) => ({ type: RemoveSaga, payload: payload });//action for redux-saga