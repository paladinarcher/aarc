FROM node:8.15.0
LABEL maintainer "support@paladinarcher.com"
EXPOSE 80

ARG AUTH_PATH="/usr/src/aarc"

RUN mkdir -p ${AUTH_PATH}
WORKDIR ${AUTH_PATH}
ADD ./${FRONTEND_TAR_FILE} ${AUTH_PATH}
WORKDIR ${AUTH_PATH}/frontend
CMD ["npm", "run", "server"]