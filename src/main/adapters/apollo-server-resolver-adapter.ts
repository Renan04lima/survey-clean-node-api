import { Controller } from '@/presentation/protocols'
import { UserInputError, AuthenticationError, ForbiddenError, ApolloError } from 'apollo-server-express'

export const adaptResolver = async (controller: Controller, args?: any, context?: any): Promise<any> => {
  const request = { ...(args || {}), accountId: context?.req?.accountId }
  const { body, statusCode } = await controller.handle(request)
  switch (statusCode) {
    case 200:
    case 204: return body
    case 400: throw new UserInputError(body.message)
    case 401: throw new AuthenticationError(body.message)
    case 403: throw new ForbiddenError(body.message)

    default: throw new ApolloError(body.message)
  }
}
