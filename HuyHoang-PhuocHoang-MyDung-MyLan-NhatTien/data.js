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
    // Lấy ra mấy cái input theo id rồi lấy giá trị nó ra 
    // gán lại thành rỗng (reset lại giá trị)
    document.getElementById('name').value = ''
    document.getElementById('file_input').value = ''
    document.getElementById('code').value = ''
    document.getElementById('old-price').value = ''
    document.getElementById('new-price').value = ''
    document.getElementById('code').value = ''
    // Thay đổi class add (thêm), remove (xoá) cái class hidden là ẩn đi 
    // khi reset thì phải ẩn đi cái nút update và hiện cái nút tạo
    document.getElementById('btn-update').classList.add('hidden')
    document.getElementById('btn-create').classList.remove('hidden')
    // khi reset thì phải đổi cái title lại thành Thêm sản phẩm
    document.getElementById('title').innerHTML = "Thêm sản phẩm"
}

const handleRenderProducts = () => {
    // Reset lại cái table tránh việc hiện 1 sản phẩm 2 lần
    document.getElementById('product').innerHTML = ""
    // Lặp qua cái mảng chưa danh sách sản phẩm
    products.forEach((item, index) => {
        // Lấy ra cái thẻ tbody (chỗ mà mình sẽ hiện sản phẩm)
        const productZone = document.getElementById('product')
        // Tạo ra cái thẻ tr (table row - từng sản phẩm)
        const trTag = document.createElement('tr')
        // Thêm mấy cái tên class của thư viện
        trTag.classList.add('odd:bg-white', 'even:bg-gray-50', 'border-b')
        // Gán cái innerHTML bằng chuỗi html
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
                <p class="inline-block text-red-500 cursor-pointer" onclick="handleDeleteProduct(${index})">Delete</p>
            </td>
        `
        // Nhét cái thẻ tr (đã chứa html vào thẻ tbody)
        productZone.appendChild(trTag)
    })
    // reset lại nội dung trong input của cái form tạo
    resetState()
}

const handleAddProduct = () => {
    // Lấy ra mấy cái value của input trong form
    const productName = productInfo.name.value
    const productImage = productInfo.file_input.files[0]
    const productOldPrice = productInfo.oldPrice.value
    const productNewPrice = productInfo.newPrice.value
    const productCode = productInfo.code.value
    const productURL = URL.createObjectURL(productImage)

    // Tạo một sản phẩm mới
    // id sẽ là độ dài của mảng + thêm 1
    const newProduct = {
        id: products.length + 1,
        name: productName,
        image: productURL,
        code: productCode,
        oldPrice: productOldPrice,
        newPrice: productNewPrice,
    }
    // Nhét thêm sản phẩm mới vào cái mảng sản phẩm
    products.push(newProduct)
    // Gọi hàm này để hiện lại danh sách sản phẩm
    handleRenderProducts()
}

const handleSetProductToUpdate = (productID) => {
    // Cho cái web nó chạy lên đầu mỗi lần nhấn nút update
    document.documentElement.scrollTop = 0;
    // Sửa lại cái title
    document.getElementById('title').innerHTML = "Sửa sản phẩm"
    // Xoá nút tạo thay vào đó là nút cập nhập
    document.getElementById('btn-update').classList.remove('hidden')
    document.getElementById('btn-create').classList.add('hidden')
    // Tìm ra cái sản phẩm trong cái mảng đó
    // Vòng lặp này tìm ra sản phẩm nào có Id bằng id truyền vào (product => productID === product.id)
    const foundProduct = products.find(product => productID === product.id)
    // Sau đó nhét cái giá trị vào mấy cái input trong form
    document.getElementById('name').value = foundProduct.name
    document.getElementById('code').value = foundProduct.code
    document.getElementById('old-price').value = foundProduct.oldPrice
    document.getElementById('new-price').value = foundProduct.newPrice
    // Mỗi form đều có 1 input ẩn (người dùng không thấy input này) 
    // phục vụ cho việc cập nhập vì cần id sản phẩm 
    // gán id sản phẩm này cho input đó
    document.getElementById('idProductUpdate').value = productID
}

const updateProduct = () => {
    // Chuyển đổi kiểu dữ liệu từ cái input ẩn thành số
    // vì trong data id là kiểu int
    const productID = parseInt($("#idProductUpdate").value)
    // Lấy ra mấy cái giá trị của input trong form
    const productName = productInfo.name.value
    const productImage = productInfo.file_input.files[0]
    const productOldPrice = productInfo.oldPrice.value
    const productNewPrice = productInfo.newPrice.value
    const productCode = productInfo.code.value

    // Tìm sản phẩm trong mảng bằng id
    const foundProduct = products.find(product => productID === product.id)
    // Tạo ra sản phẩm mới 
    // Trong này có image dùng toán tử 3 ngôi
    // Nếu mà họ có chọn ảnh để cập nhập thì tạo ra ảnh mới nếu không thì dùng ảnh cũ
    const newProduct = {
        id: foundProduct.id,
        name: productName,
        image: productImage ? URL.createObjectURL(productImage) : foundProduct.image,
        code: productCode,
        oldPrice: productOldPrice,
        newPrice: productNewPrice,
    }
    // Dùng splice để cập nhập
    // products.splice(newProduct.id - 1, 1, newProduct)
    // giải thích hàm -> products.splice(Vị trí bắt đầu, xoá bao nhiêu, thêm vào chỗ vừa xoá cái gì)
    products.splice(newProduct.id - 1, 1, newProduct)
    // Gọi hàm này để hiện lại danh sách sản phẩm
    handleRenderProducts()
}

const handleDeleteProduct = (productID) => {
    // Dùng splice để xoá sản phẩm
    // giải thích hàm -> products.splice(Vị trí bắt đầu, xoá bao nhiêu)
    products.splice(productID, 1)
    // Gọi hàm này để hiện lại danh sách sản phẩm
    handleRenderProducts()
}

// Khi html được hiện thị xong thì gọi cái hàm handleRenderProducts()
// Về cơ bản DOMContentLoaded = onload
document.addEventListener('DOMContentLoaded', handleRenderProducts)