document.getElementById('submit-btn').addEventListener('click', () => {
    const productName = document.getElementById('product-name').value;
    const productQuantity = document.getElementById('product-quantity').value;
    const resultTable = document.getElementById('result');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${productName}</td>
        <td>${productQuantity}</td>
    `;
    resultTable.appendChild(tr);
    document.getElementById('product-name').value = '';
    document.getElementById('product-quantity').value = '';
});