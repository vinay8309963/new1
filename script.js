// var form=document.getElementById('form');
// var userList=document.getElementById('m');

// form.addEventListener('submit',addItem);


// function addItem(event){
//     event.preventDefault();
//     var username=document.getElementById('name').value;
//     var email=document.getElementById('email').value;
//     var phone_number=document.getElementById('phone_number').value;
    
//     //creating li element
//     var item=document.createElement('li');
    
//     //creating Delete Button
//     var deleteBtn=document.createElement('button');
//     //deleteBtn.className='delete';
//     deleteBtn.className='btn btn-sm float-right btn-danger delete';
//     deleteBtn.appendChild(document.createTextNode('Delete'));


//     item.appendChild(document.createTextNode(username+" "+email+" "+phone_number+" "));
//     item.appendChild(deleteBtn);
//     var obj={
//         "username":username,
//         "email":email,
//         "phone number":phone_number
//     };
    
    
//     userList.appendChild(item);

//     localStorage.setItem(JSON.parse(JSON.stringify(obj.username)), JSON.stringify(obj));
//     //localStorage.setItem(username,JSON.stringify(obj));
    
    
// }

// userList.addEventListener('click',deleteItem);

// function deleteItem(e){
//     if(e.target.classList.contains('delete')){
//         var li = e.target.parentElement;
//         userList.removeChild(li);
//         console.log(Object.keys(e));
//         localStorage.removeItem("isTrusted");
//     }
// }

var output='';

window.addEventListener("DOMContentLoaded",()=>{
    axios.get('https://crudcrud.com/api/a5e5a3ce16bf4e9b81ee1c77e17c00d9/appointmentData')
    .then((response)=>{
        console.log(response.data);
        for(var i=0;i<response.data.length;i++){
            let word=`<li>${response.data[i].username}:${response.data[i].email}</li>`;
            output=output+word;
        }
        document.body.innerHTML=document.body.innerHTML+output;
    })
    .catch((err)=>{
        console.log(err);
    })
})


const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const phone_number=document.querySelector('#phone_number')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit)
function onSubmit(e){
    e.preventDefault()

    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields'
        setTimeout(() => msg.remove(), 3000)
    }else{
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value} `))
        userList.appendChild(li)
        var deleteBtn = document.createElement('button')
        deleteBtn.className='btn btn-sm float-right btn-danger delete'

        //adding edit button
        var editBtn = document.createElement('button')
        editBtn.className='btn btn-sm float-right btn-warning delete'
        deleteBtn.appendChild(document.createTextNode('Delete'))
        editBtn.appendChild(document.createTextNode('Edit'))
        deleteBtn.onclick=()=>{
            localStorage.removeItem(myObj.email)
            userList.removeChild(li)
        }
        editBtn.onclick=()=>{
            localStorage.removeItem(myObj.email)
            
            nameInput.value=`${myObj.username}`
            emailInput.value=`${myObj.email}`
            
            userList.removeChild(li)

        }
        li.appendChild(deleteBtn)
        li.appendChild(editBtn)
        const myObj = {
            username : nameInput.value,
            email : emailInput.value
        }
        //localStorage.setItem(JSON.parse(JSON.stringify(myObj.email)), JSON.stringify(myObj))
        axios.post('https://crudcrud.com/api/a5e5a3ce16bf4e9b81ee1c77e17c00d9/appointmentData',myObj)
        .then((response)=>{
            console.log(response);
        })
        .catch((err)=>console.log(err));
        //CLear fields
        nameInput.value = ''
        emailInput.value = ''
    }
    
}