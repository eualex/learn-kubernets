FROM node:16-alpine
WORKDIR app
COPY . .
EXPOSE 3333
CMD ["yarn", "start"]
