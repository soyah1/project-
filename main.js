const categoryTitle = document.querySelectorAll('.category-title');
const allCategoryPosts = document.querySelectorAll('.all');
for(let i = 0; i < categoryTitle.length; i++){
    categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
}

function filterPosts(item){
    changeActivePosition(item);
    for(let i = 0; i < allCategoryPosts.length; i++){
        if(allCategoryPosts[i].classList.contains(item.attributes.id.value)){
            allCategoryPosts[i].style.display = "block";
        }
        else{
            allCategoryPosts[i].style.display = "none";
        }
    }
}
function changeActivePosition(activeItem){
    for(let i = 0; i < categoryTitle.length; i++){
        categoryTitle[i].classList.remove('active');
    }
    activeItem.classList.add('active');
};



const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement  = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    }
    if (password.value.length <= 6) {
        messages.push('Password must be longer than 6 caracters')
    }
    if (password.value.length >= 20) {
        messages.push('Password must be less than 20 caracters')
    }
    if (password.value === 'password') {
        messages.push('Password cannot be password')
    }
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})
