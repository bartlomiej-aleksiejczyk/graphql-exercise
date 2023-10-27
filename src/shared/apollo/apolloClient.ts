import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { parseDescriptionToArray } from "../utils/sanitizeHtmltoParagraphs";

const link = new HttpLink({
	uri: "https://graphql.anilist.co"
});
const cache = new InMemoryCache({
	typePolicies: {
		Media: {
			fields: {
				parsedDescription(existingParsedDescription, { readField }) {
					if (existingParsedDescription) {
						return existingParsedDescription;
					}
					const description = readField("description");
					if (description) {
						const parsed = parseDescriptionToArray(description);
						return parsed;
					}
					return ["no desc", "second"];
				}
			}
		}
	}
});
export const apolloClient = new ApolloClient({
	link,
	cache: cache
});
