// Desc: File operations class to read and write files

import fs from 'node:fs';

export default class FileOperations {
    readFile(path) {
        try {
            const data = fs.readFileSync(path, 'utf8');
            return JSON.parse(data);
        } catch (err) {
            console.error('Error reading file:', err);
            return null;
        }
    }

    writeFile(path, data, isUpdate = false) {
        try {
            if (isUpdate) {
                fs.appendFileSync(path, data);
                console.log('File updated');
            } else {
                fs.writeFileSync(path, data);
                console.log('File written');
            }
            return true;
        } catch (err) {
            console.error('Error writing file:', err);
            return false;
        }
    }
}
