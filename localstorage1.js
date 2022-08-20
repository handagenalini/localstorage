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
        const parentNode=document.getElementById('listOfUser');
        const childHTML=`<li>${user.name} - ${user.emailid}</li>`
        parentNode.innerHTML=childHTML
    }
</script>

</body>
 
 
 
