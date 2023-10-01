const projects = require('./projects');
const users = require('./users');
const teams = require('./teams');
const teamMembers = require('./teamMembers');
const tasks = require('./tasks');
const taskLogs = require('./taskLogs');
const taskUpdates = require('./taskUpdates');

const db = {
    projects,users,teams,teamMembers,tasks,taskLogs,taskUpdates
};

module.exports = db;