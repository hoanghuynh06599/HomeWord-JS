const productArray = []

const getFieldValue = () => {
    const customerName = productInfo.fullName.value;
    const productID = productInfo.productId.value;
    const productName = productInfo.productName.value;
    const quantity = parseInt(productInfo.productQuantity.value);
    const price = parseInt(productInfo.productPrice.value);
    const discount = parseInt(productInfo.discount.value);
    return {
        customerName,
        productID,
        productName,
        quantity,
        price,
        discount,
    }
}

const handelReset = () => {
    const prodTable = document.getElementById('product-table')
    prodTable.innerHTML = ''
}

const handleRenderProduct = () => {
    const prodTable = document.getElementById('product-table')
    prodTable.innerHTML = ''
    productArray.forEach((product, index) => {
        const trTag = document.createElement('tr')
        trTag.classList.add('odd:bg-white', 'even:bg-gray-50', 'border-b')
        trTag.innerHTML = `
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                ${++index}
            </th>
            <td class="px-6 py-4">
                ${product.customerName}
            </td>
            <td class="px-6 py-4">
                ${product.productID}
            </td>
            <td class="px-6 py-4">
                ${product.productName}
            </td>
            <td class="px-6 py-4">
                ${product.quantity}
            </td>
            <td class="px-6 py-4">
                ${product.price}
            </td>
            <td class="px-6 py-4">
                ${product.discount}
            </td>
            <td class="px-6 py-4">
                ${product.price * product.quantity}
            </td>
            <td class="px-6 py-4">
            ${(product.price * product.quantity) - product.discount}
            </td>
        `
        prodTable.appendChild(trTag)
    })
    
    document.getElementById('fullName').value = ''
    document.getElementById('productName').value = ''
    document.getElementById('productQuantity').value = ''
    document.getElementById('productId').value = ''
    document.getElementById('productPrice').value = ''
    document.getElementById('discount').value = ''
}

const handleAddProduct = () => {
    const { customerName, productID, productName, quantity, price, discount } = getFieldValue()
    
    const newProduct = {
        customerName, 
        productID, 
        productName, 
        quantity, 
        price, 
        discount,
    }
    productArray.push(newProduct)
}

