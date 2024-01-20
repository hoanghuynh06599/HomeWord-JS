const handleResetState = () => {
    frm.productName.value = '';
    frm.quantity.value = '';
    frm.price.value = '';
    frm.discount.value = '';
}

const handleSell = () => {
    const productName = frm.productName.value;
    const quantity = parseInt(frm.quantity.value);
    const price = frm.price.value;
    const discount = parseInt(frm.discount.value);

    if(productName && quantity && price) {
        const tbodyTag = document.getElementById('table-body');
        const subtotal = (price * quantity) - ((discount / 100) * (price * quantity));
        const countProduct = tbodyTag.childElementCount;
    
        const trTag = document.createElement('tr');
        trTag.innerHTML = `
            <tr class="bg-white">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    ${countProduct + 1}
                </th>
                <td class="px-6 py-4 text-gray-900">
                    ${productName}
                </td>
                <td class="px-6 py-4 text-gray-900">
                    ${quantity}
                </td>
                <td class="px-6 py-4 text-gray-900">
                    $${price}
                </td>
                <td class="px-6 py-4 text-gray-900">
                    ${discount}
                </td>
                <td class="px-6 py-4 text-gray-900">
                    $${subtotal}
                </td>
            </tr>
        `;
        tbodyTag.appendChild(trTag);
        handleResetState();
    }
}