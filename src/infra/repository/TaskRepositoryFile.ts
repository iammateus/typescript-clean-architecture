import { v1 } from 'uuid';
import Task from '../../core/entities/Task';
import TaskRepositoryInterface from '../../core/interfaces/TaskRepositoryInterface';
import FileStorage from '../gateways/FileStorage/FileStorage';

export default class TaskRepositoryFile implements TaskRepositoryInterface {
    private fileStorage: FileStorage;

    constructor() {
        const path = `${__dirname}/../../../resources/tasks.json`;
        this.fileStorage = new FileStorage(path);
    }

    async create(task: Task): Promise<string> {
        const newTask = { ...task, id: v1() };

        const tasks: Array<any> = this.fileStorage.getContent();
        tasks.push(newTask);
        this.fileStorage.setContent(tasks);

        return newTask.id;
    }
}
