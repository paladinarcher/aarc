#!/bin/bash
API_INCLUDES_FILE=./includesfile_api
[ -e ${API_INCLUDES_FILE} ] && rm -f ${API_INCLUDES_FILE}
ls -1 ./api/*.js >> ${API_INCLUDES_FILE} 
ls -1 ./api/package* >> ${API_INCLUDES_FILE} 
find ./api/handlers/ -type f -name '*' -print >> ${API_INCLUDES_FILE} 
find ./api/controllers/ -type f -name '*' -print >> ${API_INCLUDES_FILE} 
find ./api/models/ -type f -name '*' -print >> ${API_INCLUDES_FILE} 
find ./api/node_modules/ -type f  -name '*' -print >> ${API_INCLUDES_FILE} 
find ./api/routes/ -type f -name '*' -print >> ${API_INCLUDES_FILE} 
find ./api/util/ -type f -name '*' -print >> ${API_INCLUDES_FILE} 

FRONTEND_INCLUDES_FILE=./includesfile_frontend
[ -e ${FRONTEND_INCLUDES_FILE} ] && rm -f ${FRONTEND_INCLUDES_FILE} 
ls -1 ./frontend/package* >> ${FRONTEND_INCLUDES_FILE}
ls -1 ./frontend/app.js >> ${FRONTEND_INCLUDES_FILE}
find ./frontend/node_modules/ -type f  -name '*' -print >> ${FRONTEND_INCLUDES_FILE}
find ./frontend/build/ -type f -name '*' -print >> ${FRONTEND_INCLUDES_FILE} 
