import { createClient } from 'redis';

const publisher = createClient();

function redisConnect() {
  publisher.on('connect', () => {
    console.log('Redis publisher connected to the server');
  }).on('error', (err) => {
    console.log(`Redis publisher not connected to the server: ${err}`);
  });
}

function publishMessage(message) {
  setTimeout(() => {
    console.log(`About to send ${message}`);
    publisher.publish('holberton school channel', message, (err) => {
      if (err) {
        console.error(`Error publishing message: ${err}`);
      }
    });
  }); // Delay the message publishing by the specified time
}

function main() {
  try {
    redisConnect();
    publishMessage('Holberton Student #1 starts course', 100);
    publishMessage('Holberton Student #2 starts course', 200);
    publishMessage('KILL_SERVER', 300);
    publishMessage('Holberton Student #3 starts course', 400);
  } catch (err) {
    console.error('Error during Redis connection:', err);
  }
}

main();
