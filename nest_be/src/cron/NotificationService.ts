import { Injectable } from "@nestjs/common";
import { Inject } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import { ChatService } from "src/chat/chat.service";
import { TaskService } from "./TaskService";

@Injectable()
export class NotificationService {
    constructor(private readonly chatService: ChatService) {}

    @Cron('2 * * * * *')
    handleCron() {
        this.chatService.test()
    }
}