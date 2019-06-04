const { exec } = require('child_process');

function runMigrations() {
  return new Promise((resolve, reject) => {
    const migrate = exec('sequelize db:migrate', { env: process.env },
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });

    // Forward stdout+stderr to this process
    migrate.stdout.pipe(process.stdout);
    migrate.stderr.pipe(process.stderr);
  });
}

module.exports = {
  runMigrations,
};
