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
import { CreateChatDto, UpdateChatDto } from '../utils/dtos';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  createChat(@Body() createChatDto: CreateChatDto) {
    return this.chatService.create(createChatDto);
  }

  @Get()
  findAllChats() {
    return this.chatService.findAll();
  }

  @Get(':id')
  findOneChat(@Param('id') id: string) {
    return this.chatService.findOne(+id);
  }

  @Put(':id/message-ids')
  updateOneChatMessageIds(
    @Param('id') id: string,
    @Body() updateChatDto: UpdateChatDto,
  ) {
    return this.chatService.updateMessageIds(+id, updateChatDto);
  }

  @Delete(':id')
  removeOneChat(@Param('id') id: string) {
    return this.chatService.remove(+id);
  }
}
