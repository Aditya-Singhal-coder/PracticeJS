let form = document.querySelector('form');
form.addEventListener('submit' , function(e){
    e.preventDefault()// khud se kuch bhi n kro

    const h = parseInt(document.querySelector('#height').value);
    const w = parseInt(document.querySelector('#weight').value);
    const r = document.querySelector('#results');
    // some checks required so that code work properly
    if(h === '' || h<0 || isNaN(h)){
        r.innerHTML = "Please give a valid height"
    }
    else if(w === '' || w<0 || isNaN(w)){
        r.innerHTML = "Please give a valid weight"
    }
    else{
       let bmi =  (w / ((h*h)/10000)).toFixed(2); // upto 2nd decimal
       // show the result
       let extraInfo = "under"
       if(bmi>0 && bmi <= 18.6){
            extraInfo = "Under Weight"
       }
       else if(bmi>18.6 && bmi<=24.9){
            extraInfo = "Normal Weight"
       }
       else{
            extraInfo = "Over Weight"
       }
       r.innerHTML = '<span>${bmi} and your weight lies in ${extraInfo}</span>';
    }
});
