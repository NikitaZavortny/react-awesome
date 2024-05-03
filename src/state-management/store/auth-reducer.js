export const defState = {
    token : ""
};


//this is basic reducer
export const TokenReducer = (state = defState, action) => {
    switch (action.type) {
        case Add: return { ...state, token: action.payload }
        default: return state;
    }
};

//actions
export const setToken = (payload) => ({ type: setToken, payload: payload });