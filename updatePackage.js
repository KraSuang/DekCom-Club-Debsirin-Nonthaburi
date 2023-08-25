const fs = require('fs');
const chokidar = require('chokidar');
const { addHours } = require('date-fns')

const packageJsonPath = './package.json';

function updateLastUpdated() {
    try {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath));
        packageJson.lastUpdated = new Date().toISOString();
        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
        console.log(`package.json lastUpdated updated to ${packageJson.lastUpdated}`);
    } catch (error) {
        console.error('Error updating lastUpdated:', error);
    }
}

chokidar
    .watch(['./**/*.jsx', './**/*.js', './**/*.css', './**/*.html'], {
        ignored: /node_modules/,
        persistent: true,
    })
    .on('change', () => {
        updateLastUpdated();
    });

function updateTime() {
    try {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath));

        const currentTime = addHours(new Date(), 7).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        });

        packageJson.lastUpdateTime = currentTime;
        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
        console.log(`package.json lastUpdateTime updated to ${packageJson.lastUpdateTime}`);
    } catch (error) {
        console.error('Error updating lastUpdateTime:', error);
    }
}

chokidar
    .watch(['./**/*.jsx', './**/*.js', './**/*.css', './**/*.html'], {
        ignored: /node_modules/,
        persistent: true,
    })
    .on('change', () => {
        updateTime();
    });