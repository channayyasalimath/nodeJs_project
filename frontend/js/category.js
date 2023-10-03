$(document).ready(init);


var currentCategoryId= null;
function init(){
    getCategories()

    $("#saveCategoryId").click(function(evt){
        let props={};
        props.categoryName= $("#categoryNameId").val()
        props.narration= $("#narrationId").val()
        if(currentCategoryId == null){
            SaveCategory(props);
        }else{
            props.id = currentCategoryId;
            updateCategory(props);
            currentCategoryId = null
        }
        
    })
}

function SaveCategory(props){
$.ajax({
    method: 'POST',
        url: 'http://localhost:1000/category/add',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        dataType: "json",
        async: false,
        data: props,
        success: function(res){
            if (res.status== 200) {
                getCategories()
                alert("Category Saved Successfully");
                $("#categoryNameId").val('');
                $("#narrationId").val('');
                $("#closeBtn").click();
            }else{
                alert("There is something went wrong!");

            }
        },
        error: function(options){
            throw new Error(options)
        }
        
})
}


function updateCategory(props){
    $.ajax({
        method: 'POST',
            url: 'http://localhost:1000/category/update',
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            async: false,
            data: props,
            success: function(res){
                if (res.status== 200) {
                    getCategories()
                    alert("Category Saved Successfully");
                    $("#categoryNameId").val('');
                    $("#narrationId").val('');
                    $("#closeBtn").click();
                }else{
                    alert("There is something went wrong!");
    
                }
            },
            error: function(options){
                throw new Error(options)
            }
            
    })
    }

function getCategories(){
    
    $.ajax({
        method: 'GET',
        url: 'http://localhost:1000/category/getall',
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
        elements +=generateElements(records[i], i);
    }
    $("#table-container").html(elements)
}

function generateElements(item, index){
    
    return `<tr>
    <td>${index + 1}</td>
    <td>${item.category_name}</td>
    <td>${item.narration}</td>
    <td><button type="button" class="btn btn-sm btn-warning mr-2" onclick="editRecord(${item.id}, '${item.category_name}', '${item.narration}')"data-toggle="modal" data-target="#categoryModal">Edit</button><button type="button" class="btn btn-sm btn-danger" onclick="deleteRecord(${item.id})">Delete</button></td>
    
  </tr>`
}

function editRecord(id, categoryName, narration){
    
    currentCategoryId= id;
    $("#categoryNameId").val(categoryName);
    $("#narrationId").val(narration);
}

function deleteRecord(_id){
    let props= {
        id: _id
    }
    $.ajax({
        method: 'POST',
            url: 'http://localhost:1000/category/delete',
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            async: false,
            data: props,
            success: function(res){
                if (res.status== 200) {
                    getCategories()
                    alert("Category Deleted Successfully")
                }else{
                    alert("There is something went wrong!");
    
                }
            },
            error: function(options){
                throw new Error(options)
            }
            
    })
}