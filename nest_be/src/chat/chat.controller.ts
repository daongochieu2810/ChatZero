import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatDto, CreateMessageDto, UpdateChatDto } from '../utils/dtos';
import { NotificationService } from 'src/cron/NotificationService';
import { Inject } from '@nestjs/common';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService, 
    private readonly notificationService: NotificationService) {}

  @Post()
  createChat(@Body() createChatDto: CreateChatDto) {
    return this.chatService.create(createChatDto);
  }

  @Post()
  createMessage(@Body() createMessageDto: CreateMessageDto) {
    return this.chatService.createMessage(createMessageDto);
  }

  @Get()
  findAllChats() {
    return this.chatService.findAll();
  }

  @Get(':id')
  findOneChat(@Param('id') id: string) {
    return this.chatService.findOne(+id);
  }

  @Put(':id')
  updateOneChatMessageIds(
    @Param('id') id: string,
    @Body() updateChatDto: UpdateChatDto,
  ) {
    return this.chatService.updateMessageIds(+id, updateChatDto);
  }

  @Delete(':id')
  removeOneChat(@Param('id') id: string) {
    return this.chatService.removeOne(+id);
  }

  @Get("/add/cron")
  scheduleCronJob() {
    this.notificationService.handleCron()
  }
}
