// fetch() 

fetch('src/')

fetch('api/philippine_provinces_cities_municipalities_and_barangays_2019v2.json').then(res => res.json()).then(data => {

    // let dropdown = document.getElementById('dropdown'); 
    
    // dropdown.innerHTML = '';



    function element_add( lest , parent_div ) {
        
        // must array list 
        lest.forEach((name_lest, index) => { 
            let option = document.createElement('option'); 
            option.setAttribute('values' ,  index) ;
            option.textContent = name_lest ; 
            console.log(name_lest);
            parent_div.appendChild(option) ;
            // parent_div.appendChild(name_lest); 
            // prov_select
        }) 
        // option.setAttribute('values', )        
    }

    
    


    // console.log(data.region_name)
    // console.log(Object.keys(data.region_name)); 
    // console.log(Object.keys(data).region_name); 
    // console.log(Object.keys(data)[0].region_name);
    // let provcc = Object.values(data).map(provs => provs.region_name);   
    let data_val = Object.values(data);
    let data_keys = Object.keys(data);
    let provcc = Object.values(data).map(provs => provs.region_name);   
    let prov_select = document.querySelector('#provc_select'); 
    
    provcc.forEach((proc, index) =>{
        let option = document.createElement('option') ; 
        option.setAttribute('values' , index);
        option.textContent = proc ;        
        prov_select.appendChild(option);                  
    })

    
    prov_select.addEventListener('change' ,()=>{
        // console.log('it change')
        
            // selecting REGION
        let prov_val = prov_select.value ;
        console.log("Selected REgion " + prov_val );  
            // PARENT DIV of district 
        let region_district = document.querySelector('#region_district'); 
        

        
        
        // console.log(prov_);  
        // console.log(data_val); 

        
        a 
        
        data_val.forEach((obj_province , index) =>{
        
            
            // if( 0 < region_district.length ){                
            //     console.log('yes it has');
            //     console.log(region_district.length);
                
            // } else {
            //     console.log('nones ! ');
            //     console.log(region_district.length);
            // }
            
            
            
            // while(region_district.firstChild){
                //     region_district.removeChild(region_district.firstChild);
        // }
            // console.log(obj_province.region_name )
            if (prov_val == obj_province.region_name){
                // console.log(obj_province.province_list); 
                // console.log(Object.values(obj_province.province_list)); 
                // console.log(Object.keys (obj_province.province_list)); 
                let province_list = Object.keys(obj_province.province_list) ; 
            
                console.log(province_list) 
                // province_list.forEach(prov_list => { 
                    //     let option_district =  document.createElement('option');                
                //     option_district.text = prov_list ; 
                //     region_district.appendChild(option_district);
                
                    
                    
                    
                // })

                element_add(province_list ,  region_district); 
                
                
                // console.log(region_district)
                
                // break ;
            }
        }) 
        // console.log(data_val[0].region_name); 
        // console.log(data_keys);  
        
        // let province_list = data[0].region_nam
        // console.log(data_val[1]) ;
        // console.log(province_list);
        
            // selecting region name then if
        // let prov_if = Object.values(data)[0].region_name ; 
        // console.log(zrov_if);
        // console.log(Object.values(data)[0].region_name)
        // prov_if.forEach((prov_f , index) => {
            // if(prov_f == prov_val){
        //         console.log(prov_f) ;
        //         console.log(index) ;
        //         break  ;

            // }
        // }) 
        // if()

        
        
    })
    
    // console.log(prov_select); 
    
    // console.log()
    // console.log(frees[0].region_name) 

    // console.log( provc);  
    
    // console.log( frees.length); 
    
    // console.log(data[region_nam])
    // console.log(Object.keys(data)[0][]); 
// console.log(
    // console.log(Object.keys(data).region_name); 
    

    // let province = Object.keys(data).map(provs => provs.province_name); 
    // console.log(province) 
    // let ul = document.querySelector('ul#province'); 
    // let slect = document.querySelector('select#provc_select'); 
    

    // province.forEach(provc =>{
        // let option  = document.createElement('option');
        // let a  = document.createElement('a')                 
        // option.textContent = provc ;  
        
        // option.classList.add('dropdown-item') ; 
        // slect.appendChild(option);  
        // ul.appendChild(li);   
                
    // }) 
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