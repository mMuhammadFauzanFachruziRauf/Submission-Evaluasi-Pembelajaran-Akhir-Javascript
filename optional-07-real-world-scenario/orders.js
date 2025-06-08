// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  // Hitung total harga dari semua item
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  // Buat objek pesanan baru
  const newOrder = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice,
    status: 'Menunggu' // Status default saat pesanan dibuat
  };

  // Tambahkan pesanan baru ke dalam array orders
  orders.push(newOrder);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  // Cari pesanan berdasarkan ID
  const orderToUpdate = orders.find(order => order.id === orderId);

  // Jika pesanan ditemukan, perbarui statusnya
  if (orderToUpdate) {
    orderToUpdate.status = status;
  }
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  // Filter pesanan yang statusnya "Selesai"
  const completedOrders = orders.filter(order => order.status === 'Selesai');
  
  // Jumlahkan total harga dari pesanan yang sudah selesai
  return completedOrders.reduce((total, order) => total + order.totalPrice, 0);
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  // Buat array baru yang tidak berisi pesanan dengan id yang cocok
  orders = orders.filter(order => order.id !== id);
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };