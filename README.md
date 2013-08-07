prompt
======

## Plain HTML and SASS
Prompt is plain html, but built with hammerformac.com. Which allows for includes and variables to speed up development.

## Structure of folders
All the templates are in the prompt-templates folder. The base files are used by hammer, it compiles the SCSS files, the _includes directory, and the variables in the html files and out puts them into the Build folder.

## index.html => index.php
Because EY Cloud for PHP requires that the base file have a .php extension, the index.html file in the Build folder needs to be changed index.php

## Changes without Hammer
It's best to just alter the files within the Build folder and document changes, so the Hammer files can be changed

