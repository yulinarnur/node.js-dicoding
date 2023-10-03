const { error } = require("console");
const fs = require("fs");
const path = require("path");

// path atau lokasi file
const inputPath = path.resolve(__dirname, "input.txt");
const outputPath = path.resolve(__dirname, "output.txt");

// Membuat readable stream dengan highWaterMark sebesar 15 bytes
const readableStream = fs.createReadStream(inputPath, {
  encoding: "UTF-8",
  highWaterMark: 15,
});

// membuat writable stream ouput.txt
const writableStream = fs.createWriteStream(outputPath);

readableStream.on("data", (chunk) => {
  // Menampilkan chunk ke konsol
  console.log(chunk);
  writableStream.write(chunk + "\n");
});

readableStream.on("end", () => {
  console.log("Done");
});

readableStream.on("error", (error) => {
  console.error("Terjadi kesalahan saat membaca file:", error);
});

writableStream.on("error", (error) => {
  console.error("Terjadi kesalahan saat menulis ke file:", error);
});
