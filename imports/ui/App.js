import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { withApollo } from 'react-apollo'

import ResolutionForm from './ResolutionForm'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'

const App = ({ loading, resolutions, client }) => {
  if (loading) return null
  return (
    <div>
      <RegisterForm />
      <LoginForm client={client} />
      <ResolutionForm client={client} />
      <button
        onClick={() => {
          Meteor.logout()
          client.resetStore()
        }}>
        Logout
      </button>
      <ul>
        {resolutions.map(resolution => (
          <li key={resolution._id}>{resolution.name}</li>
        ))}
      </ul>
    </div>
  )
}

const resolutionsQuery = gql`
  query Resolutions {
    resolutions {
      _id
      name
    }
  }
`

export default graphql(resolutionsQuery, {
  props: ({ data }) => ({ ...data })
})(withApollo(App))
