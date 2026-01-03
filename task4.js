const taskList = document.getElementById('taskList');
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = `
      <span>${task}</span>
      <button class="delete-btn" onclick="removeTask(${index})">✕</button>
    `;
    taskList.appendChild(li);
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById('taskInput');
  if (input.value.trim() !== '') {
    tasks.push(input.value);
    input.value = '';
    renderTasks();
  }
}

function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

renderTasks();
const products = [
  { name: 'Laptop', category: 'tech', price: 80000, rating: 4.8 },
  { name: 'Smartphone', category: 'tech', price: 50000, rating: 4.6 },
  { name: 'Sneakers', category: 'fashion', price: 12000, rating: 4.4 },
  { name: 'Jacket', category: 'fashion', price: 20000, rating: 4.7 }
];

function displayProducts() {
  const filter = document.getElementById('filter').value;
  const sort = document.getElementById('sort').value;

  let filteredProducts =
    filter === 'all'
      ? [...products]
      : products.filter(product => product.category === filter);

  filteredProducts.sort((a, b) => {
    return sort === 'price'
      ? a.price - b.price
      : b.rating - a.rating;
  });

  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';

  filteredProducts.forEach(product => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: ₹${product.price}</p>
      <p>Rating: ${product.rating}</p>
    `;
    grid.appendChild(div);
  });
}

displayProducts();


function sendMessage() {
  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const message = document.getElementById('contactMessage').value.trim();
  const status = document.getElementById('contactStatus');

  if (name === '' || email === '' || message === '') {
    status.style.color = 'red';
    status.textContent = 'Please fill in all fields.';
    return;
  }

  status.style.color = '#6c63ff';
  status.textContent = 'Message sent successfully! Thank you for contacting me.';

  document.getElementById('contactName').value = '';
  document.getElementById('contactEmail').value = '';
  document.getElementById('contactMessage').value = '';
}
