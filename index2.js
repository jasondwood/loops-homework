const users = [
    {
        name: "Erik Gross",
        role: "Principal Consultant",
        email: "erik.d.gross@gmail.com",
        user_id: 1234,
        password: "foobar!!!" 
    },
    {
        name: "Angela Schrute",
        role: "Accountant",
        email: "angela.s@dundermifflin.com",
        user_id: 4444,
        password: "bandit" 
    },
    {
        name: "Max Smith",
        role: "Administrator",
        email: "m.smith@acmeexplosives.com",
        user_id: 5566,
        password: "go-boom" 
    },
    {
        name: "Jim Halpert",
        role: "Principal Antagonist",
        email: "pranks@dundermifflin.com",
        user_id: 7788,
        password: "asian_jim" 
    },
    {
        name: "Roger Osborne",
        role: "Purchasing Manager",
        email: "purchasing@greatbiscuits.com",
        user_id: 8888,
        password: "teatime1234" 
    }
]

// add a new user to the collection 
// first, make the new user
let new_user = {
    name: "Nancy Newbody",
    role: "VP for Houseplants",
    email: "begonia@houseplants.org",
    user_id: 4321,
    password: "hello_dolly"
}

users.push(new_user);


// print out the email for a specific user, by user_id. start with user_id 8888
// make a loop to "traverse" through the collection of users
// when we reach the one that matches, print the email. THEN exit the loop!
// for(var i = 0; i < users.length; i++) {
//     if(users[i].user_id == 8888) {
//         console.log("Email: " + users[i].email);
//     }
// }

function getEmailByUserId(id) {
    let do_we_have_a_match = false;
    for(var i = 0; i < users.length; i++) {
        console.log("Number of times through the loop: " + (i+1));
        
        if(users[i].user_id == id) {
            console.log("Email: " + users[i].email);
            do_we_have_a_match = true;
            break;
        }
    }
    if(!do_we_have_a_match) {
        console.log("User not found");
    }

}

getEmailByUserId(9999);
//console.log(users);


// remove a user from the collection by user_id
function removeUser(id) {
    let found_user = false;   
    for(var i = 0; i < users.length; i++) {     
        if(users[i].user_id == id) {
            // delete the matching user
            found_user = true;
            users.splice(i, 1);
            console.log("Removed user with user_id of " + id);
            break;
        }
    }
    if(!found_user) {
        console.log("could not find user");
    }
}

console.log(users);
removeUser(9999);
console.log(users);

/* homework:
make an object consisting of a collection of students
write functions that can do the following:

1. Find a student by an id
2. Add a student 
3. delete a student
4. Change a student's First Name

*/
