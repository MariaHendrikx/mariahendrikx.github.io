const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, 'blog');
const indexPath = path.join(blogDir, 'blog-index.json');

// Read all .md files from blog directory
fs.readdir(blogDir, (err, files) => {
  if (err) {
    console.error('Error reading blog directory:', err);
    process.exit(1);
  }

  // Filter for .md files, exclude the index file itself
  const mdFiles = files
    .filter(file => file.endsWith('.md') && file !== 'blog-index.json')
    .sort()
    .reverse(); // Newest first

  // Write to blog-index.json
  fs.writeFile(indexPath, JSON.stringify(mdFiles, null, 2), (err) => {
    if (err) {
      console.error('Error writing blog-index.json:', err);
      process.exit(1);
    }
    console.log('✓ Generated blog-index.json with', mdFiles.length, 'files');
  });
});
