import Task from '../entities/Task';
import TaskRepositoryInterface from '../interfaces/TaskRepositoryInterface';

export default class CreateTask {
    private taskRepository: TaskRepositoryInterface;

    constructor(taskRepository: TaskRepositoryInterface) {
        this.taskRepository = taskRepository;
    }

    async execute(task: Task): Promise<Task> {
        const id = await this.taskRepository.create(task);
        const newTask = task;
        newTask.id = id;
        return newTask;
    }
}
