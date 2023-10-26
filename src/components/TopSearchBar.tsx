import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export const TopSearchBar = () => {
	const [value, setValue] = React.useState("");

	const handleSearch = () => {
		console.log("Search Value:", value);
	};

	return (
		<div className="flex p-3 gap-3 w-full fixed bg-blue-800 z-50 justify-center">
		<span className="p-float-label p-mr-2">
			<InputText id="search-input place " value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search" />
		</span>
			<Button icon="pi pi-search" className="p-button-rounded p-button-success" onClick={handleSearch} />
		</div>
	);
};
