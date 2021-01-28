import { Record } from "./.fable/fable-library.3.1.2/Types.js";
import { record_type, option_type, string_type } from "./.fable/fable-library.3.1.2/Reflection.js";
import { createElement } from "react";
import { defaultArg } from "./.fable/fable-library.3.1.2/Option.js";
import { ofArray } from "./.fable/fable-library.3.1.2/List.js";
import { reactApi } from "./.fable/Feliz.1.31.1/Interop.fs.js";

export class Greeting extends Record {
    constructor(Name) {
        super();
        this.Name = Name;
    }
}

export function Greeting$reflection() {
    return record_type("Component.Greeting", [], Greeting, () => [["Name", option_type(string_type)]]);
}

export function greeting(props) {
    let value_1;
    const children = ofArray([createElement("span", {
        children: ["Hello, "],
    }), (value_1 = defaultArg(props.Name, "World"), createElement("span", {
        children: [value_1],
    }))]);
    return createElement("div", {
        children: reactApi.Children.toArray(Array.from(children)),
    });
}

