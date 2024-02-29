const loadPhone = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089');
    const data = await res.json();
    const phones = data.data;
    
    
    console.log(phones)
    displayPhones(phones);

}


const displayPhones = phones =>{
    phones.forEach(phone =>{
        console.log(phone)
    })
}

loadPhone()