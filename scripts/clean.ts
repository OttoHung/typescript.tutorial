import fs from "fs"
import path from "path"
import { TextColour } from "@utils/log"

const isCleanModules = (process.env.CLEAN_MODULES?.toLocaleLowerCase() === "true") ?? false

const rootPath = path.dirname(__dirname)

const buildFolders: string[] = ["lib", "dist"]

const isDirectory = (dirOrFile: string): boolean => {
    return fs.lstatSync(dirOrFile).isDirectory()
}

const isDotDot = (dirOrFile: string): boolean => {
    return (dirOrFile === "." || dirOrFile === "..")
}

const listSubDirectories = (dir: string): string[] => {
    return fs.readdirSync(dir)
             .map( dirName => path.resolve(dir, dirName) )
             .filter( dirOrFile => (isDirectory(dirOrFile) && !isDotDot(dirOrFile)) )
             
}

const deleteDirectories = (dir: string, directoryName: string, exclude?: string) => {
    if (dir.endsWith(directoryName)) {
        fs.rmSync(dir, {
            force: true,
            recursive: true,
        })
        console.log(`[Delete] ${directoryName} has been deleted from (${TextColour.Red}${dir}${TextColour.Default})`)
    } else if (exclude !== undefined && dir.endsWith(exclude)) {
        //do nothing due to `dir` is not included
    } else if (!path.basename(dir).startsWith(".")) {
        listSubDirectories(dir).forEach(subDir => {
            deleteDirectories(subDir, directoryName)
        })
    }
}

if (isCleanModules) {
    deleteDirectories(rootPath, "node_modules")
}else{
    buildFolders.forEach( folder => {
        deleteDirectories(rootPath, folder, "node_modules")
    })
}

