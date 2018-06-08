$(document).ready(function(){

  $("#login").click(function(){
    let email = $("#email").val();
    let password = $("#password").val();

    checkLogin(email,password);
  });



function checkLogin(email, password, allUsers = [
                                                  {
                                                    "name":"Rohan",
                                                    "email":"rohan@gmail.com",
                                                    "password":"rohan"
                                                  },
                                                  {
                                                    "name":"Srujana",
                                                    "email":"srujana@gmail.com",
                                                    "password":"srujana"
                                                  },
                                                  {
                                                    "name":"Alex",
                                                    "email":"alex@gmail.com",
                                                    "password":"alex"
                                                  },
                                                  {
                                                    "name":"Karthik",
                                                    "email":"karthik@gmail.com",
                                                    "password":"karthik"
                                                  }
                                                ]){


  let isUserFound = false;
  let passwordCorrect = false;

  for(currentUser of allUsers)
  {

    if(currentUser.email == email)
    {
      //console.log(currentUser.email);
      if(currentUser.password == password)
      {
        isUserFound = true;
        passwordCorrect = true;
        break;
      }
      else
      {
        isUserFound = true;
      }
    }
  }// end of for loop

  if(isUserFound == true && passwordCorrect == true)
  {
    alert("You are logged in");
  }
  else if(isUserFound == true && passwordCorrect == false)
  {
    alert("You have provided incorrect password");
  }
  else
  {
    alert("No user with this email found");
  }

}




function bubble_sort_asc(a)
{
  let swapp;
  let n = a.length-1;
  const x = a;

  do
  {
    swapp = false;

    for(let i=0; i<n; i++)
    {
      if(x[i] > x[i+1])
      {
        let temp = x[i];
        x[i] = x[i+1];
        x[i+1] = temp;
        swapp = true;
      }
    }

    n--;
  } while (swapp);

  return x;
}


function bubble_sort_desc(a)
{
  let swapp;
  let n = a.length-1;
  const x = a;

  do
  {
    swapp = false;

    for(let i=0; i<n; i++)
    {
      if(x[i] < x[i+1])
      {
        let temp = x[i];
        x[i] = x[i+1];
        x[i+1] = temp;
        swapp = true;
      }
    }

    n--;
  } while (swapp);

  return x;
}

let a = [10,6,8,2,1,3,9,5,7,4];


$("#bubble_asc").click(function(){
 alert(bubble_sort_asc(a));
});

$("#bubble_desc").click(function(){
 alert(bubble_sort_desc(a));
});


});
