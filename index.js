const latestPurchases = function (arrayOfPurchases) {
    const row = document.getElementById('sneakers-row');

  
    for (let i = 0; i < Math.min(4, arrayOfPurchases.length); i++) {
        const purchase = arrayOfPurchases[i];

        const newCol = document.createElement('div');
        newCol.classList.add('col', 'col-12', 'col-sm-6', 'col-md-3');
        newCol.innerHTML = `
            <div class="card">
                <img src="${purchase.imageUrl}" class="card-img-top" alt="authentic sneakers">
                <div class="card-body">
                    <h5 class="card-title">${purchase.name}</h5>
                    <p class="card-text">${purchase.description}</p>
                    <p class="card-text">Price: $${purchase.price}</p>
                    <a href="./details.html" class="btn btn-primary"> Details </a>
                </div>
            </div>
        `;

        row.appendChild(newCol);
    }
};

const getProducts = function () {
    fetch('https://striveschool-api.herokuapp.com/api/product/', {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI9-W84EDFQAAAAAdAAAAABAE" 
        }
    })
    .then((res) => {
        if (!res.ok) {
            return res.json();
        } else {
            return [];
        }
    })
    .then((purchases) => {
        latestPurchases(purchases);
    })
    .catch((err) => {
        console.error('Oops, something went wrong:', err);
    });
};

getProducts();
