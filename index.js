const { timeStamps } = require("console");
const Sequelize = require("sequelize");
const {DataTypes} = Sequelize;
// below is javacsript constructors function
const sequelize = new Sequelize( 'infra-users', 'root', 'root',{
dialect : 'mysql'   //its says which database you are using

});

// here i am creation the variable table name user 

const User = sequelize.define('user' ,{   //define use for create table
 
//  here i am adding primary key that help us to create unic id row and column
user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // Must be spelled correctly and applied to the primary key
  },
 
//  Sequelize.drop()({  match: /_test$/}),
 
 
    //here i am create objects 
 username:{
    type:DataTypes.STRING,
    allowNULL : false
 },

 password:{
    type: DataTypes.STRING,
 },
 age:{
    type:DataTypes.INTEGER,
    defaultValue: 21
 },
 
WITTCodeRocks:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
 }
,{
    freezeTableName: true,  //this means the model and and table name should same always
    timeStamps: false
})


// tofind all the entries from the database
User.sync({alter: true}).then( () =>{
    // return User.findAll()  //to find all the entries from the database 
    // return User.findAll({attributes:['username', "password"]})   //to find all the specific entries from the database
    // return User.findAll( {attributes: [["username","myname"], ["password","pwd"]]})  by using nested components
    // return User.findAll({attributes: [[sequelize.fn('sum', sequelize.col('age')), 'howold']]})  //to find the all age sum 
    // return User.findAll({attributes: [[sequelize.fn('AVG', sequelize.col('age')), 'howold']]}) //find the age average from the all users
    // return User.findAll({attributes:{exclude :['password']}}) //to get the data except password
    // return User.findAll({where : {age:48}})  //tofind the database that age is 48 and we can find the specific age
    // return User.findAll({attributes: ["username"],where : {age:5}}) //to find the usernames which age is 5
    // return User.findAll({limit: 5})   //to find the user id upto limit 5 and also we can find how much limit we can
    // return User.findAll({order : [['age' ,'DESC']]})  //we can find the age of all databases in the big to small desecending order
    return User.findAll({order: [["age", "ASC"]]})  //we can find the age of all databases in the small  to big
}).then((data) =>{
    data.forEach(element => {  //the for each can use in the bulcreation mrthod to add the all the elements in the array frmate
            console.log(element.toJSON());
        });
  
    }).catch(() =>{
    console.log("error")
})



























// third video
// User.sync({force: true}) //to check the auto increment 

// User.sync({alter:true}).then(() =>{
    // const user = User.build({ username:"sowmya", password:'123', age:21, WITTCodeRocks: true})   //by this process we can save the user data in the data base in the table
    // console.log(user.username)
    // console.log(user.password),
    // user.username="mummy"
    // return user.save();

// to create the database
    //   return User.create({
    //     username:"ganesh",
    //     password:"09090",
    //     gae:50,
    //     WITTCodeRocks:true,
    // })




    // to create the bulkcreations the user data
    // return User.bulkCreate([
    //     {
    //         username:"tomm",
    //         age: 5,
    //         password: "00"
    //     },
    //     {
    //         username:"jerry",
    //         age: 5,
    //         password: "00"
    //     },
    //     {
    //         username:"bts",
          
    //         password: "00"
    //     },
    //     {
    //         username:"oggy",
    //         age: 5,
         
    //     },

    // ])



// }).then((data) =>{
    // console.log(data.toJSON());  //which we can see data in json formate
    // console.log("User data saved successfully in data base")
    // data.username="daddy";  //here i am changing the upper user name to this user name
    // data.age = 48;
    // return data.save(); // save the user data in the database
    // return data.destroy();  //deletedot destory the data
    // return data.reload(); //its reload the age
    // return data.save({fields :['age']})  //its only change the specified fiels only 
    // return data.increment({age: 2}) //by using the increments the specific age can be increase
    // return data.decrement({age : 3})  //decrement he user age

    // note:the bulkcreate method cannot add in the json formatNamedParameters, sowe can use the foreach method

// }).then((data) =>{
    // data.array.forEach(element => {  //the for each can use in the bulcreation mrthod to add the all the elements in the array frmate
    //     console.log(element.toJSON());
    // });
     // console.log("upprt user name data upated")
    // console.log("data as   daddys age updated")
    //  console.log(data)

// }).catch(() =>{
// console.log("error occures in the data base")
// })

















// second video

// console.log(sequelize.models.user); // Note the lowercase 'user'// Correct usage
 // Note: 'sequelize' not 'sequelizer'


// to add my user table intwo workbench
// User.sync({force:true}).then(  () =>{    //force is use to drop thge table in workbench
//     console.log("tablle and models create sucessfully ")
// })
// .catch(() =>{
//     console.log("throw error")
// })
















//  video one
// this s first way to write the promises
// to schect the server is sucessfully connected or not by using authentication process inpromises
// sequelize.authenticate().then( () =>{
//     console.log("sucessfully connected")
// }).catch(() =>{
//     console.log(" error occurs")
// })
// console.log{"another error"}

// the another way to write promises in async and await functions

// async function myfunction (){
//     await sequelize.authenticate()
//     console.log("my function")

// }
 
// here call the function
// myfunction()
























