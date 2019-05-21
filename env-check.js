const task = process.env.npm_lifecycle_event
const packageJSON = require('../package.json')
const availableEnvironments = Object.keys(packageJSON.scripts)
    .filter(key => key.startsWith(task))
    .map(key => key.split(':')[1])
    .filter(key => key)

if (!process.env.NODE_ENV) {
    console.error(`[ Error ] NODE_ENV is required. Use ${task}:${availableEnvironments.join('/')} scripts instead.`)
    process.exit(1)
}

if (!availableEnvironments.includes(env)) {
    console.error(`[ Error ] ${env} is not valid NODE_ENV. Use ${task}:${availableEnvironments.join('/')} scripts instead.`)
    process.exit(1)
}

process.exit(0)
