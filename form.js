let signupformevent=document.getElementById("signupform")
signupformevent.addEventListener("submit",function(event){event.preventDefault() 
                                                          let fname=document.getElementById("fname").value
                                                          console.log(fname)
                      
                                                          let lname=document.getElementById("lname").value
                                                          console.log(lname)
                                                          let email=document.getElementById("email").value
                                                          console.log(email)
                                                          let password=document.getElementById("password").value
                                                          console.log(password)
                                                          
                                                         })