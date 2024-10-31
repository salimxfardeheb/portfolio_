const fs = require("fs");

function readDataFile() {
  return new Promise((resolve, reject) => {
    fs.readFile("portfolio.json", "utf-8", (err, data) => {
      if (err) {
        reject("Erreur de lecture du fichier:", err);
      } else {
        resolve(data);
      }
    });
  });
}

module.exports = { readDataFile };
