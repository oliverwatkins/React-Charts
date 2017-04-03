import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class SlicesStore extends EventEmitter {
    constructor() {
        super()
        this.slices = [
            {
                name: "First SliceASDF",
                percent: 12,
                color: "#123123"
            },
            {
                name: "Second SliceFGFG",
                percent: 15,
                color: "#423443"
            },
        ];
    }

    createSlice(slice) {
        this.slices.push(
            slice
        );
        this.emit("change");
    }

    getAll() {
        return this.slices;
    }

    handleActions(action) {
        switch(action.type) {
            case "CREATE_TODO": {
                this.createTodo(action.text);
                break;
            }
            case "RECEIVE_TODOS": {
                this.todos = action.todos;
                this.emit("change");
                break;
            }
            case "CREATE_SLICE": {
                // alert('yo in here')
                // this.todos = action.todos;


                this.createSlice(action.text);
                this.emit("change");
                break;
            }
        }
    }

}

const sStore = new SlicesStore();
dispatcher.register(sStore.handleActions.bind(sStore));

export default sStore;
