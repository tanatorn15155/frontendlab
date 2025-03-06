// ตัวอย่างใช้ Fetch API
fetch('http://localhost:5000/api/products')
  .then(response => response.json())
  .then(data => console.log(data));
