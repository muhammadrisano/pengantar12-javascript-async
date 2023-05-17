// const ajax = new XMLHttpRequest()
// ajax.open('GET', 'https://jsonplaceholder.typicode.com/users')
// ajax.send()

// ajax.onreadystatechange = ()=>{
//     if(ajax.status === 200){
//         const result = JSON.parse(ajax.responseText)
//         console.log(result)
//     }else{
//         console.log('ada error bro....')
//     }
// }

// const getDataAjax = (method, url, callback)=>{
//     const ajax = new XMLHttpRequest()
//     ajax.open(method, url)
//     ajax.send()
    
//     ajax.onreadystatechange = ()=>{
//         if(ajax.status === 200){
//             const result = JSON.parse(ajax.responseText)
//             callback(result)
//         }else{
//             console.log('ada error bro....')
//         }
//     }    
// }

const getDataAjax = (method, url)=>{
    return new Promise((resolve, reject)=>{
        const ajax = new XMLHttpRequest()
        ajax.open(method, url)
        ajax.send()
        
        ajax.onreadystatechange = ()=>{
            if(ajax.status === 200){
                const result = JSON.parse(ajax.responseText)
                resolve(result)
            }else{
                reject('ada error bro....')
                // console.log('ada error bro....')
            }
        }    
    })
   
}

getDataAjax('GET', 'https://jsonplaceholder.typicode.com/userss')
.then((res)=>{
    res.map((item)=>{
        console.log(item.name)
    })
})
.catch((err)=>{
    console.log(err)
})
// getDataAjax('GET', 'https://jsonplaceholder.typicode.com/users', (result)=>{
//     result.map((item)=>{
//         console.log(item.nama)
//     })
// })