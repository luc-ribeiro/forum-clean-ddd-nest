import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { type AttachmentsRepository } from '@/domain/forum/application/repositories/attachments-repository'
import { type Attachment } from '@/domain/forum/enterprise/entities/attachment'
import { PrismaAttachmentMapper } from '../mappers/prisma-attachment-mapper'

@Injectable()
export class PrismaAttachmentsRepository implements AttachmentsRepository {
  constructor (private readonly prisma: PrismaService) {}

  async create (attachment: Attachment): Promise<void> {
    const data = PrismaAttachmentMapper.toPrisma(attachment)

    await this.prisma.attachment.create({
      data
    })
  }
}
