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

if [[ $IMPORT_API_URL == "" ]]; then
    export IMPORT_API_URL=http://localhost:21800
fi

if [[ $DATASET_API_URL == "" ]]; then
    export DATASET_API_URL=http://localhost:22000
fi

if [[ $DATASET_AUTH_TOKEN == "" ]]; then
    export DATASET_AUTH_TOKEN="Bearer $SERVICE_AUTH_TOKEN"
fi

if [[ $IMPORT_AUTH_TOKEN == "" ]]; then
    export IMPORT_AUTH_TOKEN="Bearer $SERVICE_AUTH_TOKEN"
fi

cypher-shell < ./testdata/hierarchy.cypher

npm run start:chrome:geography

exit

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
