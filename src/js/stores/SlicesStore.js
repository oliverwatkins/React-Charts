import { EventEmitter } from "events";

import dispatcher from "../AppDispatcher.js";


class SlicesStore extends EventEmitter {
    constructor() {
        super()
        this.chartName = "fiddlesticks"
        this.slices = [
            {
                name: "First SliceASDF",
                value: 12,
                color: "#123123"
            },
            {
                name: "Second SliceFGFG",
                value: 15,
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

    changeName(txt) {
        this.chartName = txt;
        this.emit("change");
    }

    getChartName(txt) {
        return this.chartName;
    }


    getAllSlices() {
        return this.slices;
    }

    getChartData() {

        // [{name: 'Group A', value: 400},

        return this.slices;

        // return this.slices;
    }


    handleActions(action) {
        switch(action.type) {
            case "CREATE_SLICE": {
                this.createSlice(action.text);
                this.emit("change");
                break;
            }
            case "CHANGE_SLICE_NAME": {
                this.changeName(action.newName);
                this.emit("change");
                break;
            }
        }
    }
}

const sStore = new SlicesStore();
dispatcher.register(sStore.handleActions.bind(sStore));

export default sStore;
