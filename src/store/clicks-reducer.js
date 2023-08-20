const defstate = {
    clicks: 0,
};

const Add = "Add"
const Remove = "Remove"

export const ClickReducer = (state = defstate, action) => {
    switch (action.type) {
        case Add: return { ...state, clicks: state.clicks + action.payload }
        case Remove: return { ...state, clicks: state.clicks - action.payload }
        default: return state;
    }
};

export const addClickAction = (payload) =>({type: Add, payload: payload});
export const removeClickAction = (payload) => ({ type: Remove, payload: payload });