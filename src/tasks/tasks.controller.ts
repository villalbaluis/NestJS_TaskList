import { Body, Controller, Get, Post, Delete, Param, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO, UpdateTaskDTO } from './dto/task.dto';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks();
    }

    @Post()
    createTask(@Body() newTask: CreateTaskDTO) {
        return this.tasksService.createTask(newTask.title, newTask.description);
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string) {
        return this.tasksService.daleteTask(id);
    }

    @Patch(':id')
    updateTask(@Param('id') id: string, @Body() updateFields: UpdateTaskDTO) {
        return this.tasksService.updateTask(id, updateFields);
    }
}
