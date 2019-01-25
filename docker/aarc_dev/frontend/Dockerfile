FROM node:8.15.0
LABEL maintainer "support@paladinarcher.com"

ARG AUTH_PATH="/usr/src/aarc"

WORKDIR ${AUTH_PATH}/frontend
COPY ./entrypoint.sh .
RUN chmod 755 entrypoint.sh
RUN ls && pwd
RUN file /usr/src/aarc/frontend/entrypoint.sh
ENTRYPOINT ["/usr/src/aarc/frontend/entrypoint.sh"]
