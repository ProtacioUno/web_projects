

let statuss = document.getElementsByName('status');


// statuss.addEventLister('change', ()=>[
//     console.log('hep hep')
// ])

function getValue(){
    let status_value = document.querySelector('input[name="status"]:checked').value;
    // console.log("Selected Gender: " + status_value); 

    
    // You can perform any further actions with the selected value here
    let spos_last = document.querySelector('.spos_last'); 
    let spot_first = document.querySelector('.spot_first'); 

    let spos = document.querySelectorAll('.spos'); 
    
    // console.log(spos[1])
     
    if(status_value =='single'){
        console.log('its singlge');
        
         
    
        // set aatribu to nulls

        spos.forEach(spos_each => {
            spos_each.setAttribute('disabled' , 'disabled');
            spos_each.setAttribute('value' , '') ;  
            console.log(spos_each)
            
        });
        // spos.setAttribute('disabled' , 'disabled');
        // spos.setAttribute('value' , '') ; 
        // console.log(spos)
        // spos.forEach
        // spos.forEach(inamers  => {
            //     console.log(inamer);
            // });
            
        } else {
            spos.forEach(spos_each =>{
                spos_each.removeAttribute('disabled');
                spos_each.removeAttribute('value');
                console.log(spos_each)
        })
        // console.log('hehe not') ;
    }
 
} 

function condog(){
    
    let condo_ask = document.querySelector('input[name="condo"]:checked').value;
    console.log("selectced +" , condo_ask); 
    let build_name = document.querySelector('#build_name') 
    let unit = document.querySelector('#unit') 
    let form_6 = document.querySelector('#form_6')

    if(condo_ask == 'no'){

        build_name.setAttribute('disabled' , 'disabled');
        build_name.setAttribute('value' , '');
        console.log(build_name)
        unit.setAttribute('disabled' , 'disabled');
        unit.setAttribute('value' , '');
        console.log(unit)

        form_6.setAttribute('hidden' , 'hidden')
        // build_nam
    } else {
        
     
        build_name.removeAttribute('disabled');
        build_name.removeAttribute('value'); 
        
        unit.removeAttribute('disabled');
        unit.removeAttribute('value');
        form_6.removeAttribute('hidden');
        console.log(build_name)
        console.log(unit)
    }
}


// var input = document.getElementById("numericInput");

// // Execute a function when the user releases a key on the keyboard
// input.addEventListener("keyup", function(event) {
//   // Cancel the default action, if needed
//   event.preventDefault();
//   // Get the value of the input field
//   var value = input.value;
//   // Remove non-numeric characters using regular expression
//   input.value = value.replace(/\D/g, '');
// });
 
function validateNumberInput(input) {
    // Remove non-numeric characters using regular expression
    input.value = input.value.replace(/\D/g, '');
}