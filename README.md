[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/thomrad/fable-elmish-minimal)

# Fable Elmish Minimal

Minimal setup for Fable/Elmish using Feliz/Elmish React

Requirements

- [.NET Core SDK](https://www.microsoft.com/net/download) 5.0+
- [Fable 3](https://www.nuget.org/packages/Fable/)
- [Node.js](https://nodejs.org/en/) 10.0+

## Installation

To compile the project, run the following commands

```powershell
dotnet tool install --global Fable
npm install
fable .\src\ --outDir .\public\
```

`dotnet tool install --global Fable` will install the latest version of Fable compiler as a .NET Tool.

`npm install` will install dependencies from [npm](https://www.npmjs.com/) which is the Node.js equivalent of dotnet's Nuget registry. These dependencies include the Fable compiler itself as it is distributed to npm to make compilation workflow as simple as possible.

`fable .\src\ --outDir .\public\` will then start building the project by.

After `fable .\src\ --outDir .\public\` finished running, the generated javascript will be bundled in a single file called `App.js` located in the `public` directory along with an existing `index.html` page that references that script file.

## Development mode

While developing the application, you don't want to recompile the application every time you make a change. Instead of that, you can start the compilation process in development mode which will watch changes you make in the file and re-compile automatically really fast:

```powershell
dotnet tool install --global Fable
npm install
fable watch .\src\ --outDir .\public\ --run npm start
```

If you already ran `npm install` then you don't need to run it again. `fable watch .\src\ --outDir .\public\ --run npm start` will start the developement mode by invoking `webpack-dev-server`: the webpack development server that starts a lightweight local server at [http://localhost:8080](http://localhost:8080) from which the server will serve the client application
