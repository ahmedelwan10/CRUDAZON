const formReference = document.getElementById ('sneakers-form')
const purchases = [];
formReference.addEventListener ('submit', function (e) {
e.preventDefault()
console.log ("send data to API")
const nameInput = document.getElementById ('Name')
const descriptionInput = document.getElementById ('description')
const PriceInput = document.getElementById ('Price')
 
const newPurchase = {
    name: nameInput.value,
    description: descriptionInput.value,
    price: PriceInput.value,
    imageUrl:'https://images.app.goo.gl/PKCdQX3hB6d7ZAqH8',
brand: 'Nike',
}
console.log ("here is the object that will be sent to the API", newPurchase)
fetch('https://striveschool-api.herokuapp.com/api/product/', {
     method: 'post',
     body: JSON.stringify(newPurchase),
     headers: {
        'content-type': 'application/json',
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI5MDJhYjEzOWM0MzAwMTg4MTQ1YjYiLCJpYXQiOjE2OTcxODY0NzUsImV4cCI6MTY5ODM5NjA3NX0.SV0LlOMGqNdlvPR-5ZUMmyIGwj-pIekef4L7GDZag5I"
      }
    })
    .then((res )=> {
        console.log ('object response', res)
        if(res.ok) {
            alert('Purchase saved')
        } else {
          alert  ('Purchase not rocessed')
        }
    })
    .catch((err) => {
        console.error('Oops, something went wrong:', err);
      });

})


