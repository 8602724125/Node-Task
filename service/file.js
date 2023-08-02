const fs = require('fs');

function countWords(text) {
    const words = text.split(/\s+/);
    const nonEmptyWords = words.filter(word => word !== '');
    return nonEmptyWords.length;
}

const fileService = {
    count: (req, res) => { 
        fs.readFile('data.txt', 'utf8', (err, data) => {
            if (err) {
              res.status(500).json({Error: err});
            }
            const wordCount = countWords(data);
            res.status(200).json({wordCount: wordCount});
          });   
    }
}

module.exports = fileService;