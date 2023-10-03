// TODO: tampilkan teks pada notes.txt pada console
const path = require("path");
const fs = require("fs");

const notesPath = path.resolve(__dirname, "notes.txt");

const fileReadCallback = (error, data) => {
  if (error) {
    console.log("Gagal membaca berkas", error);
    return;
  }
  console.log(data);
};

fs.readFile(notesPath, "UTF-8", fileReadCallback);
