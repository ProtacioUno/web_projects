// fetch() 

fetch('src/')

fetch('api/philippine_provinces_cities_municipalities_and_barangays_2019v2.json').then(res => res.json()).then(data => {

    let dropdown = document.getElementById('dropdown'); 
    
    dropdown.innerHTML = '';
    
    data.forEach(item => { 
        const ell = document.querySelector('ul');
        // const option = document.createElement('option');
    //   option.text = item.name; // Assuming the JSON has a "name" property
    //   option.value = item.id;  // Assuming the JSON has an "id" property
    //   dropdown.appendChild(option);
        // console.log(item.name)

        ell.insertAdjacentHTML('beforeend',`<li>${post.region_name}</li>`)
        
        
    });
    // console.log(data); 
    // console.log(data['NCR']); 
})