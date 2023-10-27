import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { apolloClient } from "./shared/apollo/apolloClient";
import { ApolloProvider } from "@apollo/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ApolloProvider client={apolloClient}>
			<App />
		</ApolloProvider>
	</React.StrictMode>
);
