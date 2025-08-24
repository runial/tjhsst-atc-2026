const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directory = 'public';

function compressImages(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error('Could not list the directory.', err);
      process.exit(1);
    }

    files.forEach((file, index) => {
      const filePath = path.join(dir, file);

      fs.stat(filePath, (err, stat) => {
        if (err) {
          console.error('Error stating file.', err);
          return;
        }

        if (stat.isDirectory()) {
          compressImages(filePath);
        } else {
          const fileExt = path.extname(filePath);

          if (['.jpg', '.jpeg', '.png', '.gif'].includes(fileExt)) {
            const outputFilename = `${path.basename(file, fileExt)}.webp`;
            const outputPath = path.join(dir, outputFilename);
            let quality;
            if (stat.size > 3000 * 204) quality = 5;
            else if (stat.size > 300 * 1024) quality = 95;
            else if (stat.size > 100 * 1024) quality = 95;
            else quality = 95;

            sharp(filePath)
              .webp({ quality })
              .toFile(outputPath, (err, info) => {
                if (err) {
                  console.error(`Error converting ${file} to webp`, err);
                } else {
                  console.log(`Successfully converted ${file} to webp with quality ${quality}`, info);
                }
              });
          }
        }
      });
    });
  });
}

compressImages(directory);