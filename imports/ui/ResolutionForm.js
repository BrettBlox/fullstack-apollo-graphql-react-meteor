import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const createResolution = gql`
  mutation createResolution($name: String!) {
    createResolution(name: $name) {
      _id
    }
  }
`

class ResolutionForm extends Component {
  submitForm = () => {
    this.props
      .createResolution({
        variables: {
          name: this.name.value
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='fuckboysupreme'
          ref={input => (this.name = input)}
        />
        <button type='submit' onClick={this.submitForm}>
          Submit
        </button>
      </div>
    )
  }
}

export default graphql(createResolution, {
  name: 'createResolution',
  options: {
    refetchQueries: ['Resolutions']
  }
})(ResolutionForm)
