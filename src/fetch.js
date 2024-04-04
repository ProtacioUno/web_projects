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
            // console.log(name_lest);
            parent_div.appendChild(option) ;
            // parent_div.appendChild(name_lest); 
            // prov_select
        }) 
        // option.setAttribute('values', )        
    }

    function element_add(list, index , parent_div){
        let option = document.createElement('option') ; 
        option.setAttribute('values', index);
        option.textContent = list ;  
        parent_div. appendChild(option);
        
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

        if( region_district.length > 0 ){                
            console.log('yes it has');
            console.log(region_district.length); 
            // must remote all child elements
             
            while(region_district.firstChild){
                region_district.firstChild.remove();
                console.log("remove");
            } 
            // if(region_district.firstChild){
                //  console.log("it exist"); 
            // } else {
            
            // }            
            // console.log(`first childs ${region_district.firstChild}`)
            // console.log(region_district)            
        } else {
            console.log('nones ! ');
            // console.log(region_district.length); 
            console.log(region_district)
        }

        
        // console.log(prov_);  
        // console.log(`this is data VAL ${data_val}`);     
        data_val.forEach((obj_province , index) =>{
          
            // while(region_district.firstChild){
                //     region_district.removeChild(region_district.firstChild);
        // }
            // console.log(obj_province.region_name )
            
            if (prov_val == obj_province.region_name){
                // console.log(obj_province.province_list); 
                // console.log(Object.values(obj_province.province_list)); 
                // console.log(Object.keys (obj_province.province_list)); 
                let province_lists = Object.keys(obj_province.province_list) ; 
                let province_valsss = Object.values(obj_province.province_list) ; 
                // console.log("vallsss" , province_valsss.municipality_list);
                console.log("municipality" , province_valsss[0]);
                console.log("municipality objt" , Object.values(province_valsss[0]));
                console.log("municipality keys" , Object.values(Object.values(province_valsss)));
                console.log("municipality keys with [0]" , Object.values(Object.values(province_valsss[1])));
                // console.log("municipality keys" , Object.values(province_valsss[0]).municipality_list);
                // console.log("municipality keys" , Object.values(province_valsss[0]).municipality_list);
               
                // console.log(`province list ${province_list}`) ; 
                // province_list.forEach(prov_list => { 
                    //     let option_district =  document.createElement('option');                
                    //     option_district.text = prov_list ; 
                    //     region_district.appendChild(option_district);                                                    
                    // })
                    
                    element_add(province_lists ,  region_district); 
                                                    
                    region_district.addEventListener('change', ()=>{

                        let district_val = region_district.value ;            
                        // console.log("distict_val in form :", region_district.value) ;
                        
                        let District = Object.values(province_lists) ;
                        // console.log("District vals from object" , District); 
                        
                        // [Distirct1 , district2 , distric3]
                        District.forEach(distri =>{
                            
                            
                            if(district_val == distri) { 
                                
                                province_valsss.forEach( provs_vals =>{
                                    console.log(provs_vals) 
                                    console.log(Object.values(provs_vals))                
                                    
                                } )
                                                                
                                // console.log(District.municipality_list)
                                // console.log(Object.values(distri))
                                // console.log(District[0])
                                // region_district[]                                
                                // return list of provinct
                                // console.log(province_lists)                                                               
                            }
                            // console.log( "Distrcit", municipal); 
                            
                        })
                        // if(district_val == )
                        


                        
                        
                        
                    })
                    
                    
                }
            }) 
            
            
        })
        
    //     region_district.addEventListener('change', ()=>{
            
    //         let district_val = region_district.value ;            
    //         console.log("distict_val ", region_district.value) ;
            
    //         // console.log(data_val) ;
            
    //         data_val.forEach((obj_province , index) =>{                  
    //             console.log("obg_province", Object.values(obj_province.province_list)) 
    //             console.log("provice_list", obj_province.province_list) 
    //             console.log("provice_list", Object.keys(obj_province.province_list)) 

                
                                
    //             // console.log("kes", Object.values(obj_province). ) 
                
    //             // if(district_val ==  obj_province.province_list){
    //             //     console.log("it work")
    //             // } 
    //         })
    //         // let province_list = Object.keys(obj_province.province_list) ; 
        
    //     // IF(district_val == prov_lsit)
        
    //     // console.log( "prov_list", province_list) 
        

    // })



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