// $(document).ready(init);

// var currentProductId = null;
// var products = [];

// function init() {
//   if (!validateToken()) {
//     window.location = "login.html";
//     return;
//   }
// }
// getCategories();
// getProducts();

// $("#saveProductId").click(function (evt) {
//   var props = {
//     productName: document.getElementById("productNameId").value,
//     product_description: document.getElementById("product_description").value,
//     categoryId: document.getElementById("categoryId").value,
//     ProductPrice: document.getElementById("productPriceId").value,
//     ProductPrice: document.getElementById("productPriceId").value,
//     quantity: document.getElementById("quantity").value,
//   };

//   if (currentProductId == null) {
//     saveProduct(props);
//   } else {
//     props.id = currentProductId;
//     updateProduct(props);
//     currentProductId = null;
//   }
// });

// function getCategories() {
//   $.ajax({
//     method: "GET",
//     url: "http://localhost:1000/category/getall",
//     data: null,
//     success: function (res) {
//       if (res.status == 200) {
//         loadCategories(res.response);
//       } else {
//         alert("Something went wrong");
//         console.error(res.error);
//         // alert(res.error);
//       }
//     },
//     error: function (error) {
//       console.error(error);
//     },
//   });
// }

// function loadCategories(records) {
//   console.log(records);
//   let elements = "";
//   for (let i = 0; i < records.length; i++) {
//     elements += generateCategoryElements(records[i], i);
//   }
//   $("#categoryId").html;
// }

// function generateCategoryElements(records) {
//   return `<option value="${records.id}">${records.category_name}</option>`;
// }

// function validateToken() {
//   let accToken = localStorage.getItem("access_token");
//   if (!accToken) {
//     return false;
//   }
//   console.log(accToken);
//   return true;
// }

// function saveProduct(props) {
//   $.ajax({
//     method: "POST",
//     url: "http://localhost:1000/products/add",
//     data: null,
//     success: function (res) {
//       if (res.status == 200) {
//         getProducts();
//         alert("Product Saved Successfully");
//         $("#categoryNameId").value();
//         $("#narrationId").value();
//         $("#closeBtn").click();
//       } else {
//         alert("There is something went wrong!!");
//       }
//     },
//     error: function (options) {
//       throw new Error(options);
//     },
//   });
// }

// function updateProduct(props) {
//   $.ajax({
//     method: "POST",
//     url: "http://localhost:1000/products/update",
//     contentType: "application/x-www-form-urlencoded; charset=utf-8",
//     dataType: "json",
//     async: false,
//     data: props,
//     success: function (res) {
//       if (res.status == 200) {
//         getCategories();
//         alert("Category Saved Successfully");
//         $("#categoryNameId").val("");
//         $("#narrationId").val("");
//         $("#closeBtn").click();
//       } else {
//         alert("There is something went wrong!");
//       }
//     },
//     error: function (options) {
//       throw new Error(options);
//     },
//   });
// }

// function getProducts() {
//   $.ajax({
//     method: "GET",
//     url: "http://localhost:1000/products/getall",
//     data: null,
//     success: function (res) {
//       if (res.status == 200) {
//         loadProducts(res.response);
//       } else {
//         alert("Something went wrong");
//         console.error(res.error);
//         // alert(res.error);
//       }
//     },
//     error: function (error) {
//       console.error(error);
//     },
//   });
// }

// function loadProducts(records){
//     console.log(records);
//     let elements= '';
//     for(let i=0; i< records.length; i++){
//         elements +=generateProductElements(records[i], i);
//     }
//     $("#product-container").html(elements)
//     $(".editBtn").click(function(evt){
//         let currentId= $(this).attr("id");
//         let editableRecord = products.find((item) => item.id == ) //leaved here
//         currentProductId = currentId;
//         if(editableRecord){

//             //Doubt Part
//             document.getElementById("productNameId").value = editableRecord //leaved here
//             document.getElementById("productDescriptionId").value = editableRecord
//             document.getElementById("categoryId").value - editableRecord
//             document.getElementById("productPriceId").value = editableRecord
//             document.getElementById("quantityId").value = editableRecord
//     $("#productModal").modal('show');

//         }
//     })
// }

// function generateProductElements(item, index){
//     return `<div class="col-md-4">
//     <div class="card mb-4 shadow-sm">
//        // <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> //
//       <img class="card-img-top" height="210" src="${}"></img>
//       <div class="card-body">
//         <h3>${item.product_name}</h3>
//         <p class="card-text">${item.product_description}</p>
//         <div class="d-flex justify-content-between align-items-center">
//         <h6 class="color-primary">Qty: ${item.quantity}</h6>
//         <h6 class="color-primary">Price: ${item.product_price}</h6>

//           <div class="btn-group">
//             <button type="button" class="btn btn-sm btn-outline-secondary" onclick="editProduct">${item.id}</button>
//             <button type="button" class="btn btn-sm btn-outline-secondary" onclick="deleteProduct">${item.id}</button>
//           </div>
//           <small class="text-muted">9 mins</small>
//         </div>
//       </div>
//     </div>
//   </div>`
// }



// function deleteRecord(_id){
//     let props= {
//         id: _id
//     }
//     $.ajax({
//         method: 'POST',
//             url: 'http://localhost:1000/products/delete',
//             contentType: "application/x-www-form-urlencoded; charset=utf-8",
//             dataType: "json",
//             async: false,
//             data: props,
//             success: function(res){
//                 if (res.status== 200) {
//                     getCategories()
//                     alert("Product Deleted Successfully")
//                 }else{
//                     alert("There is something went wrong!");
    
//                 }
//             },
//             error: function(options){
//                 throw new Error(options)
//             }
            
//     })
// }





$(document).ready(init);

var currentProductId = null;
var products = [];
function init(){
	if(!validateToken()){
		window.location = 'login.html';
		return;
	}


	getCategories()
	getProducts()

	
	$("#saveProductId").click(function(evt){
	var props = {
      productName: document.getElementById("productNameId").value,
      product_description: document.getElementById("productDescriptionId").value,
      categoryId: document.getElementById("categoryId").value,
      productPrice: document.getElementById("productPriceId").value,
      quantity: document.getElementById("quantityId").value,
      // imageUrl: productImageName
    };
		if(currentProductId == null){
			saveProduct(props);
	
		} else {
			props.id = currentProductId
			updateProduct(props);
			currentProductId = null
	
		}
		
	});
}


function getCategories(){
	$.ajax({
		method: 'GET',
		url: 'http://localhost:1000/category/getall',
		data: null,
		success: function(res){
			if(res.status == 200){
				loadCategories(res.response);
			} else {

				alert("Something went Wrong")
				console.error(res.error)
			}
			
		},
		error: function(error){
			console.error(error);
		}
	})
}

function loadCategories(records){
	console.log(records)
	let elements  = '';
	for(let i = 0; i< records.length; i++){
		elements += generateCategoryElements(records[i], i)
	}
	$("#categoryId").html(elements)
}

function generateCategoryElements(records) {
  

  return `
  <option value="${records.id}">${records.category_name}</option>
  `
}


function validateToken(){
	let accToken = localStorage.getItem('access_token');
	if(!accToken){
		return false;
	}
	console.log(accToken);
	var userInfo = localStorage.getItem('user');
	userInfo = JSON.parse(userInfo);

	$("#userName").html(userInfo.full_name)

	return true;
}


function saveProduct(props){
	$.ajax({
		method: 'POST',
		url: 'http://localhost:1000/products/add',
		contentType: "application/x-www-form-urlencoded; charset=utf-8",
		dataType: "json",
		async: false,
		data: props,
		success: function(res){
			if(res.status == 200){

				getProducts()
				alert("Product Saved Successfully");
				$("#categoryNameId").val('')
				$("#narrationId").val('')
				$("#closeBtn").click();
			} else {
				alert("There is something went wrong!!");

			}
		},
		error: function(options){
			throw new Error(options)
		}
	})
}


function updateProduct(props){
	$.ajax({
		method: 'POST',
		url: 'http://localhost:1000/products/update',
		contentType: "application/x-www-form-urlencoded; charset=utf-8",
		dataType: "json",
		async: false,
		data: props,
		success: function(res){
			if(res.status == 200){

				getCategories()
				alert("Category Saved Successfully");
				$("#categoryNameId").val('')
				$("#narrationId").val('')
				$("#closeBtn").click();
			} else {
				alert("There is something went wrong!!");

			}
		},
		error: function(options){
			throw new Error(options)
		}
	})
}


function getProducts(){
	
	console.log(localStorage.getItem('access_token'))
	$.ajax({
		method: 'GET',
		url: 'http://localhost:1000/products/getall',
		data: null,
		headers: {
			authorization: 'Bearer ' + localStorage.getItem('access_token')
		},
		success: function(res){
			
			if(res.status == 200){
				
				loadProducts(res.response);
			} else {
				
				alert("Something went Wrong")
				console.log(res.error)
			}
			
		},
		error: function(error){
			alert('Something went wrong')
			console.error(error);
		}
	})
}


function loadProducts(records){
	
	console.log(records);
	products = records
	let elements  = '';
	for(let i = 0; i< records.length; i++){
		elements += generateProductElements(records[i], i)
	}
	$("#product-container").html(elements)
	$(".editBtn").click(function(evt){
		let currentId = $(this).attr("id");
		let editableRecord = products.find((item) => item.id == currentId)
		currentProductId = currentId
		if(editableRecord){
		document.getElementById("productNameId").value = editableRecord.product_name
      	document.getElementById("productDescriptionId").value = editableRecord.product_description
      	document.getElementById("categoryId").value =	editableRecord.category_id
      	document.getElementById("productPriceId").value = editableRecord.product_price
      	document.getElementById("quantityId").value = editableRecord.quantity
		$("#productModal").modal('show');
		}
		
	})
}



function generateProductElements(item, index){
	return `<div class="col-md-4">
  <div class="card mb-4 box-shadow">
    <img class="card-img-top" height="210" src="${'/assets/'+ item.image_url}" alt="Card image cap">
    <div class="card-body">
      <h3>${item.product_name}</h3>
      <p class="card-text">${item.product_description}</p>
      <div class="d-flex justify-content-between align-items-center">
        <h6 class="color-primary">Qty:${item.quantity}</h6>
        <h6 class="color-primary">Price: ${item.product_price}/-</h6>
        <div class="btn-group">
        	<button type="button" class="btn btn-sm btn-outline-secondary editBtn" id="${item.id}" data-toggle="modal" data-target="#productModel">Edit</button>
          <button type="button" onclick="deleteProduct(${item.id})" class="btn btn-sm btn-danger">Delete</button>
        </div>
        
      </div>
    </div>
  </div>
</div>`
}









function deleteRecord(_id){
	
	let props = {
		id: _id
	}
	$.ajax({
		method: 'POST',
		url: 'http://localhost:1000/products/delete',
		contentType: "application/x-www-form-urlencoded; charset=utf-8",
		dataType: "json",
		async: false,
		data: props,
		success: function(res){
			if(res.status == 200){

				getProducts()
				alert("Product Deleted Successfully");

			} else {
				alert("There is something went wrong!!");

			}
		},
		error: function(options){
			throw new Error(options)
		}
	})
}

function logout(){
	//@todo using jwt in backend delete the token
	// remove the data from localstorage like access_token and userinfo
	// redirect to login.html
}

