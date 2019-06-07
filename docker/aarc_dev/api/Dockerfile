FROM node:8.15.0
LABEL maintainer "support@paladinarcher.com"

ARG AUTH_PATH="/usr/src/aarc"

WORKDIR ${AUTH_PATH}/api
RUN ls
RUN npm i -g nodemon
CMD ["npm", "run", "dev"]
