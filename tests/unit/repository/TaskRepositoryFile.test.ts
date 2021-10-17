import faker from 'faker';
import fs from 'fs';
import TaskRepositoryFile from '../../../src/infra/repository/TaskRepositoryFile';
import Task from '../../../src/core/entities/Task';

describe('TaskRepositoryFile', () => {
    it('should have create method', () => {
        const taskRepository: TaskRepositoryFile = new TaskRepositoryFile();
        expect(taskRepository.create).toBeInstanceOf(Function);
    });

    it('should store task and return id', async () => {
        const task: Task = new Task(faker.lorem.words(2), faker.lorem.text(), faker.datatype.datetime(), 'todo');
        const taskRepository: TaskRepositoryFile = new TaskRepositoryFile();
        const taskId = await taskRepository.create(task);
        expect(taskId).toBeTruthy();

        const tasks: Array<any> = JSON.parse(fs.readFileSync(`${__dirname}/../../../resources/tasks.json`).toString());
        const storedTask = tasks.find((t) => t.id === taskId);
        expect(storedTask).toBeTruthy();

        expect(storedTask.name).toEqual(task.name);
        expect(storedTask.description).toEqual(task.description);
        expect(new Date(storedTask.date)).toEqual(task.date);
        expect(storedTask.status).toEqual(task.status);
    });
});
