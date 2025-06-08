function factorial(n) {
  // Base case: jika n adalah 0, faktorialnya adalah 1.
  if (n === 0) {
    return 1;
  }
  
  // Recursive step: n dikalikan dengan faktorial dari (n - 1).
  return n * factorial(n - 1);
}

// Jangan hapus kode di bawah ini!
export default factorial;