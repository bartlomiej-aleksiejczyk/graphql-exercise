import { searchValueVar } from "../shared/apollo/searchValues";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useState } from "react";

export const TopSearchBar = () => {
	const [searchWord, setSearchWord] = useState<string>(searchValueVar())

	const handleSearch = () => {
		searchValueVar(searchWord);
	};
	return (
		<div className="flex p-3 gap-3 w-full fixed bg-blue-800 z-50 justify-center">
			<InputText id="search-input place" value={searchWord} onChange={(e) => (setSearchWord(e.target.value))} placeholder="Search" />
			<Button icon="pi pi-search" className="p-button-rounded p-button-success" onClick={handleSearch} />
		</div>
	);
};
