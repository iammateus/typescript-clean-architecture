import Task from '../../core/entities/Task';
import TaskRepositoryInterface from '../../core/interfaces/TaskRepositoryInterface';

export default class TaskRepositoryFile implements TaskRepositoryInterface {
    async create(task: Task): Promise<string> {
        return 'task';
    }
}
