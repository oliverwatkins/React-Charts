import dispatcher from "../AppDispatcher.js";


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

export function changeName(newName) {
  dispatcher.dispatch({
    type: "CHANGE_NAME",
    newName,
  });
}

export function changeSliceName(newName) {
    dispatcher.dispatch({
        type: "CHANGE_SLICE_NAME",
        newName,
    });
}
