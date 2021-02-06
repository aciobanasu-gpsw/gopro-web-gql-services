import { ApolloServer } from 'apollo-server';

import { environment } from './utils/environment';
import resolvers from './resolvers/resolvers';
import typeDefs from './schemas/type-defs';

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  resolvers,
  typeDefs,
  introspection: environment.apollo.introspection,
  playground: environment.apollo.playground
});

// The `listen` method launches a web server.
server.listen(environment.port)
  .then(({ url }) => console.log(`🚀  Server ready at ${url}`));

// Hot Module Replacement(Webpack HMR) for Development
if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.stop());
}