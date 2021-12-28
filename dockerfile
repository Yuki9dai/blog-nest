FROM node:17.3.0-slim
COPY . ./blog
WORKDIR /blog/dist
CMD node main