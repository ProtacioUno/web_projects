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
                // const person1 = data.person1;
                // const person2 = data.person2;
                // const person3 = data.person3;

                // console.log(person1);
                // console.log(person2.name);
                // console.log(person3);                
    // console.log(data);             
    // console.log(Object.keys(data));             
    // let firstt = Object.keys(data)
    // console.log(typeof data);                     
    // let ul = document.querySelector('ul');      
    
    // li.textContent = 'First item' ; 
    // ul.append(li); 
    
    // firstt.forEach(titles => {      
    //     // console.log(titles);                 
    //     let li = document.createElement('li');  
    //     li.textContent = titles ;         
    //     // console.log(ul.childElementCount)
    //     ul.appendChild(li);                  
    // }); 

    // firstt.forEach(x => {
    //     // let li_  x = "sampoink" ;          
    // })
    // let numberOfItems = 3 ; 

    // let valus = Object.values(data) 

    
    // console.log(Object.values(valus[0].color)) ;
            // Array [ "blue", "white" ]
            // 0: "blue"
            // 1: "white"
            // length: 2

    // maganda if selecting to dropdown
    // let city = Object.values(data).map(shu => shu.color) ; 
    // console.log(city);
    
    
     
    let selecteds =  'Alice';  
    
    // if statement namen

    let valus = Object.values(data);
    
    // console.log(valus.name)
    
    // valus.forEach(x => {
    //     if(selecteds  == x.name) {            
            
    //         // console.log(x.color) 
    //     } 


    let provc = document.querySelector('#provc_select'); 
    
    // let namekie = 
    // let city = Object.values(data).map(shu => shu.color) ; 
    let names = Object.values(data).map(shu => shu.name) ; 
    names.forEach((ngalan , xx) =>{
        let option = document.createElement('option'); 
        option.setAttribute('value', xx) ; 
        option.textContent = ngalan ; 
        provc.appendChild(option);            

        
        // console.log(ngalan)
    })  
    
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