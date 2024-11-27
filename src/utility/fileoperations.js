// Desc: File operations class to read and write files

import { readFile, writeFile, appendFile } from 'fs/promises';

export default class FileOperations {
    async readFile(path) {
        try {
            const data = await readFile(path, 'utf8');
            return JSON.parse(data);
        } catch (err) {
            console.error('Error reading file:', err);
            throw err;
        }
    }

    async writeFile(path, data, isUpdate = false) {
        try {
            const operation = isUpdate ? appendFile : writeFile;
            await operation(path, data);
            console.log(`File ${isUpdate ? 'updated' : 'written'}`);
            return true;
        } catch (err) {
            console.error('Error writing file:', err);
            throw err;
        }
    }
}
