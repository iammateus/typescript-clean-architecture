import faker from 'faker';

import Task, { Status } from '../../src/core/entities/Task';

describe('Task', () => {
    it('should have following attributes', () => {
        const name: string = faker.lorem.words(3);
        const description: string = faker.lorem.text();
        const date: Date = faker.datatype.datetime();
        const status: Status = 'todo';

        const task: Task = new Task(name, description, date, status);

        expect(task.name).toEqual(name);
        expect(task.description).toEqual(description);
        expect(task.date).toEqual(date);
        expect(task.status).toEqual(status);
    });
});
