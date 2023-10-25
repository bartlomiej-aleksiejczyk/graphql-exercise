import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const link = new HttpLink({
	uri: 'https://graphql.anilist.co'
});

export const apolloClient = new ApolloClient({
	link,
	cache: new InMemoryCache()
});
