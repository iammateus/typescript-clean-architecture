import { Task } from "../../src/core/entities/Task"
import faker from "faker";

describe("Task", () => {
    it("should have following attributes", () => {
        const name = faker.lorem.words(3);
        const description = faker.lorem.text();
        const date = faker.datatype.datetime();
        const status = "todo";
        const task = new Task(name, description, date, status); 
        expect(task.name).toEqual(name);
        expect(task.description).toEqual(description);
        expect(task.date).toEqual(date);
        expect(task.status).toEqual(status);
    })
})