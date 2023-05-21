const currentUser= 'Grace Jamie'
const welcomeMessage=`Welcome to Flatbook, ${currentUser}`

console.log(welcomeMessage)


function isRose(cat){
    if (cat==="rose"){
        return "Hi Rose. You are cute!"
    }else{
        return `Hi ${cat}` 
    }
    
}

console.log(isRose('ted'))