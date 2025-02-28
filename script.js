const today = new Date();
const date = today.toISOString().split('T')[0];

document.getElementById('date').textContent = date;