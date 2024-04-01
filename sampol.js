// const fs = require('fs');

// // Read the JSON file
// fs.readFile('sampol.json', 'utf8', (err, jsonString) => {
//     if (err) {
//         console.log('Error reading file:', err);
//         return;
//     }
    
//     try {
//         // Parse JSON string to JavaScript object
//         const jsonData = JSON.parse(jsonString);
        
//         // Accessing person information
//         const person1 = jsonData.person1;
//         const person2 = jsonData.person2;
//         const person3 = jsonData.person3;
        
//         console.log(person1);
//         console.log(person2);
//         console.log(person3);
//     } catch (err) {
//         console.log('Error parsing JSON string:', err);
//     }
// });


fetch('sampol.json').then(response => response.json()).then(data=> {
                // const person1 = data.person1.then( name=>{ console.log(name)});
                // const person2 = data.person2;
                // const person3 = data.person3;

                // // console.log(person1);
                // console.log(person2.name);
                // console.log(person3);          
        
                
        // data.then(shit =>{
        //     console.log(shit)
        // })
        
        
        // console.log()
        let enpot = "person2" ; 
        let enpot_2 = "color" ; 
        let color_type = "primary"
        let color_selected = "pink" ; 
        

        let data_key = Object.keys(data)
        let data_val = Object.values(data) 
        // let data_val = Object.values(data) 

        function object_color(colors){
            let colorxx = colors.color 
            
            // colorsxx.forEach(colorhue )
            // console.log(colorxx);
            
            
            let color_keys = Object.keys(colorxx)
            let color_vals = Object.values(colorxx)

            console.log("color_keys" , color_keys) 
                    
            console.log("color_vals" , color_vals)  
                //  Array [ "primary", "secondary" ]
                

            // console.log(colorxx.color_type);                                  
                // Object { green: "#008000", purple: "#800080", pink: "#FFC0CB", cyan: "#00FFFF" } 


            // console.log(color_vals) 
            

        

            color_keys.forEach((colors, xx)=>{
                if(color_type == colors){
                    console.log(color_keys[xx]);
                    console.log("colors_valx[x]x" , color_vals[xx]);
                    
                    // console.log(xx)
                }
                // console.log(colors) 
                // if(color_type == col)
                // console.log
            })
            
            // return colors.color ; 
        }
        
        
        // console.log(data_key)
        data_key.forEach((data_keyxx , xx)=> {
            if(enpot == data_keyxx){
                                                
                // console.log(data_key)  
                // console.log(data_keyxx)           
                                      
                
                // console.log(data_val) 
                // console.log(data_val[xx]) 
                let data_selectname = data_val[xx] ; 
                
                // console.log(data_selectname.color) 
                object_color(data_selectname)
                let sampol = data_selectname.color ;
                let sampol_key = Object.keys(sampol) ; 
                console.log( "sampoink", sampol_key);
                
                // console.log(sampol)
                // conseol 
                // break ;
                
                                                                
            }
        })
     

        // let names = Object.values(data).map(shu => shu.color) ; 
        // console.log(names) 
        

    

    // let selecteds =  'Alice';  
    
    // if statement namen

    // let valus = Object.values(data);
    // console.log(valus);     
    // console.log("values with[]" , valus[2]);    
    // console.log(valus.name)
   

    // let provc = document.querySelector('#provc_select'); 
    
    // let namekie = 
    // let city = Object.values(data).map(shu => shu.color) ; 
    // let names = Object.values(data).map(shu => shu.name) ; 
    // names.forEach((ngalan , xx) =>{
    //     let option = document.createElement('option'); 
    //     option.setAttribute('value', xx) ; 
    //     option.textContent = ngalan ; 
    //     provc.appendChild(option);                    
    //     // console.log(ngalan)
        
    // })  

    // .then()
    
    // console.log(provc); 

    // document.querySelector('#next').addEventListener('click', ()=>{
        // console.log(provc.value);         
    // }) 
    
    // function getValue() {
        // Get the select element
        
        // let sct = document.querySelector('#mySelect'); 
        // let btn = document.getElementById('hehe');     
        
        // btn.addEventListener('click' , ()=>{
        //     console.log(sct.value);
        // })
        // Get the selected option value
        
        
        // let selectedValue = selectElement.value;

        
        // Log or use the selected value
        // return selectedValue ;
        // console.log('Selected value:', selectedValue);
    // }
    
    


    
    

    // console.log()
    
    // console.log()
    
    
    // console.log(names) ;   
    // let valuss =   valus.map(names => names.name ) ;
    // // console.log(names);

        


        // console.log(x.name);

    // console.log(valus[0].nam e);
    
    
    
    
    
    


    

    
    // console.log(Object.values(valus[0].color))  ; 

    // for (let i = 0; i < numberOfItems; i++) {
        // Create a new list item element
        // let li = document.createElement('li');
        
        // li.textContent = 
        // li.textContent = 'Item ' + (ul.childElementCount + i + 1); // Adjust the text content as needed
        
        // Append the list item to the existing unordered list
        // li.textContent = 
        // ul.appendChild(li);
    // }
        
})
.catch(error => console.error('Error fetching JSON:', error));