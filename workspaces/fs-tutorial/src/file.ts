import path from "path"
import fs from "fs"

const filePath = `${path.dirname(__dirname)}/files/async.txt`;

const root = `${path.dirname(__dirname)}/files`;
const long =  "this is a long string---";
const short = "this is a short string+";

/**
 * This function proves the target file has truncated characters when
 * the write actions are conducted asynchronously in two different process.
 */
const executeWriteFileTruncation = async() => {
    const file = `${root}/truncated.txt`;
    (async() => {
        await fs.promises.writeFile(file, long);
    })();

    (async() => {
        const text = await fs.promises.readFile(file);
        console.log(`read file between async write => ${text}`)
    })();
    
    (async() => {
        await fs.promises.writeFile(file, short);
    })();

    (async() => {
        const text = await fs.promises.readFile(file);
        console.log(`read file after all async writes => ${text}`)
    })();
}

const executeWriteFileNoTruncation = async() => {
    const file = `${root}/no_truncated.txt`;
    await fs.promises.writeFile(file, long);

    (async() => {
        const text = await fs.promises.readFile(file);
        console.log(`read file between await async writes => ${text}`)
    })();

    await fs.promises.writeFile(file, short);
}

const executeWriteFileSync = async() => {
    const file = `${root}/sync.txt`;

    (async() => {
        const text = await fs.promises.readFile(file);
        console.log(`read file before sync write => ${text}`)
    })();

    (async() => {
        fs.writeFileSync(file, long);
    })();

    (async() => {
        const text = await fs.promises.readFile(file);
        console.log(`read file between sync write => ${text}`)
    })();

    (async() => {
        fs.writeFileSync(file, short);
    })();

    (async() => {
        const text = await fs.promises.readFile(file);
        console.log(`read file after sync write => ${text}`)
    })();
}

(async() => {
    await executeWriteFileTruncation();
    await executeWriteFileNoTruncation();
    await executeWriteFileSync();
    
    console.log("== start to simulate lost last character ... ==");
    for(let i = 0 ; i < 100 ; i++) {
        executeWriteFileSync();
    }
    console.log("== simulate lost last character finished ==")    
})();
