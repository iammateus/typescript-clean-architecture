import faker from 'faker';
import Task from '../../../src/core/entities/Task';
import CreateTask from '../../../src/core/use_cases/CreateTask';
import TaskRepositoryFile from '../../../src/infra/repository/TaskRepositoryFile';

describe('CreateTask', () => {
    it('should have method execute', () => {
        const taskRepository: TaskRepositoryFile = new TaskRepositoryFile();
        const createTask: CreateTask = new CreateTask(taskRepository);
        expect(createTask.execute).toBeInstanceOf(Function);
    });

    it('should create a Task', async () => {
        const task: Task = new Task(faker.lorem.words(2), faker.lorem.text(), faker.datatype.datetime(), 'todo');

        const taskRepository: TaskRepositoryFile = new TaskRepositoryFile();
        taskRepository.create = jest.fn().mockReturnValueOnce(task);

        const createTask: CreateTask = new CreateTask(taskRepository);
        const result = await createTask.execute(task);

        expect(result).toEqual(task);
        expect(taskRepository.create).toHaveBeenCalled();
        expect(taskRepository.create).toHaveBeenCalledWith(task);
    });
});
