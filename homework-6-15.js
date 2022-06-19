/* homework:
make an object consisting of a collection of students
write functions that can do the following:

1. Find a student by an id
2. Add a student 
3. delete a student
4. Change a student's First Name

*/


const students = [
    {
        name: "Ashley Smith",
        student_id: 42,
        grade: 12,
        gpa: 3.8,
        teacher: "teacher 1"
    },

    {
        name: "Michael Johnson",
        student_id: 34,
        grade: 12,
        gpa: 3.5,
        teacher: "teacher 2"
    },
    {
        name: "John Jones",
        student_id: 13,
        grade: 12,
        gpa: 1.4,
        teacher: "teacher 3"
    },
    {
        name: "Jason Williams",
        student_id: 45,
        grade: 12,
        gpa: 4.1,
        teacher: "teacher 4"
    },
    {
        name: "Mark Brown",
        student_id: 32,
        grade: 12,
        gpa: 3.8,
        teacher: "teacher 5"
    }
]

function findStudentById(id) {
    let studentMatch = false;
    for (var i = 0; i < students.length; i++) {
        if (students[i].student_id == id) {
            console.log(students[i].student_id + " is the ID of " + students[i].name);
            studentMatch = true;
        }
    }
    if (!studentMatch) {
        console.log("User ID not found");
    }
}

findStudentById(32);
findStudentById(11);

// 2. Add a student 

let new_student = {
    name: "Nancy Newbody",
    student_id: 4321,
    grade: "VP for Houseplants",
    gpa: 4.0,
    teacher: "New Teacher",
}
students.push(new_student);

// 3. delete a student

function removeStudent(id) {
    let found_student = false;   
    for(var i = 0; i < students.length; i++) {     
        if(students[i].student_id == id) {
            // delete the matching user
            found_student = true;
            students.splice(i, 1);
            console.log("Removed user with user_id of " + id);
            console.log("Here is a list of students after the removal: ");
            console.log(students);
            break;
        }
    }
    if(!found_student) {
        console.log("could not find user");

    }
}
removeStudent(45);

// 4. Change a student's First Name

let newName = "Stuart";

function changeStudentName(id) {
    let studentMatch = false;
    for(var i = 0; i < students.length; i++) {
        if (students[i].student_id == id) {
            studentMatch = true;
            // declare variables to split up full name if ID match is found
            let fullName = students[i].name.split(' '),
            firstName = fullName[0],
            lastName = fullName[fullName.length -1];
            console.log("Changing " + students[i].name + " to " + newName + ". Their name is now " + newName + " " + lastName);
        }
    }
    if(!studentMatch) {
        console.log("User not found");
    }
}

changeStudentName(42);
console.log();