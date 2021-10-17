import CreateTask from '../../src/core/use_cases/CreateTask';

describe('CreateTask', () => {
    it('should have method execute', () => {
        const createTask: CreateTask = new CreateTask();
        expect(createTask.execute).toBeInstanceOf(Function);
    });
});
