/*

  readFile(path[, options])
  createReadStream(path[, options])

  writeFile(file, data[, options])
  createWriteStream(path[, options])

  appendFile(path, data[, options])
  copyFile(src, dest[, flags])
  stat(path[, options])
  access(path[, mode]), chmod(path, mode), chown(path, uid, gid)
  link(existingPath, newPath), unlink(path)
  truncate(path[, len])

  mkdir(path[, mode])
  readdir(path[, options])
  rmdir(path)
  rename(oldPath, newPath)

*/

// const fs = require("fs");
// const readStream = fs.createReadStream("./t.html", "utf-8");
// const writeSream = fs.createWriteStream("./copy.txt");
// readStream.on("data", (chunk) => {
//   writeSream.write(chunk);
// });
// fs.createWriteStream;

// const fs = require("fs");
// fs.copyFile("./t.html", "copy.txt", (err) => {
//   if (err) throw err;
//   console.log("source.txt was copied to destination.txt");
// });
// fs.stat("copy.txt");

// const fs = require("fs").promises;
// async function main() {
//   const copy = await fs.copyFile("./t.html", "copy.txt", (err) => {
//     if (err) throw err;
//     console.log("source.txt was copied to destination.txt");
//   });
// }
// main();

// const fs = require("fs");
// try {
//   fs.stat("./copy.txt", (err, stats) => {
//     if (err) throw err;
//     console.log(stats);
//   });
// } catch (error) {
//   console.log(error.message);
// }

/*

  readFile(path[, options])
  createReadStream(path[, options])

  writeFile(file, data[, options])
  createWriteStream(path[, options])

  appendFile(path, data[, options])
  copyFile(src, dest[, flags])
  stat(path[, options])
  access(path[, mode]), chmod(path, mode), chown(path, uid, gid)
  link(existingPath, newPath), unlink(path)
  truncate(path[, len])

  mkdir(path[, mode])
  readdir(path[, options])
  rmdir(path)
  rename(oldPath, newPath)

*/
