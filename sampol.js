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

    let valus = Object.values(data) 

    console.log(Object.values(valus[0].color)) ; 

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