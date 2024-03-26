


let form_1 = document.querySelector('#form_1'); 
let form_2 = document.querySelector('#form_2'); 
let form_3_single = document.querySelector('#form_3_single');
let form_3_double = document.querySelector('#form_3_married');

next_1 = document.querySelector('#next_1'); 
next_1.addEventListener('click', ()=>{
    // toggle to inactice
    form_1.classList.toggle('inactive'); 

    // toggle to active
    form_2.classList.toggle('inactive'); 
    
    // alert("gumana");  
    
}); 

back_1 = document.querySelector('#back_1') ; 
back_1.addEventListener('click', ()=>{
    // toggle to inactive 
    form_2.classList.toggle('inactive') ;
    
    // toggle to active form_1 
    form_1.classList.toggle('inactive'); 
    console.log(form_2)
    console.log(form_1)
} )


function status_validation(valuess){
    
    // let single = ['single', 'divorce' , ''] 
    // let widowed = a
    // if(!single.includes(valuess)) {
        
    // }
    if(valuess == "single"){
        form_3_single.classList.toggle('inactive');     
        let last_form_3 = valuess ; 
        // fetch_value(/)    
    } else {
        form_3_double.classList.toggle('inactive');
        let last_form_3 = valuess ; 
    }
}



next_2 = document.querySelector('#next_2');
next_2.addEventListener('click', ()=>{
    
    // toggle to inactive 
    form_2.classList.toggle('inactive'); 
    // toggle to active form 3
        // form_3_single.classList.toggle('inactive'); 

    console.log(form_3_single)  ;   
    // console.log(statuss.value) ; 
    // if(ma) 
    // console.log(statuss)    
    let statuss = document.getElementsByName('status')
    // console.log(statuss.value)
    // console.log(statuss[2].value)
    
    for(let x = 0 ; x<= statuss.length ; x++ ) {
        // console.log(statuss[x]); 

        let selected = null ;  
        if(statuss[x].checked){
            
            selected = statuss[x].value;  
            // console.log(selected)
            status_validation(selected) 
            // console.log(typeof selected)
            break;
        }
    }
    // console.log(selected);
})


back_2_ss = document.querySelector('#back_2_ss') ;
back_2_ss.addEventListener('click', ()=>{
    // toggle to inactive 
    form_3_single.classList.toggle('inactive')
    // toggle to active
    form_2.classList.toggle('inactive')    
    console.log('checkings'); 
})

back_2_dd = document.querySelector('#back_2_dd') ;
back_2_dd.addEventListener('click', ()=>{
    // toggle to inactive 
    form_3_double.classList.toggle('inactive')
    // toggle to active
    form_2.classList.toggle('inactive')    
    console.log('checkings'); 
}) 






// back_3 = document.querySelector('#back_3') 
// back_3.addEventListener('click' , ()=>{
//     //toggle to inactive 
//     if(valuess == "single"){
//         form_3_single.classList.toggle('inactive');         
//     } else {
//         form_3_double.classList.toggle('inactive');
//     }
//     // toggle to active
// })


