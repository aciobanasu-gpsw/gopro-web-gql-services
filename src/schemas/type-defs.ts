import { gql } from 'apollo-server';

export default gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  # This "Camera" type defines the queryable fields for every book in our data source.

  type Camera {
    title: String
    description: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "cameras" query returns an array of zero or more Cameras (defined above).

  type Query {
    cameras: [Camera]
  }
`;