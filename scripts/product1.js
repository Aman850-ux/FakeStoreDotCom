async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
 

    const products = data;
    let productList = document.getElementById("ProductList");

    products.forEach((element) => {

            let rating = element.rating?.rate || "N/A";
            let count = element.rating?.count || "0";

        let d= document.createElement("div");
        d.classList.add("row", "border", "border-dark",  "rounded", "shadow", "p-3");
        d.innerHTML = `
        <div class="row border border-dark rounded shadow p-3">
          <div class="col-3 border border-danger">
            <img
              src=${element.image}
              alt="ProductImage"
              width="100%"
              class="object-fit-cover"
            />
          </div>
          <div class="col-9 border border-success p-4">
            <h2>${element.title}</h2>
            <span class="fs-6"><b>Category:</b> ${element.category}</span>
            <div class="d-grid mt-4">
              <span class="text-danger">Limited Time Deal... Hurry Up!!!</span>
              <span class="fs-5">
                <b>Price:</b> <span class="text-success fw-bold">₹${element.price}</span>
              </span>
               <p class="mb-1">Rating: ⭐ ${rating} (${count} reviews)</p>
              
            </div>

            <div class="mt-4 d-flex gap-3">
              <button class="btn btn-warning">Buy Now</button>
              <button class="btn btn-outline-warning">Add to Cart</button>
            </div>
          </div>
        </div> 

        `;
        productList.appendChild(d);
    });
    
};


getProducts();