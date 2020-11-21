module App


open Elmish
open Elmish.React
open Feliz


type State =
    { Count: int
      Sum: int }
    
    
type Msg =
    | Increment
    | Decrement
    
    
let init () =
    { Count = 0
      Sum = 0 }
    
    
let update (msg: Msg) (state: State): State =
    match msg with
    | Increment ->
        { state with Count = state.Count + 1; Sum = state.Sum + 1 }
        
    | Decrement ->
        { state with Count = state.Count - 1; Sum = state.Sum + 1 }
        
        
let render (state: State) (dispatch: Msg -> unit) =
    let headerText = sprintf "Counter at %d" state.Count
    let summary = sprintf "You clicked %d %s" state.Sum (if state.Sum = 1 then "time" else "times") 
    
    Html.div [
        Html.button [
            prop.onClick (fun _ -> dispatch Increment)
            prop.text "Increment"
        ]
        
        Html.button [
            prop.onClick (fun _ -> dispatch Decrement)
            prop.text "Decrement"
        ]
        
        Html.h1 headerText
        Html.h2 summary
    ]


Program.mkSimple init update render
|> Program.withReactSynchronous "elmish-app"
|> Program.run