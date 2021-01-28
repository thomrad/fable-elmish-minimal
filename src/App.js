import { Union, Record } from "./.fable/fable-library.3.1.2/Types.js";
import { union_type, record_type, int32_type } from "./.fable/fable-library.3.1.2/Reflection.js";
import { printf, toText } from "./.fable/fable-library.3.1.2/String.js";
import { createElement } from "react";
import { reactApi } from "./.fable/Feliz.1.31.1/Interop.fs.js";
import { Greeting, greeting } from "./Component.js";
import { ProgramModule_mkSimple, ProgramModule_run } from "./.fable/Fable.Elmish.3.0.0/program.fs.js";
import { Program_withReactSynchronous } from "./.fable/Fable.Elmish.React.3.0.1/react.fs.js";

export class State extends Record {
    constructor(Count, Sum) {
        super();
        this.Count = (Count | 0);
        this.Sum = (Sum | 0);
    }
}

export function State$reflection() {
    return record_type("App.State", [], State, () => [["Count", int32_type], ["Sum", int32_type]]);
}

export class Msg extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Increment", "Decrement"];
    }
}

export function Msg$reflection() {
    return union_type("App.Msg", [], Msg, () => [[], []]);
}

export function init() {
    return new State(0, 0);
}

export function update(msg, state) {
    if (msg.tag === 1) {
        return new State(state.Count - 1, state.Sum + 1);
    }
    else {
        return new State(state.Count + 1, state.Sum + 1);
    }
}

export function render(state, dispatch) {
    const headerText = toText(printf("Counter at %d"))(state.Count);
    let summary;
    const arg20 = (state.Sum === 1) ? "time" : "times";
    summary = toText(printf("You clicked %d %s"))(state.Sum)(arg20);
    return createElement("div", {
        className: "container",
        children: reactApi.Children.toArray([createElement("h1", {
            className: "row display-1",
            children: "The Counter",
        }), createElement("div", {
            className: "d-grid gap-2",
            children: reactApi.Children.toArray([createElement("button", {
                type: "button",
                className: "btn btn-primary btn-lg",
                onClick: (_arg1) => {
                    dispatch(new Msg(0));
                },
                children: "Increment +",
            }), createElement("button", {
                type: "button",
                className: "btn btn-primary btn-lg",
                onClick: (_arg2) => {
                    dispatch(new Msg(1));
                },
                children: "Decrement -",
            })]),
        }), createElement("h3", {
            className: "row",
            children: headerText,
        }), createElement("h3", {
            className: "row",
            children: summary,
        }), createElement("hr", {}), createElement("div", {
            children: reactApi.Children.toArray([createElement(greeting, new Greeting("Thomas"))]),
        })]),
    });
}

ProgramModule_run(Program_withReactSynchronous("elmish-app", ProgramModule_mkSimple(init, update, render)));

//# sourceMappingURL=App.js.map
