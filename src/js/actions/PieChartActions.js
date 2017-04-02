import dispatcher from "../dispatcher";

export function createSlice(text) {
    dispatcher.dispatch({
        type: "CREATE_SLICE",
        text,
    });
}

export function deleteSlice(id) {
    dispatcher.dispatch({
        type: "DELETE_SLICE",
        id,
    });
}


export function changeSliceName(id) {
    dispatcher.dispatch({
        type: "CHANGE_SLICE_NAME",
        id,
    });
}
