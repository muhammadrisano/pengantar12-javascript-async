// const sayHelo = (nama)=>{
//     console.log(`helo nama sayan adalah ${nama}`)
// }

// const coba = sayHelo

// coba('risano')

const pengabunganNama = (firstName, lastName, callback) =>{
    if(typeof(firstName) !== 'string' || typeof(lastName) !== 'string'){
        return callback('firstName atau latname harus string', null)
    }
    setTimeout(()=>{
        const result = firstName + ' ' + lastName
        callback(null, result)
    },2000)
}

const printNamaLengkap = (error, result)=>{
    if(error){
        return console.log(error)
    }
    console.log(`hasil penggabungan nama adalah ${result}`)
}
pengabunganNama('risano', 'test', printNamaLengkap)