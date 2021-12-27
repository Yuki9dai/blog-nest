FROM node:15.10.0-slim
COPY . ./blog
WORKDIR /blog/dist
CMD node main