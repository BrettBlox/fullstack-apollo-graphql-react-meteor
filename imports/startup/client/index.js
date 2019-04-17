import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import App from '../../ui/App'

const httpLink = new HttpLink({
  uri: Meteor.absoluteUrl('graphql')
})

Meteor.startup(() => {
  render(<App />, document.getElementById('app'))
})
