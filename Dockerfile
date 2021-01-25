FROM node:14.15.4
WORKDIR /app
COPY . . 
RUN npm install -g @angular/cli
RUN npm install
RUN npm install --save @covalent/core
RUN npm install --save @covalent/http @covalent/highlight @covalent/markdown @covalent/dynamic-forms @covalent/echarts
RUN npm install --save @angular/http
RUN npm install --save @angular/material  
RUN npm install --save @angular/cdk
RUN npm i echarts --save
RUN npm i zrender --save
EXPOSE 4200

# start app
CMD ng serve --host 0.0.0.0
