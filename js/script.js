//Load Categories By ID
const loadCategory = (id) => {
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then(res => res.json())
    .then(data => displayByCategories(data.plants))
}

//All Categories of Fruits and Trees
fetch("https://openapi.programming-hero.com/api/categories")
.then(response => response.json())
.then(data => displayCategories(data.categories))

//1. display categories 
const displayCategories = (categories) => {
    const categoriesDiv = document.getElementById("levelCategories")

    categories.forEach((category) => {
        const categoryBtn = document.createElement('ul')
        categoryBtn.innerHTML = `
            <li onClick="loadCategory(${category.id})" class="categoryItem px-2 py-1 rounded-md cursor-pointer">${category.category_name}</li>
        `
        categoriesDiv.appendChild(categoryBtn)
    })
}

//Display Plants by Categories
const displayByCategories = (categories) => {
    // console.log(categories)
    const plantsContainer = document.getElementById("plants")
    plantsContainer.innerHTML = ""

    categories.forEach((plant) => {
        const plantDiv = document.createElement('div')
        plantDiv.innerHTML = `
            <div class="p-5 space-y-2 bg-white rounded-md flex flex-col">
                <img src="${plant.image}" alt="" class="h-80 w-full rounded-md bg-contain">
                <p class="font-semibold text-[14px]">${plant.name}</p>
                <p class="text-gray-500 text-[12px] text-justify">${plant.description}</p>
                <p class="flex justify-between items-center text-[14px] font-semibold"><span class="text-[#15803D] bg-green-100 rounded-3xl px-3 py-2">${plant.category}</span><span class=""><i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}</span></p>
                <button class="bg-[#15803D] text-white w-full p-2 rounded-3xl font-medium cursor-pointer">Add to
                    Cart</button>
            </div>
        `
        plantsContainer.appendChild(plantDiv)
    })
}

//All Plants
fetch("https://openapi.programming-hero.com/api/plants")
.then(res => res.json())
.then(data => displayPlants(data.plants))

const displayPlants = (plants) => {
    const plantsContainer = document.getElementById("plants")
    plantsContainer.innerHTML = ''

    plants.forEach((plant) => {
        const plantDiv = document.createElement("div")
        plantDiv.innerHTML = `
            <div class="p-5 space-y-2 bg-white rounded-md flex flex-col">
                    <img src="${plant.image}" alt="" class="h-80 w-full rounded-md bg-contain">
                    <p class="font-semibold text-[14px]">${plant.name}</p>
                    <p class="text-gray-500 text-[12px] text-justify">${plant.description}</p>
                    <p class="flex justify-between items-center text-[14px] font-semibold"><span class="text-[#15803D] bg-green-100 rounded-3xl px-3 py-2">${plant.category}</span><span class=""><i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}</span></p>
                    <button class="bg-[#15803D] text-white w-full p-2 rounded-3xl font-medium cursor-pointer">Add to
                        Cart</button>
                </div>
        `
        plantsContainer.appendChild(plantDiv)
    })
}


//when click on All Trees then it will be worked
document.getElementById("allTrees").addEventListener("click", function(){
    fetch("https://openapi.programming-hero.com/api/plants")
    .then(res => res.json())
    .then(data => displayPlants(data.plants))

    const displayPlants = (plants) => {
        const plantsContainer = document.getElementById("plants")
        plantsContainer.innerHTML = ''

        plants.forEach((plant) => {
            const plantDiv = document.createElement("div")
            plantDiv.innerHTML = `
                <div class="p-5 space-y-2 bg-white rounded-md flex flex-col">
                    <img src="${plant.image}" alt="" class="h-80 w-full rounded-md bg-contain">
                    <p class="font-semibold text-[14px]">${plant.name}</p>
                    <p class="text-gray-500 text-[12px] text-justify">${plant.description}</p>
                    <p class="flex justify-between items-center text-[14px] font-semibold"><span class="text-[#15803D] bg-green-100 rounded-3xl px-3 py-2">${plant.category}</span><span class=""><i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}</span></p>
                    <button class="bg-[#15803D] text-white w-full p-2 rounded-3xl font-medium cursor-pointer">Add to
                        Cart</button>
                </div>
        `
        plantsContainer.appendChild(plantDiv)
    })
}
})

//Active Button 
const btnActive = () => {
    const categoryItems = document.querySelectorAll(".categoryItem")
    categoryItems.forEach((items) => items.classList.remove("active"))
}