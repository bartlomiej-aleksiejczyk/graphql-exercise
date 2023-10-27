import { Card } from "primereact/card";
import gql from "graphql-tag";
import { useQuery, useReactiveVar } from "@apollo/client";
import { Fieldset } from "primereact/fieldset";
import { ScrollPanel } from "primereact/scrollpanel";
import { popularityGreaterVar, searchValueVar } from "../shared/apollo/searchValues";

const GET_ANIME = gql`
query GetAnime($searchValue: String, $popularityGreater: Int) {
    Page(page: 1, perPage: 10) {
      media(
        type: ANIME, 
        search: $searchValue
        sort: [START_DATE], 
        popularity_greater: $popularityGreater
      ) {
        coverImage {
          medium 
        }
        description
        parsedDescription @client
        id
        season
        title {
          romaji
        }
      }
    }
  }
`;

export const ResultContent = () => {
	const searchValue = useReactiveVar<string>(searchValueVar);
	const popularityGreater = useReactiveVar<number>(popularityGreaterVar)
	const { loading, error, data } = useQuery(GET_ANIME, {
		variables: { searchValue: searchValue, popularityGreater: popularityGreater }
	});
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;
	return (
		<div className="pt-20 md:pt-28 text-center xl:mx-24 lg:mx-16 md:mx-12 sm:mx-8">
			<h1 className="text-4xl">Anilist Anime</h1>
			<div className="flex-column flex-wrap justify-content-start gap-4 column-gap-7">
				{data.Page.media.length > 0 ?
				data.Page.media.map(anime => (
					<Fieldset className="m-1 xl:m-6 lg:m-4 md:m-3 sm:m-2" key={anime.id} legend={anime.title.romaji}>
						<div className="flex xl:gap-6 lg:gap-4 md:gap-2 gap-1 justify-center">
							<img className="w-auto h-60 border-round-xl " src={anime.coverImage.medium} alt="Anime's cover" />
							<Card className="bg-primary-800 hidden sm:block ">
								<ScrollPanel className="max-h-[12rem] pr-2 z-45">
									{anime.parsedDescription?.map(paragraph => (
									<span>{paragraph}</span>))}
								</ScrollPanel>
							</Card>
						</div>
					</Fieldset>
				)) : <p>No results for such a query</p>}
			</div>
		</div>);
};
