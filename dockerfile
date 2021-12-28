FROM node:17.3.0-slim
COPY dist ./blog
WORKDIR /blog/dist
CMD node main