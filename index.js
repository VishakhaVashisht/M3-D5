window.onload = async() =>{
    const url = " https://striveschool-api.herokuapp.com/api/product/"
   const product =  await getProduct(url)
    console.log(product)
}

const getProduct = async(url)=>{
    try{
        const resp = await fetch(url,{
            method:'GET',
            headers: {
                "content-type":"application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMTQwNTJkNTI2MjAwMTViNmRkYTQiLCJpYXQiOjE2MjkzODI0NzUsImV4cCI6MTYzMDU5MjA3NX0.URiy6e-lDXp4GTMrCT8-P-RMtlHouQGF8gNLKRwTyQw"
                }
        })
        const product =await resp.json()
        displayData(product)

    }
    catch(err){
        console.log('there is an error', err)
    } finally{
        console.log("I'm Last thing.")
    }
}

const displayData = (product)=>{
    let container = document.getElementById('displayProduct')
 container.classList.add('row')
    if(product){
        product.forEach(product =>{
            const div = document.createElement('div');
            div.innerHTML  += `<div class="card">
            <img src="${product.imageUrl}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">
                 ${product.description}
              </p>
            </div>
          </div>`;
          container.appendChild(div)
        })
    }

    else{
        console.log('error')
    }


}

const addData = () => {

}


