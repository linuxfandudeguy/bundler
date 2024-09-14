const fs = require('fs');
const path = require('path');
const { version } = require('./package.json');

const bundlePath = path.resolve(__dirname, 'dist', 'bundle.js');

// Read the existing bundle
fs.readFile(bundlePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading the bundle: ${err}`);
    return;
  }

  // Create the comment to be added
  const comment = `/**\n * File produced by bundler-cli v${version}\n */\n\n`;

  // Prepend the comment to the existing bundle content
  const updatedData = comment + data;

  // Write the updated bundle back to the file
  fs.writeFile(bundlePath, updatedData, 'utf8', (err) => {
    if (err) {
      console.error(`Error writing the bundle: ${err}`);
      return;
    }
    console.log(`Comment added to ${bundlePath}`);
  });
});
