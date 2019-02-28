import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";
import { endpoint } from "../config";

const creatClient = ({ headers }) =>
	new ApolloClient({
		url: process.env.NODE_ENV === "develoment" ? endpoint : endpoint,
		request: operation => {
			operation.setContext({
				fetchOptions: {
					credentials: "include"
				},
				headers
			});
		}
	});

export default withApollo(creatClient);
