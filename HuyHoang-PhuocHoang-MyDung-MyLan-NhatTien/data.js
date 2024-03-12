const $ = document.querySelector.bind(document)

const products = [
    {
        id: 1,
        name: 'Quần jean nam baggy',
        code: 'MVN01',
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lozgjkstcevid6",
        oldPrice: "318.000 vnđ",
        newPrice: "175.000 vnđ",
    },
    {
        id: 2,
        name: 'Quần Nam Trơn Bo Gấu',
        code: 'MVN02',
        image: "https://down-vn.img.susercontent.com/file/b6adfd12eb3e66046fc500483c0f3092",
        oldPrice: "106.000 vnđ",
        newPrice: "93.400 vnđ",
    },
    {
        id: 3,
        name: 'Áo Thun Polo Nam BL Fashion',
        code: 'MVN03',
        image: "https://down-vn.img.susercontent.com/file/sg-11134201-23010-zvs6p52ndwmve6",
        oldPrice: "150.000 vnđ",
        newPrice: "28.000 vnđ",
    },
    {
        id: 4,
        name: 'Áo Polo Nam Cổ Bẻ Thun',
        code: 'MVN04',
        image: "https://down-vn.img.susercontent.com/file/743050d3c10a59f1b911810ead366116",
        oldPrice: "69.000 vnđ",
        newPrice: "29.000 vnđ",
    },
    {
        id: 5,
        name: 'Thắt lưng nam da cao cấp ',
        code: 'MVN05',
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpfn82x8ovv2a2",
        oldPrice: "19.000 vnđ",
        newPrice: "5.000 vnđ",
    },
    {
        id: 6,
        name: 'Áo sơ mi nam kiểu dáng basic',
        code: 'MVN06',
        image: "https://down-vn.img.susercontent.com/file/sg-11134201-23010-uc3sy3gvivlvbb",
        oldPrice: "199.000 vnđ",
        newPrice: "99.000 vnđ",
    },
]

const resetState = () => {
    document.getElementById('name').value = ''
    document.getElementById('file_input').value = ''
    document.getElementById('code').value = ''
    document.getElementById('old-price').value = ''
    document.getElementById('new-price').value = ''
    document.getElementById('code').value = ''
    document.getElementById('btn-update').classList.add('hidden')
    document.getElementById('btn-create').classList.remove('hidden')
    $("#title").innerHTML = "Thêm sản phẩm"
}

const handleRenderProducts = () => {
    $('#product').innerHTML = ''
    products.forEach((item) => {
        const productZone = $('#product')
        const trTag = document.createElement('tr')
        trTag.classList.add('odd:bg-white', 'even:bg-gray-50', 'border-b')
        trTag.innerHTML = `
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                ${item.id}
            </th>
            <td class="px-6 py-4">
                ${item.code}
            </td>
            <td class="px-6 py-4">
                ${item.name}
            </td>
            <td class="px-6 py-4">
                <img class="rounded-lg w-16 h-16" src="${item.image}" alt="" />
            </td>
            <td class="px-6 py-4">
                ${item.oldPrice}
            </td>
            <td class="px-6 py-4">
                ${item.newPrice}
            </td>
            <td class="px-6 py-4">
                <p class="inline-block mr-3 text-blue-500 cursor-pointer" onclick="handleSetProductToUpdate(${item.id})">Edit</p>
                <p class="inline-block text-red-500 cursor-pointer" onclick="handleDeleteProduct(${item.id})">Delete</p>
            </td>
        `
        productZone.appendChild(trTag)
    })
    resetState()
}

const handleAddProduct = () => {
    const productName = productInfo.name.value
    const productImage = productInfo.file_input.files[0]
    const productOldPrice = productInfo.oldPrice.value
    const productNewPrice = productInfo.newPrice.value
    const productCode = productInfo.code.value
    const productURL = URL.createObjectURL(productImage)

    const newProduct = {
        id: products.length + 1,
        name: productName,
        image: productURL,
        code: productCode,
        oldPrice: productOldPrice,
        newPrice: productNewPrice,
    }
    products.push(newProduct)
    handleRenderProducts()
}

const handleSetProductToUpdate = (productID) => {
    document.documentElement.scrollTop = 0;
    $("#title").innerHTML = "Sửa sản phẩm"
    document.getElementById('btn-update').classList.remove('hidden')
    document.getElementById('btn-create').classList.add('hidden')
    const foundProduct = products.find(product => productID === product.id)
    document.getElementById('name').value = foundProduct.name
    document.getElementById('code').value = foundProduct.code
    document.getElementById('old-price').value = foundProduct.oldPrice
    document.getElementById('new-price').value = foundProduct.newPrice
    document.getElementById('idProductUpdate').value = productID
}

const updateProduct = () => {
    const productID = parseInt($("#idProductUpdate").value)
    const productName = productInfo.name.value
    const productImage = productInfo.file_input.files[0]
    const productOldPrice = productInfo.oldPrice.value
    const productNewPrice = productInfo.newPrice.value
    const productCode = productInfo.code.value

    const foundProduct = products.find(product => productID === product.id)
    const newProduct = {
        id: foundProduct.id,
        name: productName,
        image: productImage ? URL.createObjectURL(productImage) : foundProduct.image,
        code: productCode,
        oldPrice: productOldPrice,
        newPrice: productNewPrice,
    }
    
    products.splice(newProduct.id - 1, 1, newProduct)
    handleRenderProducts()
}

const handleDeleteProduct = (productID) => {
    const productIndex = products.findIndex(product => productID === product.id)
    products.splice(productIndex, 1)
    handleRenderProducts()
}

document.addEventListener('DOMContentLoaded', handleRenderProducts)