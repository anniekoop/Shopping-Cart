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
const qty1 = document.getElementById('qty-1').value;
const img1 = document.getElementById('img-1');

const price2 = document.getElementById('price-2');
const name2 = document.getElementById('name-2');
const details2 = document.getElementById('details-2');
const qty2 = document.getElementById('qty-2').value;
const img2 = document.getElementById('img-2');

const price3 = document.getElementById('price-3');
const name3 = document.getElementById('name-3');
const details3 = document.getElementById('details-3');
const qty3 = document.getElementById('qty-3').value;
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

    const itemPrices = items.map(item => parseFloat(item.price));

    function calculateTotals() {
        const qtyElements = document.querySelectorAll('.quantity');
        let cartSubtotal = 0;

        qtyElements.forEach((qtyElement, index) => {
            const itemElement = document.getElementById(`item-${index + 1}`);
            if (itemElement.style.display !== 'none') {
                const qty = parseInt(qtyElement.value);
                const itemTotal = itemPrices[index] * qty;
                document.getElementById(`price-${index + 1}`).textContent = `$${itemTotal.toFixed(2)}`;
                cartSubtotal += itemTotal;
            }
        });

        const cartTaxes = cartSubtotal * 0.15;
        const cartTotal = cartSubtotal + cartTaxes;

        subtotalElement.textContent = `$${cartSubtotal.toFixed(2)}`;
        taxesElement.textContent = `$${cartTaxes.toFixed(2)}`;
        totalElement.textContent = `$${cartTotal.toFixed(2)}`;
    }

    // Initial calculation
    calculateTotals();

    // Add event listeners to quantity select elements
    document.querySelectorAll('.quantity').forEach(element => {
        element.addEventListener('change', calculateTotals);
    });

    // Add event listeners to remove links
    document.querySelectorAll('.remove-link').forEach((removeLink, index) => {
        removeLink.addEventListener('click', function(event) {
            event.preventDefault();
            const itemElement = document.getElementById(`item-${index + 1}`);
            itemElement.classList.add('removing');

            // Wait for the transition to finish before setting display to none
            itemElement.addEventListener('transitionend', function() {
                itemElement.style.display = 'none';
                calculateTotals();
            }, { once: true });
        });
    });
});
