FROM node:8.15.0
LABEL maintainer "support@paladinarcher.com"
EXPOSE 8888

ARG AUTH_PATH="/usr/src/auth"

RUN mkdir -p ${AUTH_PATH}
WORKDIR ${AUTH_PATH}
ADD ./aarc.tar.gz ${AUTH_PATH}
WORKDIR ${AUTH_PATH}/backend
CMD ["npm", "run", "start"]