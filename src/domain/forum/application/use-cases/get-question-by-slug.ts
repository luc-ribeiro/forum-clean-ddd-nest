import { QuestionsRepository } from '../repositories/questions-repository'
import { type Either, left, right } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { Injectable } from '@nestjs/common'
import type { QuestionDetails } from '../../enterprise/entities/value-objects/question-details'

interface GetQuestionBySlugUseCaseRequest {
  slug: string
}

type GetQuestionBySlugUseCaseResponse = Either<
ResourceNotFoundError,
{
  question: QuestionDetails
}
>

@Injectable()
export class GetQuestionBySlugUseCase {
  constructor (private readonly questionsRepository: QuestionsRepository) {}

  async execute ({
    slug
  }: GetQuestionBySlugUseCaseRequest): Promise<GetQuestionBySlugUseCaseResponse> {
    const question = await this.questionsRepository.findDetailsBySlug(slug)

    if (question == null) {
      return left(new ResourceNotFoundError())
    }

    return right({
      question
    })
  }
}
