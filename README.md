# gopro-web-gql-services

GraphQL Apollo Server with TypesScript and Webpack

- Firstly, install the node modules and it's dependencies:

 ```
 nvm use
 make install
 ```
 
 - The project uses dotenv for setting up environment variables which we will use also for configuring our server. In the root directory create a `.env` file with the following contents:
 
 ```
 PORT=4001
APOLLO_INTROSPECTION=true
APOLLO_PLAYGROUND=true
```
 
 - For development you will have to first run the webpack build and then start the server. This uses Webpack to transform and bundle codes written in TypeScript to JavaScript and Webpack Hot Module Replacement(HMR exchanges, adds, or removes modules while an application is running, without a full reload) for speeding up development:
 ```
 make dev_build
 make server
 ```
 The Apollo Playground will be found at `http://localhost:4001/`. You can change the Port in your .env file
 
 
 - For production we will run the webpack production build and then start the server:
 ```
 make prod_build
 make server
 ```
