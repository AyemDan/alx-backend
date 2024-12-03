import { createClient } from 'redis';

const client = createClient();

function redisConnect() {
  client.on('connect', () => {
    console.log('Redis client connected to the server');
  }).on('error', (err) => {
    console.log(`Redis client not connected to the server: ${err}`);
  });
}

function setNewSchool(schoolName, value) {
  client.set(schoolName, value, (err, reply) => {
    if (!err) console.log(`Reply: ${reply}`);
  });
}

function displaySchoolValue(schoolName) {
  client.get(schoolName, (err, reply) => {
    console.log(reply);
  });
}

redisConnect();
displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
