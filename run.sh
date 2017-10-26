#!/bin/bash

usage()  {
    echo "-c [run tests on chrome (default) ], -f [run tests on firefox], -s [run tests on safari], -i [install]"; exit 1;
}

if [[ $ROUTER_URL == "" ]]; then
    export ROUTER_URL=http://localhost:20000
fi

if [[ $MONGODB_URL == "" ]]; then
    export MONGODB_URL=mongodb://localhost:27017
fi

if [[ $FLORENCE_URL == "" ]]; then
    export FLORENCE_URL=http://localhost:8081
fi

case "$1" in
    -f)
        npm run start:firefox
        ;;
    -s)
        npm run start:safari
        ;;
    -h)
        usage
        ;;
    -i)
        npm install
        ;;
    *) 
        npm run start:chrome
        ;;
esac
