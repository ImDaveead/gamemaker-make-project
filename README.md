# GameMaker-Make-Project
Generates a blank GameMaker Studio 2 Project.

## Usage
`npm i gamemaker-make-project --save`

Call from js...

```js
const { makeBlankProject } = require("gamemaker-make-project");

// give a path to a non-existant project.
makeBlankProject("new-project/game.yyp").then(() => {
    console.log("Done!");
});
```

... or use typescript.

```ts
import { makeBlankProject } from "gamemaker-make-project";

// give a path to a non-existant project.
makeBlankProject("new-project/game.yyp").then(() => {
    console.log("Done!");
});
```