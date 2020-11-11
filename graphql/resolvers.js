import { people } from '../db';
import { getMovies } from '../api';
const resolvers = {
  Query: {
    people: () => people,
    peopleById: (_, params) => people[params.id],
    movies: (_, { limit, rating }) => getMovies(limit, rating),
  },
  Mutation: {
    addPeople: (_, { name, age, gender }) => {
      const newPeople = { id: people[people.length - 1].id + 1, name, age, gender };
      people.push(newPeople);
      return newPeople;
    },
  },
};
export default resolvers;
