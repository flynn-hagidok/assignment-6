// fetch("https://openapi.programming-hero.com/api/categories")
// .then(response => response.json())
// .then(data => console.log(data))

fetch("https://openapi.programming-hero.com/api/categories")
.then(response => response.json())
.then(data => displayCategories(data.categories))

//1. display categories 
const displayCategories = (categories) => {
    // console.log(categories)
    const categoriesDiv = document.getElementById("levelCategories")
    categoriesDiv.innerHTML = ""

    categories.forEach((category) => {
        // console.log(category.category_name)
        const categoryBtn = document.createElement('div')
        categoryBtn.innerHTML = `
            <li class="bg-[#15803D] text-white px-2 py-1 rounded-md cursor-pointer">${category.category_name}</li>
        `
        categoriesDiv.appendChild(categoryBtn)
    })
}