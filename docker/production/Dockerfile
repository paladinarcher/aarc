FROM node:10.15
LABEL maintainer "support@paladinarcher.com"
EXPOSE 8888

ARG AUTH_PATH="/usr/src/auth"

RUN mkdir -p ${AUTH_PATH}
WORKDIR ${AUTH_PATH}
ADD . ${AUTH_PATH}
WORKDIR ${AUTH_PATH}/aarc/backend
RUN npm install --production
CMD ["npm", "run", "start"]