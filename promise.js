const janji = new Promise((resolve, reject)=>{
    
    const ditunaikan = true
    // setTimeout(()=>{
        if(ditunaikan){
            resolve('janji ditunakan')
        }else{
            reject('janji tidak ditunakan')
        }
    // }, 2000)
})

janji
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log('error disini')
    console.log(err)
})