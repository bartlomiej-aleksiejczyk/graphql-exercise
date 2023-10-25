import { PrimeReactProvider } from "primereact/api";
import { MainContent } from "./MainContent";
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css"
import "./index.css"


export const StyleConfiguration = () => {
	return (
		<PrimeReactProvider>
			<MainContent />
		</PrimeReactProvider>
	);
};