
const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;



    displayPhones(phones);

}


const displayPhones = phones => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    const showAllContainer = document.getElementById('show-all-container')

if(phones.length > 10 ){
showAllContainer.classList.remove('hidden');
}
if(phones.length < 10){
    showAllContainer.classList.add('hidden');}





    phones = phones.slice(0,10);

    phones.forEach(phone => {
        console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classlist = `card bg-gray-100 p-4 shadow-xl`;
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}"
        alt="" /></figure>
<div class="card-body">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
    </div>
</div>
        `;
        phoneContainer.appendChild(phoneCard);

    });
    toggleLoading(false);
}
// handle search bar
const handle = () =>{
    toggleLoading(true);
    const searchBox = document.getElementById('search-box');
    const searchText = searchBox.value;
    loadPhone(searchText);
    
    
}
const toggleLoading = (isloading) =>{
    const loadingSpinner = document.getElementById('looping');
    if(isloading){
        loadingSpinner.classList.remove('hidden')
    }
    if(isloading == false){
        loadingSpinner.classList.add('hidden')
    }
}

// loadPhone() 