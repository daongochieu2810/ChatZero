import { Injectable } from "@nestjs/common";
import { Logger } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";

@Injectable()
export class TaskService {
    private readonly logger = new Logger(TaskService.name)

    @Cron('45 * * * * *')
    handleCron() {
        this.logger.debug('Task being run periodically...')
    }
}