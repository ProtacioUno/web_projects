

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
            console.log(spos_each)
            // spos_each.setAttribute('disabled' , 'disabled');
            // spos_each.setAttribute('value' , '') ; 
        });
        // spos.setAttribute('disabled' , 'disabled');
        // spos.setAttribute('value' , '') ; 
        // console.log(spos)
        // spos.forEach
        // spos.forEach(inamers  => {
        //     console.log(inamer);
        // });
        
    } else {
        spos.removeAttribute('disabled');
        spos.removeAttribute('value');
        console.log('hehe not') ;
    }
 
} 
