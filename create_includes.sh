#!/bin/bash
[ -e includesfile ] && rm ./includesfile
ls -1 backend/*.js >> includesfile
ls -1 backend/package* >> includesfile
ls -1 backend/handlers/* >> includesfile
ls -1 backend/controllers/* >> includesfile
ls -1 backend/models/* >> includesfile
find ./backend/node_modules/ -name '*' -print >> includesfile
ls -1 backend/routes/* >> includesfile
ls -1 backend/util/* >> includesfile
