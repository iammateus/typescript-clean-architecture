import fs from 'fs';

export default class FileStorage {
    private path: string

    constructor(path: string) {
        this.path = path;
        this.checkFileAndCreateIfNonExistent();
    }

    private checkFileAndCreateIfNonExistent(): void {
        try {
            fs.readFileSync(this.path);
        } catch (e) {
            fs.writeFileSync(this.path, JSON.stringify([]));
        }
    }

    getContent(): Array<any> {
        const buffer = fs.readFileSync(this.path);
        return JSON.parse(buffer.toString());
    }

    setContent(content: Array<any>) {
        fs.writeFileSync(this.path, JSON.stringify(content));
    }
}
