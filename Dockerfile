# Multi-stage build
FROM node:alpine3.17 as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build


FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
# Keep nginx in foregound
CMD ["nginx", "-g", "daemon off;"]
