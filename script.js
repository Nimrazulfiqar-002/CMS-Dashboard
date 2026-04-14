
const pages = document.querySelectorAll(".page");

pages.forEach(page => {
    page.addEventListener("click", () => {
        document.querySelector(".page.active").classList.remove("active");
        page.classList.add("active");
    });
});

function toggleSidebar() {
    document.getElementById("hum-sidebar").classList.toggle("active");
}
let nextId = 1;
//user array
let users=[{
    id: nextId++ ,Product:'Macbook pro 16',SerialCode:'# 123-456ABC',Stock:'12',Category:'Apple'
},
{
    id: nextId++,Product:'Macbook pro 16',SerialCode:'# 123-456ABC',Stock:'12',Category:'Apple'
},
{
    id: nextId++,Product:'Macbook pro 16',SerialCode:'# 123-456ABC',Stock:'12',Category:'Apple'
},
{
    id: nextId++,Product:'Macbook pro 16',SerialCode:'# 123-456ABC',Stock:'12',Category:'Apple'
},

]

const cardContainer = document.querySelector('.cards');
const tableBody=document.querySelector('#userTable tbody')
const inputId=document.getElementById('input-id')
const inputProduct=document.getElementById('input-product')
const inputSerial=document.getElementById('input-serial')
const inputStock=document.getElementById('input-stock')
const inputCategory=document.getElementById('input-category')




let editId=null;
function editUser(id){
    editId= id;
    renderTable();
}

function renderTable(){
    tableBody.innerHTML=''

    users.forEach(user=>{

        if(editId==user.id){

            const row=`
                <tr>
                <td>${user.id}</td>
                <td class="product-name" ><input id='edit-product' value='${user.Product}' /></td>
                <td><input id='edit-serial' value='${user.SerialCode}' /></td>
                <td><input id='edit-stock' value='${user.Stock}' /></td>
                <td><input id='edit-category' value='${user.Category}' /></td>
                <td class="action">
                    <a href="#" class="edit" onclick="saveUser(${user.id})">Save</a>
                    <a href="#" class="delete" onclick="deleteUser(${user.id})">Delete</a>
                </td>
            </tr>
            `;
            tableBody.innerHTML +=row;
        }else{
             const row=`
                <tr>
                <td>${user.id}</td>
                <td class="product-name">${user.Product}</td>
                <td>${user.SerialCode}</td>
                <td>${user.Stock}</td>
                <td>${user.Category}</td>
                <td class="action">
                    <a href="#" class="edit" onclick="editUser(${user.id})">Edit</a>
                    <a href="#" class="delete" onclick="deleteUser(${user.id})">Delete</a>
                </td>
            </tr>
            `;
            tableBody.innerHTML +=row;
        }
    })
}
renderTable();

//delete functionality 
function deleteUser(id) {
  users = users.filter(user => user.id !== id);
  renderTable();
}

//save edit data 

function saveUser(id){
  const updatedProduct = document.getElementById("edit-product").value;
  const updatedSerial = document.getElementById("edit-serial").value;
  const updatedStock = document.getElementById("edit-stock").value;
   const updatedCategory = document.getElementById("edit-category").value;

  users = users.map(user => {
    if(user.id == id){
      return {
        ...user,
        Product: updatedProduct,
        SerialCode: updatedSerial,
        Stock: updatedStock,
        Category:updatedCategory
      };
    }
    return user;
  });

  editId = null; // exit edit mode
  renderTable();
}

//add new data 

//show 
function showForm() {
    document.getElementById('formContainer').style.display = 'block';
}

function handleSubmit(e) {
    e.preventDefault(); 

    let newUser = {
        id: nextId++,
        Product: inputProduct.value,
        SerialCode: inputSerial.value,
        Stock: inputStock.value,
        Category: inputCategory.value
    };

    users.push(newUser);
    renderTable();

    // clear inputs
    inputProduct.value = '';
    inputSerial.value = '';
    inputStock.value = '';
    inputCategory.value = '';

    // hide form
    document.getElementById('formContainer').style.display = 'none';
}

///cards

// function renderCards() {
//     cardContainer.innerHTML = '';

//     users.forEach(user => {
//         const card = `
//         <div class="card">
//             <div class="content">

//                 <div class="space1">
//                     <p>Name : ${user.Product}</p>
//                     <p>Serial no : ${user.SerialCode}</p>
//                 </div>
//                 <hr>

//                 <div class="space2">
//                     <div>
//                         <p>Stock : ${user.Stock}</p>
//                         <p>Category : ${user.Category}</p>
//                     </div>

//                     <div class="btn-sp">
//                         <button class="btn-card" onclick="editCardUser(${user.id})">Edit</button>
//                         <button class="btn-card" style="color:red;" onclick="deleteUser(${user.id})">Delete</button>
//                     </div>
//                 </div>

//             </div>
//         </div>
//         `;
//         cardContainer.innerHTML += card;
//     });
// }


// function editCardUser(id){
//     const user = users.find(u => u.id === id);

//     inputProduct.value = user.Product;
//     inputSerial.value = user.SerialCode;
//     inputStock.value = user.Stock;
//     inputCategory.value = user.Category;

//     editId = id;
//     showForm();
// }