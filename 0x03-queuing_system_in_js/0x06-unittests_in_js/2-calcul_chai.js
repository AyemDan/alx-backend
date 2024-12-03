function calculateNumber(type, a, b) {
  // Round the numbers
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  // Perform the operation based on the type
  switch (type) {
    case 'SUM':
      return roundedA + roundedB;
    case 'SUBTRACT':
      return roundedA - roundedB;
    case 'DIVIDE':
      if (roundedB === 0) {
        return 'Error'; // Handle division by zero
      }
      return roundedA / roundedB;
    default:
      throw new Error('Invalid operation type');
  }
}

module.exports = calculateNumber;
