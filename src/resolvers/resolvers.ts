import cameras from '../data/dataMock';

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves cameras from the "cameras" array above.
export default {
  Query: {
    cameras: () => cameras,
  },
};