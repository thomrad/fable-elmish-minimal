module App


open Elmish
open Elmish.React
open Feliz

open Component

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
        prop.className "container"
        prop.children [
            Html.h1 [ 
                prop.className "row display-1" 
                prop.text "The Counter" 
            ]

            Html.div [
                prop.className "d-grid gap-2"
                prop.children [
                    Html.button [
                        prop.type' "button"
                        prop.className "btn btn-primary btn-lg"
                        prop.onClick (fun _ -> dispatch Increment)
                        prop.text "Increment +"
                    ] 

                    Html.button [
                        prop.type' "button"
                        prop.className "btn btn-primary btn-lg"
                        prop.onClick (fun _ -> dispatch Decrement)
                        prop.text "Decrement -"
                    ]   
                ]
            ]
            
            Html.h3 [ 
                prop.className "row" 
                prop.text headerText 
            ]
            
            Html.h3 [
                prop.className "row" 
                prop.text summary
            ]

            Html.hr []

            Html.div [
                prop.children [
                   greeting { Name = Some "Thomas" }
                ]
            ]
        ]
    ]


Program.mkSimple init update render
|> Program.withReactSynchronous "elmish-app"
|> Program.run