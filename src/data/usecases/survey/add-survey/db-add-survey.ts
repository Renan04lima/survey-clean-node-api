import { AddSurveyRepository } from '@/data/protocols/db/survey/add-survey-repository'
import { AddSurvey, AddSurveyModel } from '@/domain/usecases/survey/add-survey'

export class DbAddSurvey implements AddSurvey {
  constructor (private readonly addSurveyRepository: AddSurveyRepository) {}
  async add(data: AddSurveyModel): Promise<void> {
    await this.addSurveyRepository.add(data)
  }
}
