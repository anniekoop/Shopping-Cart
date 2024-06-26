const items = [
    {
        name: 'Swiss Cheese Potted Plant',
        price: '38.00',
        details: '56in • Duotone Weave Pot',
        imgURL: 'https://images.unsplash.com/photo-1557865353-72c46b1f864f?q=80&w=2744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Small Potted Pine Tree',
        price: '29.00',
        details: '16in • White Ceramic Pot',
        imgURL: 'https://images.unsplash.com/photo-1609062111394-0427aa22d6c1?q=80&w=2851&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Mini Sky Plant',
        price: '24.00',
        details: '12in • Square Wooden Pot',
        imgURL: 'https://images.unsplash.com/photo-1619926833625-cf0a5774d520?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
]

const item1 = document.getElementById('item-1');
const item2 = document.getElementById('item-2');
const item3 = document.getElementById('item-3');

const price1 = document.getElementById('price-1');
const name1 = document.getElementById('name-1');
const details1 = document.getElementById('details-1');
const img1 = document.getElementById('img-1');

const price2 = document.getElementById('price-2');
const name2 = document.getElementById('name-2');
const details2 = document.getElementById('details-2');
const img2 = document.getElementById('img-2');

const price3 = document.getElementById('price-3');
const name3 = document.getElementById('name-3');
const details3 = document.getElementById('details-3');
const img3 = document.getElementById('img-3');

price1.textContent = `$${items[0].price}`;
name1.textContent = items[0].name;
details1.textContent = items[0].details;
img1.src = items[0].imgURL;

price2.textContent = `$${items[1].price}`;
name2.textContent = items[1].name;
details2.textContent = items[1].details;
img2.src = items[1].imgURL;

price3.textContent = `$${items[2].price}`;
name3.textContent = items[2].name;
details3.textContent = items[2].details;
img3.src = items[2].imgURL;

document.addEventListener('DOMContentLoaded', function() {
    const subtotalElement = document.getElementById('subtotal');
    const taxesElement = document.getElementById('taxes');
    const totalElement = document.getElementById('total');

    const item1Price = parseFloat(items[0].price);
    const item2Price = parseFloat(items[1].price);
    const item3Price = parseFloat(items[2].price);

    function calculateTotals() {
        const qty1 = document.getElementById('item-1') ? parseInt(document.getElementById('qty-1').value) : 0;
        const qty2 = document.getElementById('item-2') ? parseInt(document.getElementById('qty-2').value) : 0;
        const qty3 = document.getElementById('item-3') ? parseInt(document.getElementById('qty-3').value) : 0;

        const item1Total = item1Price * qty1;
        const item2Total = item2Price * qty2;
        const item3Total = item3Price * qty3;

        if (document.getElementById('item-1')) {
            document.getElementById('price-1').textContent = `$${item1Total.toFixed(2)}`;
        }
        if (document.getElementById('item-2')) {
            document.getElementById('price-2').textContent = `$${item2Total.toFixed(2)}`;
        }
        if (document.getElementById('item-3')) {
            document.getElementById('price-3').textContent = `$${item3Total.toFixed(2)}`;
        }

        const cartSubtotal = item1Total + item2Total + item3Total;
        const cartTaxes = cartSubtotal * 0.15;
        const cartTotal = cartSubtotal + cartTaxes;

        subtotalElement.textContent = `$${cartSubtotal.toFixed(2)}`;
        taxesElement.textContent = `$${cartTaxes.toFixed(2)}`;
        totalElement.textContent = `$${cartTotal.toFixed(2)}`;
    }

    // Initial calculation
    calculateTotals();

    // Add event listeners to quantity select elements
    document.getElementById('qty-1').addEventListener('change', calculateTotals);
    document.getElementById('qty-2').addEventListener('change', calculateTotals);
    document.getElementById('qty-3').addEventListener('change', calculateTotals);

    // Add event listeners to remove links
    document.getElementById('remove-1').addEventListener('click', function() {
        item1.remove();
        calculateTotals();
    });
    document.getElementById('remove-2').addEventListener('click', function() {
        item2.remove();
        calculateTotals();
    });
    document.getElementById('remove-3').addEventListener('click', function() {
        item3.remove();
        calculateTotals();
    });
});
