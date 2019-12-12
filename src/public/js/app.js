function fetchItems() {
  const control = document.getElementById('control-select');

  fetch('http://localhost:3000/api/' + control.value)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .then(data => {
      const items = document.getElementById('items-select');
      items.innerHTML = null;

      data.map((d, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.innerText = d;
        items.appendChild(option);
      });
    })
    .catch(err => console.log(err));
}

fetchItems();
