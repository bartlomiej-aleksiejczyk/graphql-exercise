import { Card } from "primereact/card";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { Fieldset } from "primereact/fieldset";
import { ScrollPanel } from "primereact/scrollpanel";

const GET_ANIME = gql`
  query {
    Page(page: 1, perPage: 10) {
      media(type: ANIME sort: [START_DATE] popularity_greater: 100000) {
        coverImage {
        medium
        }
        description(asHtml: true)
        id
        season
        title {
          romaji
        }
      }
    }
  }
`;

export const MainContent = () => {
	const { loading, error, data } = useQuery(GET_ANIME);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;
	return (
		<>
			<h1>Anilist Anime</h1>
			<div className="flex-column flex-wrap justify-content-start gap-4 column-gap-7">
				{data.Page.media.map(anime => (
					<Fieldset className="m-1 xl:m-5 lg:m-4 md:m-3 sm:m-2" key={anime.id} legend={anime.title.romaji}>
						<div className="flex xl:gap-6 lg:gap-4 md:gap-2 gap-1">
							<img className="w-auto h-10rem border-round-xl" src={anime.coverImage.medium} alt="Anime's cover" />
							<Card className="bg-primary-900">
								<ScrollPanel className="max-h-12rem">
									<div dangerouslySetInnerHTML={{ __html: anime.description }} />
								</ScrollPanel>
							</Card>
						</div>
					</Fieldset>
				))}
			</div>
		</>);
};
