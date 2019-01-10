FROM node:10.15
LABEL maintainer "support@paladinarcher.com"
EXPOSE 8888

ARG AUTH_PATH="/usr/src/auth"

RUN mkdir -p ${AUTH_PATH}
WORKDIR ${AUTH_PATH}
RUN ls -l ${AUTH_PATH}
ADD https://github.com/paladinarcher/aarc/archive/master.zip ${AUTH_PATH}
RUN unzip master.zip
RUN ls -l ${AUTH_PATH}/aarc-master/backend
WORKDIR ${AUTH_PATH}/aarc-master/backend
RUN npm install --production
CMD ["npm", "run", "start"]