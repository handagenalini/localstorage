# localstorage
<body>
    <form onsubmit="saveToLocalStorage(event)">
    <label >Name</label>
<input type="text" name="username" required/>
<label >Emailid</label>
<input type="email" name="emailid" required/>
<label > Phonenumber</label>
<input type="tel" name="phonenumber" />
<button>submit</button>
<script>
    function saveToLocalStorage(event){
        event.preventDefault();
        const name=event.target.username.value;
        const email=event.target.emailid.value;
        const phonenumber=event.target.phonenumber.value;
        localStorage.setItem('name',name);
        localStorage.setItem('emailid',email);
        localStorage.setItem('phonenumber',phonenumber);
        const obj={
            name,
            emailid,
            phonenumber
        }
        localStorage.setItem(obj.email,JSON.stringify(obj));
        shoeNewUserOnScreen(obj);

    }
function showNewUserOnScreen(user){
                document.getElementById('email').value = '';
                document.getElementById('username').value = '';
                document.getElementById('phonenumber').value ='';
                // console.log(localStorage.getItem(user.emailId))
                if(localStorage.getItem(user.email) !== null){
                    removeUserFromScreen(user.email)
                }

                const parentNode = document.getElementById('listOfUsers');
                const childHTML = `<li id=${user.email}> ${user.name} - ${user.email}
                                        <button onclick=deleteUser('${user.email}')> Delete User </button>
                                        <button onclick=editUserDetails('${user.email}','${user.name}','${user.phonenumber}')>Edit User </button>
                                     </li>`

                parentNode.innerHTML = parentNode.innerHTML + childHTML;
            }

            

            function editUserDetails(emailId, name, phonenumber){

                document.getElementById('email').value = emailId;
                document.getElementById('username').value = name;
                document.getElementById('phonenumber').value =phonenumber;

                deleteUser(emailId)
             }

            

            function deleteUser(emailId){
            function removeUserFromScreen(emailId){
                const parentNode = document.getElementById('listOfUsers');
                const childNodeToBeDeleted = document.getElementById(emailId);

                parentNode.removeChild(childNodeToBeDeleted)
                if(childNodeToBeDeleted) {
                    parentNode.removeChild(childNodeToBeDeleted)
                }
            }


    
</script>

</body>
 
   
 

 
 


               
