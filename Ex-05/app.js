const $ = document.querySelector.bind(document)

const womenItems = [
    {
        id: 1,
        name: 'QUẦN JEAN ỐNG RỘNG',
        image: "https://down-vn.img.susercontent.com/file/5990e680119e2cb0933685d6f54e6d69",
        oldPrice: "190.000 vnđ",
        newPrice: "125.000 vnđ",
    },
    {
        id: 2,
        name: 'Áo thun nữ croptop tay cộc',
        image: "https://down-vn.img.susercontent.com/file/d99e4655f596afbfe59873986cf12ceb",
        oldPrice: "58.000 vnđ",
        newPrice: "46.400 vnđ",
    },
    {
        id: 3,
        name: 'Quần thun gân ống rộng',
        image: "https://down-vn.img.susercontent.com/file/35396454870f1a9d08833d2749b24760",
        oldPrice: "70.000 vnđ",
        newPrice: "49.000 vnđ",
    },
    {
        id: 4,
        name: 'Tất cổ cao nam nữ',
        image: "https://down-vn.img.susercontent.com/file/6d22ad751dfa4700a0934ed452f0834c",
        oldPrice: "14.000 vnđ",
        newPrice: "6.000 vnđ",
    },
    {
        id: 5,
        name: 'Quần Thun tăm ống rộng',
        image: "https://down-vn.img.susercontent.com/file/870437a63efdd083b0ecbe0349401217",
        oldPrice: "76.000 vnđ",
        newPrice: "29.000 vnđ",
    },
    {
        id: 6,
        name: 'Balo nữ đi học đi chơi',
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lrpp3w9wy7x5cb",
        oldPrice: "186.000 vnđ",
        newPrice: "93.000 vnđ",
    },
]

const menItems = [
    {
        id: 1,
        name: 'Quần jean nam baggy',
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lozgjkstcevid6",
        oldPrice: "318.000 vnđ",
        newPrice: "175.000 vnđ",
    },
    {
        id: 2,
        name: 'Quần Nam Trơn Bo Gấu',
        image: "https://down-vn.img.susercontent.com/file/b6adfd12eb3e66046fc500483c0f3092",
        oldPrice: "106.000 vnđ",
        newPrice: "93.400 vnđ",
    },
    {
        id: 3,
        name: 'Áo Thun Polo Nam BL Fashion',
        image: "https://down-vn.img.susercontent.com/file/sg-11134201-23010-zvs6p52ndwmve6",
        oldPrice: "150.000 vnđ",
        newPrice: "28.000 vnđ",
    },
    {
        id: 4,
        name: 'Áo Polo Nam Cổ Bẻ Thun',
        image: "https://down-vn.img.susercontent.com/file/743050d3c10a59f1b911810ead366116",
        oldPrice: "69.000 vnđ",
        newPrice: "29.000 vnđ",
    },
    {
        id: 5,
        name: 'Thắt lưng nam da cao cấp ',
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpfn82x8ovv2a2",
        oldPrice: "19.000 vnđ",
        newPrice: "5.000 vnđ",
    },
    {
        id: 6,
        name: 'Áo sơ mi nam kiểu dáng basic',
        image: "https://down-vn.img.susercontent.com/file/sg-11134201-23010-uc3sy3gvivlvbb",
        oldPrice: "199.000 vnđ",
        newPrice: "99.000 vnđ",
    },
]

const newItems = [
    {
        id: 1,
        name: 'Siêu thị điện tử',
        desc: 'Bán đồ điện tử',
        banner: "https://cf.shopee.vn/file/vn-50009109-01432bab5529b29f7a9c77147b4b9905_xxhdpi"
    },
    {
        id: 2,
        name: 'Ưu đãi mở mới',
        desc: 'Ưu đãi mở mới mỗi ngày',
        banner: "https://cf.shopee.vn/file/vn-50009109-64660f8d9cbb17f00a41b167dc3a7ede_xxhdpi"
    },
    {
        id: 3,
        name: 'Du xuân giáp thìn',
        desc: 'Du xuân giáp thìn săn deal linh đình',
        banner: "https://cf.shopee.vn/file/vn-50009109-6178575b8593af931fe56b5bbe2c0a88_xxhdpi"
    },
    {
        id: 4,
        name: 'Lộc đầu năm mới',
        desc: 'Lộc đầu năm mới lộc deal siu hời',
        banner: "https://cf.shopee.vn/file/vn-50009109-38c78cb3127add3d2d565fb1ca33567a_xxhdpi"
    },
]

const handleRenderProducts = () => {
    womenItems.forEach((item) => {
        const womenZone = $('#women')
        const liTag = document.createElement('li')
        liTag.classList.add('col-1', 'max-w-sm', 'bg-white', 'border', 'border-gray-200', 'rounded-lg', 'shadow')
        liTag.innerHTML = `
            <img class="rounded-t-lg" src="${item.image}" alt="" />
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 ">${item.name}</h5>
                </a>
                <p class="mb-5 font-normal text-gray-700 flex items-center justify-start gap-12">
                    <span>${item.newPrice}</span>
                    <span class="line-through">${item.oldPrice}</span>
                </p>
                <button
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-100"
                >
                    Mua ngay
                </button>
            </div>
        `
        womenZone.appendChild(liTag)
    })

    menItems.forEach((item) => {
        const menZone = $('#men')
        const liTag = document.createElement('li')
        liTag.classList.add('col-1', 'max-w-sm', 'bg-white', 'border', 'border-gray-200', 'rounded-lg', 'shadow')
        liTag.innerHTML = `
            <img class="rounded-t-lg" src="${item.image}" alt="" />
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 ">${item.name}</h5>
                </a>
                <p class="mb-5 font-normal text-gray-700 flex items-center justify-start gap-12">
                    <span>${item.newPrice}</span>
                    <span class="line-through">${item.oldPrice}</span>
                </p>
                <button
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-100"
                >
                    Mua ngay
                </button>
            </div>
        `
        menZone.appendChild(liTag)
    })

    newItems.forEach((item) => {
        const newsZone = $('#news')
        const liTag = document.createElement('li')

        liTag.classList.add('flex', 'flex-col', 'items-center', 'bg-white', 'border', 'border-gray-200', 'rounded-lg', 'shadow', 'md:flex-row', 'md:max-w-xl', 'hover:bg-gray-100')
        liTag.innerHTML = `
            <img 
                class="object-cover h-full  w-48 rounded-s-lg"
                src="${item.banner}" 
                alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    ${item.name}
                </h5>
                <p class="mb-3 font-normal text-gray-700">
                    ${item.desc}
                </p>
            </div>
        `
        newsZone.appendChild(liTag)
    })
}

document.addEventListener('DOMContentLoaded', handleRenderProducts)