import { settings } from 'settings'
import { ApolloClient, InMemoryCache } from '@apollo/client'

export const make = () => new ApolloClient({
  uri: settings().backend.graphUrl,
  cache: new InMemoryCache(),
})
