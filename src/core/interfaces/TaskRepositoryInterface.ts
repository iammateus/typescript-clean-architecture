import Task from '../entities/Task';

export default interface TaskRepositoryInterface {
    create(task: Task): Promise<string>;
};
