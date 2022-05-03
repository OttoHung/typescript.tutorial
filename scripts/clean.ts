import fs from "fs"
import path from "path"
import { TextColour } from "@utils/log"
import { ARG_START_POINT } from "@utils/utils"

const filesOrFolderToDelete = process.argv.slice(ARG_START_POINT)
const rootPath = path.dirname(__dirname)

const isDirectory = (dirOrFile: string): boolean => {
    return fs.lstatSync(dirOrFile).isDirectory()
}

const isDotDot = (dirOrFile: string): boolean => {
    return (dirOrFile === "." || dirOrFile === "..")
}

const listSubDirectoriesAndFiles = (dirOrFile: string): string[] => {
    return fs.readdirSync(dirOrFile)
             .map( dirName => path.resolve(dirOrFile, dirName) )
             .filter( file => !isDotDot(file) )
             
}

const deleteFileOrDirectories = (file: string) => {
    fs.rmSync(file, {
        force: true,
        recursive: true,
    })
    console.log(`[Delete] ${TextColour.Red}${file}${TextColour.Default} has been deleted`)
}

const deleteDirectoriesAndFiles = (dir: string, directoryOrFileName: RegExp) => {
    if (directoryOrFileName.test(dir)) {
        deleteFileOrDirectories(dir)
    } else if (!path.basename(dir).startsWith(".") && isDirectory(dir) && !isDotDot(dir)) {
        listSubDirectoriesAndFiles(dir).forEach(subDir => {
            deleteDirectoriesAndFiles(subDir, directoryOrFileName)
        })
    }
}

if (filesOrFolderToDelete === undefined) {
    console.log("No files nor directories were assigned to deleted")
} else {
    filesOrFolderToDelete.forEach( fileOrFolder => {
        deleteDirectoriesAndFiles(rootPath, new RegExp(fileOrFolder.replace("*", ".")))
    } )
}
