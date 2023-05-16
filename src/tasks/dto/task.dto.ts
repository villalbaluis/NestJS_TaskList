import { TaskStatus } from "../task.entity"
import { IsString, IsNotEmpty, MinLength, IsOptional, IsIn } from 'class-validator'

export class CreateTaskDTO{
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string
    @IsString()
    description: string
    status: TaskStatus
}

export class UpdateTaskDTO{
    @IsString()
    @IsOptional()
    title?: string
    @IsString()
    @IsOptional()
    description?: string
    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.PENDING, TaskStatus.DONE, TaskStatus.IN_PROGRESS])
    status?: TaskStatus
}