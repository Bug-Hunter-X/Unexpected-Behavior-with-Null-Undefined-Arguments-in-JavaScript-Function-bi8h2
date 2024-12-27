function foo(a, b) {
  a = a === undefined ? 0 : a; // Set default value if undefined
  b = b === undefined ? 0 : b; // Set default value if undefined
  if (a === null || b === null) {
    //Handle null values explicitly
    console.warn('Null values encountered. Returning default.');
    return 0;
  }

  // ... rest of the function
}