// Assignment: JavaScript Objects: Complete the following challenges.
// Challenge 1: Print all of the students and their cohort.
// let students = [
//     {name: 'Remy', cohort: 'Jan'},
//     {name: 'Genevieve', cohort: 'March'},
//     {name: 'Chuck', cohort: 'Jan'},
//     {name: 'Osmund', cohort: 'June'},
//     {name: 'Nikki', cohort: 'June'},
//     {name: 'Boris', cohort: 'June'}
// ];
// Your console should look like the following:
// Name: Remy, Cohort: Jan
// Name: Genevieve, Cohort: March
// Name: Chuck, Cohort: Jan
// Name: Osmund, Cohort: June
// Name: Nikki, Cohort: June
// Name: Boris, Cohort: June
console.log('\n********** Challenge 1 ***********')
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
for (let obj of students){
    console.log("Name: ", obj.name, ", Cohort: ", obj.cohort);
}


// Challenge 2: Print out the below object to match the example.
// let users = {
//     employees: [
//         {'first_name':  'Miguel', 'last_name' : 'Jones'},
//         {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
//         {'first_name' : 'Nora', 'last_name' : 'Lu'},
//         {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
//     ],
//     managers: [
//        {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
//        {'first_name' : 'Gordon', 'last_name' : 'Poe'}
//     ]
//  };
// Your console should look like the following:
// EMPLOYEES
// 1 - JONES, MIGUEL - 11
// 2 - BERTSON, ERNIE - 12
// 3 - LU, NORA - 6
// 4 - BARKYOUMB, SALLY - 14
// MANAGERS
// 1 - CHAMBERS, LILLIAN - 15
// 2 - POE, GORDON - 9
console.log('\n********** Challenge 2 ***********')
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 for (let grp in users){
    console.log(grp.toUpperCase());
    let i = 1;
    for (let obj of users[grp]){
        let lname = obj.last_name.toUpperCase();
        let fname = obj.first_name.toUpperCase();
        let cnt = lname.length + fname.length;
        console.log(i+' - '+lname+', '+fname+' - '+cnt);
        i++;
    }
}
