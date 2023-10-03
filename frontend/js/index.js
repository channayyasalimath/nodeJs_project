$(document).ready(init);

function init(){
$.ajax({
    method: 'GET',
    url: 'http://localhost:1000/products',
    data: null,
    success: function(res){
        if(res.status == 200){
            loadRecords(res.response);
        }else{
            alert("Some thing went wrong")
            console.error(res.error)
            // alert(res.error);
        }
        
    },
    error:function(error){
        console.error(error);
    }
})
}

function loadRecords(records){
    console.log(records);
    let elements= '';
    for(let i=0; i< records.length; i++){
        elements +=generateElements(records[i]);
    }
    $("#productsContainer").html(elements)
}

function generateElements(item){
    return `<div class="col">
    <div class="card" style="width: 18rem">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${item.product_name}</h5>
        <p class="card-text">
        ${item.product_price}
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>`
}