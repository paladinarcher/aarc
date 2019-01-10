FROM node:10.15
LABEL maintainer "support@paladinarcher.com"
EXPOSE 8080

ARG AUTH_PATH="/usr/src/auth"

RUN mkdir -p ${AUTH_PATH}
WORKDIR ${AUTH_PATH}
ADD https://github.com/paladinarcher/authapi.git
WORKDIR ${AUTH_PATH}/authapi/backend
RUN npm install --production
CMD ["npm", "run", "start"]