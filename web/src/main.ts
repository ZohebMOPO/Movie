import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import Vue, { createApp } from "vue";
import App from "./App.vue";
import VueApollo from "vue-apollo";

createApp(App).use(VueApollo as any);

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "http://localhost:4000/graphql",
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});
