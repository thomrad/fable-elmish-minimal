module Component

open Feliz

type Greeting = { Name: string option }

[<ReactComponent>]
let greeting (props: Greeting) = //React.functionComponent(fun (props: Greeting) ->
    Html.div [
        Html.span "Hello, "
        Html.span (Option.defaultValue "World" props.Name)
    ]