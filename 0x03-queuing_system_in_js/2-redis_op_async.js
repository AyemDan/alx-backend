import { createClient } from 'redis';
import { promisify } from 'util';

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

const getAsync = promisify(client.get).bind(client);

async function displaySchoolValue(schoolName) {
  try {
    const value = await getAsync(schoolName);
    if (value === null) {
      console.log(`No value found for ${schoolName}`);
    } else {
      console.log(`${value}`);
    }
  } catch (err) {
    console.error(`Error fetching value for ${schoolName}: ${err.message}`);
  }
}

async function main() {
  await redisConnect();

  await displaySchoolValue('Holberton');
  await setNewSchool('HolbertonSanFrancisco', '100');
  await displaySchoolValue('HolbertonSanFrancisco');
}

main();
