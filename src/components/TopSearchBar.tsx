import { popularityGreaterVar, searchValueVar } from "../shared/apollo/searchValues";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useState } from "react";
import { InputNumber } from "primereact/inputnumber";

export const TopSearchBar = () => {
	const [searchWord, setSearchWord] = useState<string>(searchValueVar())
	const [popularityGreater, setPopularityGreater] = useState<number>(popularityGreaterVar())

	const handleSearch = () => {
		searchWord ? searchValueVar(searchWord) : searchValueVar(undefined);
		popularityGreater ? popularityGreaterVar(popularityGreater) : popularityGreaterVar(undefined);
	};
	return (
		<div className="flex p-3 gap-3 w-full fixed bg-blue-800 z-50 justify-center">
			<InputNumber value={popularityGreater} onValueChange={(e) => setPopularityGreater(e.value)} placeholder="Popularity Greater Than"/>
			<InputText id="search-input place" value={searchWord} onChange={(e) => (setSearchWord(e.target.value))} placeholder="Search" />
			<Button unstyled={true} icon="pi pi-search" className="p-button-rounded p-button-success" onClick={handleSearch}  />
		</div>
	);
};
