// fetch() 

fetch('src/')

fetch('api/philippine_provinces_cities_municipalities_and_barangays_2019v2.json').then(res => res.json()).then(data => {

    // let dropdown = document.getElementById('dropdown'); 
    
    // dropdown.innerHTML = '';
    
    
    // console.log(data.region_name)
    // console.log(Object.keys(data.region_name)); 
    console.log(Object.keys(data).region_name); 
    console.log(Object.keys(data)[0][region_name]); 
    
    // console.log(data[region_nam])
    // console.log(Object.keys(data)[0][]); 
    // console.log(
    // console.log(Object.keys(data).region_name); 
    

    let province = Object.keys(data); 
    // let ul = document.querySelector('ul#province'); 
    let slect = document.querySelector('select#provc_select'); 
    

    province.forEach(provc =>{
        let option  = document.createElement('option');
        // let a  = document.createElement('a')                 
        option.textContent = provc ; 
        
        // option.classList.add('dropdown-item') ; 
        slect.appendChild(option);  
        // ul.appendChild(li);   
                
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