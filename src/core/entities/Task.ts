export class Task {
    id?: string
    name: string
    description: string
    date: Date
    status: "todo" | "doing" | "done" | "canceled"

    constructor(name: string, description: string, date: Date, status: "todo" | "doing" | "done" | "canceled") {
        this.name = name;
        this .description = description;
        this.date = date;
        this.status = status;
    }
}