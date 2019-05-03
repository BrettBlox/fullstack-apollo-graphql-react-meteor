import Resolutions from './resolutions'

export default {
  Query: {
    resolutions(obj, args, context) {
      console.log(context)
      return Resolutions.find({}).fetch()
    }
  },
  Mutation: {
    createResolution(obj, { name }, context) {
      const resolutionId = Resolutions.insert({
        name
      })
      return Resolutions.findOne(resolutionId)
    }
  }
}
