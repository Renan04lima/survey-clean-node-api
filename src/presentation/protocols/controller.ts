import { HttpResponse, HttpRequest } from '@/presentation/protocols'

export interface Controller {
  handle: (HttpRequest: HttpRequest) => Promise<HttpResponse>
}
