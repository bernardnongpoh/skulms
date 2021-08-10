FROM node:lts-alpine3.14
WORKDIR /code
ENV PORT 80
COPY package.json /code/package.json
COPY . /code
RUN yarn postinstall-fix
RUN yarn install
RUN yarn build
ENTRYPOINT ["yarn", "run"]
