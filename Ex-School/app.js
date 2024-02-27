var courses = ["HTML", "CSS", "JavaScript", "PHP"]
let isFound = false

for (let i = 0; i < courses.length; i++) {
    if(courses[i] === 'PHP') {
        isFound = true
        break
    }
}

alert(isFound)
