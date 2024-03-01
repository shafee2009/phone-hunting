
const loadPhone = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;



    displayPhones(phones , isShowAll);

}


const displayPhones = (phones, isShowAll) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    const showAllContainer = document.getElementById('show-all-container')

if(phones.length > 10 && !isShowAll){
showAllContainer.classList.remove('hidden');

}
else{
    showAllContainer.classList.add('hidden');
}
    if(!isShowAll){
    phones = phones.slice(0,10);
        
    }







    phones.forEach(phone => {
        // console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classlist = `card bg-gray-100 p-4 shadow-xl`;
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}"
        alt="" /></figure>
<div class="card-body">
    <h2 id="qq" class="card-title">${phone.phone_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-center">
        <button onclick= "handleShowDetails('${phone.slug}')" 
        class="btn btn-primary">Show Details</button>
    </div>
</div>
        `;
        phoneContainer.appendChild(phoneCard);

    });
    toggleLoading(false);
}
// handle search bar
const handle = (isShowAll) =>{
    toggleLoading(true);
    const searchBox = document.getElementById('search-box');
    const searchText = searchBox.value;
    loadPhone(searchText, isShowAll);
    
    
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
const handleShowAll = () => {
    handle(true);
}
const handleShowDetails = async(id) =>{
    console.log('suuui',id );
    const res = await fetch(`
    https://openapi.programming-hero.com/api/phone/${id}
    
    `);
    const data = await res.json();
    const phone = data.data;
    showPhoneDetails(phone);


}
const showPhoneDetails = (phone) =>{

    // console.log(phone)
    show_details_modal.showModal();
    const phoneName = document.getElementById('phone-name');
    phoneName.innerText = phone.name;


    const showDetailsContainer = document.getElementById('details-container');
    showDetailsContainer.innerHTML = `
    <img src="${phone.image}" />
    <p><span>Storage:</span>${phone?.mainFeatures?.storage}</p>
    <p><span>GPS:</span>${phone?.others?.GPS}</p>

    
    `


}

// loadPhone() 