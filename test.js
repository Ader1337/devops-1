const { sum } = require('./index');

if (sum(2, 3) === 5) {
  console.log('Test passed');
  process.exit(0);
} else {
  console.error('Test failed');
  process.exit(1);
}