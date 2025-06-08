function fibonacci(n) {
  // Base case: jika n adalah 0, kembalikan array berisi 0.
  if (n === 0) {
    return [0];
  }

  // Base case: jika n adalah 1, kembalikan deret [0, 1].
  if (n === 1) {
    return [0, 1];
  }

  // Recursive step:
  // 1. Panggil fungsi untuk mendapatkan deret fibonacci hingga n - 1.
  const sequence = fibonacci(n - 1);
  
  // 2. Hitung angka fibonacci berikutnya dengan menjumlahkan dua angka terakhir dalam deret.
  const nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
  
  // 3. Tambahkan angka baru ke dalam deret dan kembalikan.
  sequence.push(nextValue);
  
  return sequence;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;