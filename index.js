//callbacks , Promises, Async & Await;

//preoblem statement;

const datas = [
    {name:"Ajay",profession:"software engineer"},
    {name:"Abhishek",profession:"software engineer"}
];

function getDatas(){
    setTimeout(()=>{
        let output = "";
        datas.forEach((data,index) => {
            output += `<li>${data.name}</li>`
        })
        document.body.innerHTML=output;
    },1000)
}
// getDatas();

//now output will be Ajay and Abhishek;

//now i am creating another function createData(); for pushing another object into the above datas;


// function createData(newData){
//     setTimeout(()=>{
//         datas.push(newData);
//     },2000)
// };

// createData({name:"vivek", profession:"software engineer"});
// getDatas();



// NOTE: here the output will be
//Ajay
//Abhishek

//why vivek didn't push to the getDatas()?

//because the time given in previous getDatas() function is of 1second which causes updation in DOM and the second function the time is set to 2seconds ; that's why it is not printing vivek; 

// but if we put in first function of 5 or 3seconds then the output will become;
//Ajay;
//Abhishek;
//Vivek;



//to resolve this time issue ; here if we use callback function in the crearData() function then we'll be able solve the problem of printing and we don't even need to change the timer;

// function createData(newData,callback){
//     setTimeout(()=>{
//         datas.push(newData);
//         callback()
//     },2000)
// };

// createData({name:"vivek", profession:"software engineer"},getDatas);

//now the output will be;
//Ajay;
//Abhishek;
//Vivek
//here we are passing getDatas function as a callback function;


//Now we can also solve that problem without using callback function;
//we'll use promise to tackle that problem;
// let's see:-

function createData(newData){
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            datas.push(newData);
            let error = false;
            if(!error){
                resolve()
            }
            else{
                reject("kuch to gadbad hai")
            }
        },2000)
    });
};

// createData({name:"vivek", profession:"software engineer"}).then(getDatas)
// .catch(err=>console.log(err))

//here also the output will be;
//Ajay;
//Anhishek;
//Vivek;



//now take a look at async/await;

async function start(){
    await createData({name:"vivek", profession:"software engineer"});
    getDatas();
};
start();



