// fetch() 

fetch('src/')

fetch('api/philippine_provinces_cities_municipalities_and_barangays_2019v2.json').then(res => res.json()).then(data => {

    // let dropdown = document.getElementById('dropdown'); 
    
    // dropdown.innerHTML = '';
    
    
    console.log(Object.keys(data)); 
    

    let province = Object.keys(data); 
    // let ul = document.querySelector('ul#province'); 
    let ul = document.querySelector('ul#dropdown-menu'); 

    province.forEach(provc =>{
        let li  = document.createElement('li');
        let a  = document.createElement('a')                 
        li.appendChild(a); 
        a.textContent = provc ; 
        a.classList.add('dropdown-item') ;
        ul.appendChild(li);     
                
    }) 
    // data.forEach(item => { 
    //     const li = document.querySelector('li');
        
        
        // const option = document.createElement('option');
    //   option.text = item.name; // Assuming the JSON has a "name" property
    //   option.value = item.id;  // Assuming the JSON has an "id" property
    //   dropdown.appendChild(option);
        // console.log(item.name)

        // ell.insertAdjacentHTML('beforeend',`<li>${post.region_name}</li>`)
        
        
    // });
    // console.log(data); 
    // console.log(data['NCR']); 
})