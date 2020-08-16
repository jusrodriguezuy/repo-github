const jsonProductos = "https://japdevdep.github.io/ecommerce-api/product/all.json";

var getJSONData = function(jsonProductos){
    var result = {};
    return fetch(jsonProductos)
    .then(function(response) {
        if (response.ok) {
            return response.json();
        }
    })
    .then(function(response) {
        result.status = 'ok';
        result.data = response;
        return result;
    })
}

getJSONData(jsonProductos).then(function(resultado) {
    let html = ''; 
    for (let i = 0; i < resultado.data.length; i++) {
        html += `
        <div class="list-group-item list-group-item-action">
            <div class="row>
                <div class="col-3">
                    <p>` + resultado.data[i].name + `<br>
                    <img src="` + resultado.data[i].imgSrc + `" alt="` + "img-product" + `" class="img-thumbnail"></p>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <p>` + resultado.data[i].description + `</p>
                            <p>` + resultado.data[i].currency + resultado.data[i].cost + `</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
    document.getElementById('productsInfo').innerHTML = html;
})

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});