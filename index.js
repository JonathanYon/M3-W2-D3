


// const getData = async (url) => {

    

    
//     try {

//         const respo = await fetch(url, {
//             method: "GET",
//             headers: {
//             "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjBjNGIzNTgxNzAwMTVjMjI3MGQiLCJpYXQiOjE2MjUwNTU0MjgsImV4cCI6MTYyNjI2NTAyOH0.sK7YEMPt-TWTjKV0e9vzNxLJCKX5zhbAYRIxCPheR2g",
//             "content-type": "application/json"
//             },
            
//             // body: 
//         })
//         const data = await respo.json()
//         console.log(data)

        

       
       
//     } catch (err) {
//         console.log(err)
//     } finally {
//         console.log("this is happening")
//     }
// }

// window.onload = async () => {
//     const url = "https://striveschool-api.herokuapp.com/api/product/"
//     getData(url)

    
// }


// *******************************************************************************************************************

// const getData = async (event) => {
//     const url = "https://striveschool-api.herokuapp.com/api/product/"
    

//     // let form = document.getElementById("form")
//     // form.addEventListener("submit", (e) => {
//         event.preventDefault()

//         let myForm = {
//             name: document.getElementById("name").value,
//             description: document.getElementById("description").value,
//             brand: document.getElementById("brand").value,
//             imageUrl: document.getElementById("img").value,
//             price: document.getElementById("price").value
//         }

//     // })





//     try {
//         const respo = await fetch(url, {
//             method: "POST",
//             body: JSON.stringify(myForm),
//             headers: {
//                 "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjBjNGIzNTgxNzAwMTVjMjI3MGQiLCJpYXQiOjE2MjUwNTU0MjgsImV4cCI6MTYyNjI2NTAyOH0.sK7YEMPt-TWTjKV0e9vzNxLJCKX5zhbAYRIxCPheR2g",
//                 "content-type": "application/json"
//             }
            

            
//         })
//         if (respo.ok){
//         const data = await respo.json()
//         let alert = document.querySelector(".alert")
//         let para = document.createElement("p")
//         para.classList.add("text-success")
//         para.innerText = `You submitted successfully ${data.id}`
//         console.log(data)
//     } else{
//         if (respo.status >= 400 && respo.status < 500) {
//             throw new Error(
//               "User generated error, verify the data that you are sending"
//             );
//           } else if (respo.status >= 500 && respo.status < 600) {
//             throw new Error(
//               "Server generated error, contact the admin to fix this"
//             );
//           }
//     }
//     } catch (err) {
//         console.log(err)
//     }
// }




