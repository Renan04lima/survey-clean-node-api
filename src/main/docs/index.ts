import paths from './paths'
import components from './components'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Survey Clean Node API',
    description: 'Essa é a documentação da API feita no curso da Udemy de NodeJs usando Typescript, TDD, Clean Architecture e seguindo os princípios do SOLID e Design Patterns.',
    version: '1.0.0'
  },
  servers: [{
    url: '/api',
    description: 'Servidor Principal'
  }],
  tags: [{
    name: 'Login',
    description: 'APIs relacionadas a Login'
  }, {
    name: 'Enquete',
    description: 'APIs relacionadas a Enquete'
  }],
  paths,
  schemas,
  components
}
