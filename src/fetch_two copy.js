fetch('src/')

fetch('api/philippine_provinces_cities_municipalities_and_barangays_2019v2.json').then(res => res.json()).then(data => {
    
    let region_val = "NCR"
    let district_val = "NATIONAL CAPITAL REGION - SECOND DISTRICT"  
    let municipal_val = "CITY OF MARIKINA"

    
    let data_key = Object.keys(data)
    let data_val = Object.values(data)
    // console.log("data_key",data_key)
    // console.log("data_val",data_val)
    
    
    function element_add(list, index , parent_div){
        let option = document.createElement('option') ; 
        option.setAttribute('values', index);
        option.textContent = list ;  
        parent_div.appendChild(option);
        // console.log(parent_div)
        
    }


    // console.log("data_val",data_val[0])
    
    data_val.forEach(( region_list, xx)=>{
        
        let region_name = region_list.region_name; 
        // console.log("region_name" , region_name); 
        // region_name NCR , 
        // region_name REGION V , 
        // region_name REGION VI , 

        let provc_select = document.querySelector('#provc_select'); 

        element_add(region_name , xx ,  provc_select )
        
        provc_select.addEventListener('change' , ()=>{
            
            let region_val_val =  document.querySelector('#provc_select').value; 
            // console.log("it changes");
            console.log( "region_val_val", region_val_val) ;
            
            
            if(region_val ==  region_name){
                
                let district_list = data_val[xx].province_list ; 
                console.log("region data" , district_list )  ; 
                console.log("region data[0]" , district_list )  ; 
                
                let district_list_keys = Object.keys(district_list);
                let district_list_val = Object.values(district_list);
                
                // must add to 
                console.log("district_key" , district_list_keys)
                //  [ "NATIONAL CAPITAL REGION - FOURTH DISTRICT", "NATIONAL CAPITAL    REGION - MANILA", "NATIONAL CAPITAL REGION - SECOND DISTRICT"]
                
                
                console.log("district_val" , district_list_val)  
                // console.log("district_val" , district_list_val[0])
                
                district_list_keys.forEach((district_key , xx) =>{
                    // console.log()
                    // let  district_val_input = 
                    
                    
                    if(district_val ==  district_key){
                        
                        console.log( "district_key", district_key) ;
                        let district_val = district_list_val[xx]
                        console.log(district_list_val[xx]) ; 
                        
                        let municipality_key = Object.keys(district_val);
                        let municipality_val = Object.values(district_val);
                        
                        console.log("municipalit_key" , municipality_key) ; 
                        console.log("municipalit_val" , municipality_val) ; 
                        
                        
                        municipality_val.forEach((municipal_list , ii) =>{
                            console.log("Municipil_each" ,municipal_list)  
                            
                            let municipal_key_val = Object.keys(municipal_list) ;
                            console.log("municipality_list", municipal_key_val) 
                            // [ "CITY OF MANDALUYONG", "CITY OF MARIKINA", "CITY OF PASIG", "QUEZON CITY", "SAN JUAN CITY" ]
                            
                            municipal_key_val.forEach(munip_val =>{
                                if( municipal_val == munip_val){
                                    // console.log(munip_val); 
                                }
                            })
                            // if(municipal_val == municipal_list ){
                                // console.log(municipal_list);
                                // }
                                
                            })
                            // console.log("municipalit_val[0]" , municipality_val[xx]) ;
                            // 
                            
                            // console.log("municipalit_val[0]" , Object.keys(municipality_val[0])) ;
                            // let municipal_key_key = Object.keys(municipality_val[0]);
                            
                            // console.log(municipal_key_key)
                            
                            
                            // console.log()
                            
                            
                        }
                    })
                    
                    // console.log("data_val" , district_list_val) 
                    // console.log("data_val" , district_list_val) 
                    
                    
                }
                
                
                
                
            })
            
            
        })
            
            
            
            
        }) ;
        