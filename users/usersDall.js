import jsonFile from 'jsonfile'

export function read() {
    return new Promise((resolve, reject) => {
        jsonFile.readFile("users/users.json", "utf-8", (err, data) => {
            if (err) reject(new Error("the connection has been filed"));
            else resolve(data);
        });
    });
}

export function write(updateData) {
    jsonFile.writeFile("users/users.json", updateData, (err) => {
        if (err) throw err;
        console.log("the data as been updated");
    });
}