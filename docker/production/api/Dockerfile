FROM node:8.15.0
LABEL maintainer "support@paladinarcher.com"

ARG AUTH_PATH="/usr/src/aarc"

RUN mkdir -p ${AUTH_PATH}
WORKDIR ${AUTH_PATH}
ADD ./aarc.api.tar.gz ${AUTH_PATH}
WORKDIR ${AUTH_PATH}/api
COPY ./variables.env .
RUN ls
CMD ["npm", "run", "start"]