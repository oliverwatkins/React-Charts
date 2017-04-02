import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class SlicesStore extends EventEmitter {
    constructor() {
        super()
        this.slices = [
            {
                name: "First Slice",
                percent: 12,
                color: "#123123"
            },
            {
                name: "Second Slice",
                percent: 15,
                color: "#423443"
            },
        ];
    }

    createTodo(text) {
        const id = Date.now();

        this.todos.push({
            id,
            text,
            complete: false,
        });

        this.emit("change");
    }

    getAll() {
        return this.todos;
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
        }
    }

}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;
