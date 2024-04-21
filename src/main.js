


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


let back_2_ss = document.querySelector('#back_2_ss') ;
back_2_ss.addEventListener('click', ()=>{
    // toggle to inactive 
    form_3_single.classList.toggle('inactive')
    // toggle to active
    form_2.classList.toggle('inactive')    
    console.log('checkings'); 
})

let back_2_dd = document.querySelector('#back_2_dd') ;
back_2_dd.addEventListener('click', ()=>{
    // toggle to inactive 
    form_3_double.classList.toggle('inactive')
    // toggle to active
    form_2.classList.toggle('inactive')    
    console.log('checkings'); 
}) 

// let next_3 = document.querySelector('#next_3');  
let BAYOT = document.querySelector('#BAYOT');  
// let next_3_dd = document.querySelector('#next_3_dd');  
let form_4 = document.querySelector('#form_4')  ;

next_3.addEventListener('click' , ()=>{
    // toggle inactive  
    console.log('im workign shits')
    // console.log(next_3_dd)
    if(next_3_dd.classList.contains('ddd')) {
      console.log('im maried')  ;  
        form_3_double.classList.toggle('inactive'); 
    } else {
        console.log('im ss') ;
    }
    
    // if(next_3.value == )
    
    
    // form_3_single.classList.toggle('inactive');
    
    // toggle actinve 
    form_4.classList.toggle('inactive');
})



// let ask_build = document.querySelector('#ask_build');
let yes = document.querySelector('#yes');
let no = document.querySelector('#no');
let build_form = document.querySelector('#build_form'); 
    let unit = document.querySelector('#unit'); 
    let build_name = document.querySelector('#build_name'); 

// ask_build.addEventListener('click')



yes.addEventListener('click' , ()=>{
    build_form.classList.remove('inactive');
    unit.removeAttribute('readonly');
    build_name.removeAttribute('readonly');
    console.log(unit)
    
})

no.addEventListener('click' , ()=>{    
    build_form.classList.add('inactive');     
    unit.setAttribute('value', 'NULL') ;
    build_name.setAttribute('value', 'NULL') ;
    unit.setAttribute('readonly' , 'readonly') ;     
    build_name.setAttribute('readonly' , 'readonly') ;     
    console.log(unit)
}) 




let next_3_ss = document.querySelector('#next_3_ss'); 
// let form_4 = document.querySelector('#form_4'); 

let form_four = document.querySelector('#form_4');

next_3_ss.addEventListener('click' , ()=> {
    // togggle to inactiv 
    console.log('im workignS')
    form_3_single.classList.toggle('inactive');
    // tooggle to active
    form_four.classList.toggle('inactive');    
    
    let from_status = 'single' ; 
    
})

let back_4 = document.querySelector('back_4');

back_4.addEventListener('click' , ()=>{
    // if(from_status == 'single'){
        // toggle to inactive
         form_four.classList.toggle('inactive'); 
         
         // tovggle to active
         form_3_single.classList.toggle('inactive'); 
    // }
    
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


