function display() {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then((products) => {
            for (let i = 0; i < products.length; i++) {
                let title = products[i].title
                let description = products[i].description
                let image = products[i].image
                let price = products[i].price

                const row = document.querySelector(".row")
                const div = document.createElement("div")
                div.classList.add("col-12")
                div.classList.add("col-sm-6")
                div.classList.add("col-md-4")
                div.classList.add("col-lg-3")
                div.classList.add("p-2")
                
                
            row.append(div)
            
                div.innerHTML = `<div class="card box">
  <img src="${image}" class="card-img-top img" alt="...">
  <div class="card-body">
    <h5 class="card-title title">${title}</h5>
    <p class="card-text description">${description}</p>
    <p class="card-text price ">$${price}</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div>`
            }

        })


}
display()
