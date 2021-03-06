// Built-in imports
const fs = require('fs');
const path = require('path');

// External imports
const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const fsPromise = fs.promises;

const logEvents = async (message, logName) => {
  const dateTime = `${format(new Date(), 'yyyy-MM-dd\tHH:mm:ss')}`;
  const logItem = `${dateTime}\t${uuid}\t${message}\n`;

  try {
    if (!fs.existsSync(path.join(__dirname, 'logs'))) {
      await fsPromise.mkdir(path.join(__dirname, 'logs'));
    }

    await fsPromise.appendFile(path.join(__dirname, 'logs', logName), logItem);
  } catch (e) {
    console.log(e);
  }
};

module.exports = logEvents;
