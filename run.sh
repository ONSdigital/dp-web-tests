#!/bin/bash

usage()  {
    echo "-c [run tests on chrome (default) ], -f [run tests on firefox], -s [run tests on safari]"; exit 1;
}

case "$1" in
    -f)
        npm run start:firefox
        ;;
    -s)
        npm run start:safari
        ;;
    *) 
        npm run start:chrome
        npm run start:chrome-florence
        ;;
esac