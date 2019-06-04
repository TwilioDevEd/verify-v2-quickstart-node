const tracer = require('tracer');

function logger() {
  const logLevel = process.env.LOG_LEVEL;
  return tracer.colorConsole({ level: logLevel });
}

module.exports = logger;
