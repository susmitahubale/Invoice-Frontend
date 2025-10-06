document.addEventListener('DOMContentLoaded', function() {
    // Mock invoice data
    const data = {
        items: [
            { name: 'Item 1', price: 10.0 },
            { name: 'Item 2', price: 20.0 },
            { name: 'Item 3', price: 30.0 }
        ]
    };
    let html = '<ul>';
    data.items.forEach(item => {
        html += `<li>${item.name} - $${item.price}</li>`;
    });
    html += '</ul>';
    document.getElementById('invoice-container').innerHTML = html;
});
