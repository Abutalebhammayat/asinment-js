// 1. Convert radian to degree -------------->


function radianToDegree(radians){
    const convator = radians * 57.2958 ;
    return convator.toFixed(2);
}

const myRadian = 0 ;
const totalRadian = radianToDegree(myRadian) ;
console.log(parseFloat(totalRadian)) ;


// <-------------- convert radian to degree 




// 2. Check whether the given file name is a javascript file or not -------------->



function isJavaScriptFile(filename){
    const name = ".js" ;
    const search = filename.includes(name) ;
    return search ;
}

const file = 'google.pdf' ;
const main = isJavaScriptFile(file) ;
console.log(main) ;



// <-------------- check whether the given file name is a javascript file or not







// 3. Calculate the total oil price that I have to pay -------------->

function oilPrice(dieselPrice, petrolPrice, octanePrice){
    const diesel = 114 ;
    const petrol = 113 ;
    const octane = 135 ;

    
    
    const dieselPriceMake = dieselPrice *diesel ; 
    const petrolPriceMake = petrolPrice * petrol ; 
    const octanePriceMake = octanePrice * octane ; 

    const total =dieselPriceMake + petrolPriceMake + octanePriceMake ;
    return total ;
}
 
const totalePrice = oilPrice(1, 3, 5) ;
console.log(totalePrice );




// <-------------- Calculate the total oil price that I have to pay









// 4.public bus



function publicBusFare(sumNumber){
    for(let busRemainng = 50 ; busRemainng < sumNumber ; ){
        sumNumber = sumNumber - busRemainng;
    }

    for(let microbus = 11 ; microbus < sumNumber ;){
        sumNumber = sumNumber - microbus;
    }
    return sumNumber * publicCost;
}
const publicCost = 250 ;
const mans = 0 ;
const results = publicBusFare(mans) ;
console.log(results) ;




// 5. Best Friend  -------------->
  function isBestFriend(personOne, persontow){
    if(personOne.name === persontow.friend && persontow.name === personOne.friend){
        return true ;
    }
    else{
        return false ;
    }

  }
  const best =[
    {name:'', friend: '' },
    {name:'', friend: '' }
  ]
 best[0] 
best[1] 
const result =isBestFriend( best[0] , best[1])
console.log(result) ;






 // ------------------End----------------//