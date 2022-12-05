

function getNumber (currency){

    return new Promise((resolve,reject)=>{

        if(typeof currency != 'number'){

            reject(new Error('currency is not a number'))

        }else{

            resolve(currency)
        }
    })
}

getNumber(1000).then((val)=>{  //String icinde yazarsak "1000"  cikan sonic Error: currency is not a number

    console.log('val',val)

})