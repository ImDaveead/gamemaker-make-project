#!/usr/bin/env node
import { makeBlankProject } from ".";
import { basename, join, resolve } from "path";

// Handles creating projects from the command line
// this is the entry point.
const args = process.argv;

let path = args[2];

if(!path) {
    console.log("Usage: gamemaker-make-project <path to target folder or yyp>");
    process.exit(1);
}

path = resolve(path);

if (!path.endsWith(".yyp")) path = join(path, basename(path) + ".yyp");

console.log("Generating project at " + path);

makeBlankProject(path).then(() => {
    console.log("Finished.\n  Remember that not all metadata is generated at this point, make sure you open this in the IDE at least once before doing anything with it.");
});
