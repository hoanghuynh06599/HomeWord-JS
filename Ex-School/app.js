// Bài về nhà: thực hiện click vào 1 ô vuông xuất hiện một nội dung bất kỳ.

const listRender = document.getElementById('list-render')
const fakeParagraph = document.getElementById('fake-paragraph').value

const handleGenerationText = () => {
    const startIndex = Math.floor(Math.random() * fakeParagraph.length)
    const endIndex = Math.floor(Math.random() * fakeParagraph.length)
    alert(fakeParagraph.substring(startIndex, endIndex))
}

for (let i = 0; i < 50; i++) {
    const liTag = document.createElement('li')
    liTag.classList.add('w-10', 'h-10', 'bg-yellow-400', 'col-1', 'cursor-pointer')
    liTag.onclick = handleGenerationText
    listRender.appendChild(liTag)
}