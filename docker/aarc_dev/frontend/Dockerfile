FROM node:8.15.0
LABEL maintainer "support@paladinarcher.com"

ARG AUTH_PATH="/usr/src/aarc"

COPY ./entrypoint.sh /
RUN chmod 755 /entrypoint.sh
WORKDIR ${AUTH_PATH}/frontend
ENTRYPOINT ["/entrypoint.sh"]
