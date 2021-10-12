import { LoadSurveyResultRepository } from '@/data/protocols/db/survey-result/load-survey-result-repository'
import { LoadSurveyByIdRepository } from '@/data/protocols/db/survey/load-survey-by-id-repository'
import { mockLoadSurveyByIdRepository, mockLoadSurveyResultRepository } from '@/data/test'
import { DbLoadSurveyResult } from '@/data/usecases/survey-result/load-survey-result/db-load-survey-result'
import { mockSurveyResultModel } from '@/domain/test'
import MockDate from 'mockdate'

type SutTypes = {
  sut: DbLoadSurveyResult
  loadSurveyResultRepositoryStub: LoadSurveyResultRepository
  loadSurveyByIdRepositoryStub: LoadSurveyByIdRepository
}

const makeSut = (): SutTypes => {
  const loadSurveyResultRepositoryStub = mockLoadSurveyResultRepository()
  const loadSurveyByIdRepositoryStub = mockLoadSurveyByIdRepository()
  const sut = new DbLoadSurveyResult(loadSurveyResultRepositoryStub, loadSurveyByIdRepositoryStub)
  return {
    sut,
    loadSurveyResultRepositoryStub,
    loadSurveyByIdRepositoryStub
  }
}

describe('DbLoadSurveyResult Usecase', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  test('should call LoadSurveyResultRepository', async () => {
    const { sut, loadSurveyResultRepositoryStub } = makeSut()

    const loadBySurveyIdSpy = jest.spyOn(loadSurveyResultRepositoryStub, 'loadBySurveyId')

    await sut.load('any_survey_id')

    expect(loadBySurveyIdSpy).toBeCalledWith('any_survey_id')
  })

  test('should throw if LoadSurveyResultRepository throws', async () => {
    const { sut, loadSurveyResultRepositoryStub } = makeSut()

    jest.spyOn(loadSurveyResultRepositoryStub, 'loadBySurveyId').mockRejectedValueOnce(new Error())

    const promise = sut.load('any_survey_id')

    await expect(promise).rejects.toThrow()
  })

  test('Should call LoadSurveyByIdRepository if LoadSurveyResultRepository returns null', async () => {
    const { sut, loadSurveyResultRepositoryStub, loadSurveyByIdRepositoryStub } = makeSut()
    const loadByIdSpy = jest.spyOn(loadSurveyByIdRepositoryStub, 'loadById')
    jest.spyOn(loadSurveyResultRepositoryStub, 'loadBySurveyId').mockReturnValueOnce(Promise.resolve(null))
    await sut.load('any_survey_id')
    expect(loadByIdSpy).toHaveBeenCalledWith('any_survey_id')
  })

  test('Should return surveyResultModel on success', async () => {
    const { sut } = makeSut()
    const surveyResult = await sut.load('any_survey_id')
    expect(surveyResult).toEqual(mockSurveyResultModel())
  })
})
