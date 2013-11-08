#!/bin/bash

function buildCssTricksExtension {
    echo "Begin compile...";
    echo "Moving files around...";
    rm -rf ./public;
    mkdir ./public;
    mkdir ./public/app;
    cp -R ./src/images ./public/images
    cp -R ./src/app/templates ./public/app/templates;
    cp -R ./src/bg ./public/bg;

    # Compile requirejs
    echo "Compiling requirejs...";
    node ./build/require/r.js -o ./build/require/build.js;

    # Compile Sass
    echo "Compiling Sass...";
    compass compile ./build/scss/
    echo "Completed successfully!";
}

folder="${PWD##*/}"

if [[ "$folder" == *Tricks* ]]
    then
        buildCssTricksExtension;
    else
        echo 'Error: Please run the script from the root Git repository directory.'
fi