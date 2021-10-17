export type Status = 'todo' | 'doing' | 'done' | 'canceled';
export default class Task {
    id?: string;

    name: string;

    description: string;

    date: Date;

    status: Status;

    constructor(name: string, description: string, date: Date, status: Status) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.status = status;
    }
}
