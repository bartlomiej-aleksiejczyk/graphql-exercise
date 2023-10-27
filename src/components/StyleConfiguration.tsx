import { PrimeReactProvider } from "primereact/api";
import { ResultContent } from "./ResultContent";
import "primereact/resources/themes/lara-dark-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { TopSearchBar } from "./TopSearchBar";

export const StyleConfiguration = () => {
	return (
		<PrimeReactProvider className="p-0 m-0">
			<>
				<TopSearchBar />
				<ResultContent />
			</>
		</PrimeReactProvider>
	);
};
