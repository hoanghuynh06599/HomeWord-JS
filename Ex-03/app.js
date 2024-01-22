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

const handleResetCardState = () => {
    cFrm.productCardName.value = '';
    cFrm.productCardImage.value = null;
    cFrm.productCardPrice.value = 0;
}

const handleAddProduct = () => {
    const productName = cFrm.productCardName?.value;
    const productImg =  cFrm.productCardImage;
    const productPrice = cFrm.productCardPrice?.value;
    if(productName && productPrice && productImg?.files) {
        const url = URL.createObjectURL(productImg.files[0]);
        const listCard = document.getElementById('listProductCard');
        const liTag = document.createElement('li');
        liTag.innerHTML =  `
            <div class="p-2 border border-slate-500 rounded-lg space-y-1 h-full flex flex-col">
                <img src="${url}" alt="" class="mb-2 flex-1 object-center object-cover rounded-lg" />
                <strong class="block">${productName}</strong>
                <p>${productPrice}đ</p>
                <button class="py-1 px-3 text-white bg-green-500 rounded-lg">Đặt mua</button>
            </div>
        `;
        liTag.classList.add('col-span-1', 'h-full');
        listCard.appendChild(liTag);
        handleResetCardState();
    }

}