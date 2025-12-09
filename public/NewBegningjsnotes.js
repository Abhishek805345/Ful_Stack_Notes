//Basic use of js
let a=5;                //we can change the value of a later
a=10;               //value change
let b=9;
console.log("a+b is",a+b);
const name="Ram";           //we can't change the value of name
//example of terinary operator
let ans= b<5 ? 'less': 'greater';
console.log('answer is ' ,ans);
//switch statements
const sw=3;
switch (sw){
case 1:
    {
        console.log('hi');
        break;
    }
case 2:
    {
        console.log('hey');
        break;
    }
case 3:
    {
        console.log('Namestay');
        break;
    }
default:
    {
        console.log('good day')
        break;
    }
}
//for loop example
for (let i=0; i<=5;i++)
{
    console.log(i,'for loop');
}
//while loop example
let f=0;
while (f<=9){
    console.log(f,'example of while loop');
    f++;
}
//Do while loop example
do
{
    console.log(f,'example of do while loop');
    f++;
}
while(f<4);
//Example of break and continue
for (let nu=0;nu<=15;nu++){
    if (nu>=10){
        console.log('break statement executed');
        break;
    }
     console.log(nu,'$$$$$')
}
for (let wh=0;wh<=10;wh++){
    if(wh==6){
        console.log('continue statement executed');
        continue;
    }
    console.log(wh,'#####')
}
//Example of Arrays
const arr=['Amit','Sumit','Ram','Shyam'];
console.log(arr);
//Array access
console.log(arr[2]);
//Different data types in an array
const dif=['Ram',1,'mohan',true,{She:'Ani',}];
console.log(dif);

//lenght function
console.log(dif.length);

//Array fxns
const newar=[51,42,73,12,34,2,7,10];
console.log(newar);
//Adding new element
newar.push(222);
console.log(newar);
//poping element
newar.pop();
console.log(newar);
//deleting 1st element
newar.shift();
console.log(newar);
//adding new element to starting of the array
newar.unshift(91);
console.log(newar);
//finding index of element
console.log('Index of the selected element is =',newar.indexOf(34));
//Checking element is present or not
console.log(newar.includes(34));
//Sorting the array
newar.sort();
console.log('Sorted array=',newar);
//slicing the array
const nextar=newar.slice(2,6);          //here 6 is exclusive 
console.log(nextar);

//Functions in js
function sum(a,b){
    const answer=a+b;
    console.log('function use',answer);
}
sum(a,b);
//Another way to use this function
function summ(x,y){
    const uter=x+y;
    return uter;
}
const boj=summ(a,b);
console.log('Return stmt',boj);

//Function expression
const square=function (num){
    return num*num;
}
 let final=square(90);
 console.log('square of the given number is',final);

 //Example of Nested function
 function namee(a,b){
    function name2(n){
        return n*n;
    }
    return name2(a)+name2(b);
 }
 const nes=namee(3,4);
 console.log('Nested function example',nes);

//Example of arrow function
const are=(nume)=>{
    for (let i=1;i<=10;i++){
        console.log(nume*i);
    }
}
are(4);

//Example of call back function
const operation=(a,b)=>{
    console.log('I am a call back fxn ',a+b);
}
const mai=(a,b,oper)=>{                     //fxn passed onto another fxn
    return oper(a,b);                       //fxn called
}
mai(3,4,operation);

//OR

const naame=(first)=>{
    console.log('Call back function :First name is',first);
}
const sir=(firstname,fxntion,lastname)=>{
    fxntion(firstname);
    console.log('Main function :Sir name is',lastname);
}
sir('Rochak',naame,'Siwach');



//Array functions properties importent**
const newarray=[4,33,0,54,76,-1,23,90,-67];
const test=(testnumber)=>{
    if (testnumber<0){
        return testnumber;
    }
}
const tested=newarray.some(test);
console.log(tested);

const pri=(_num)=>{
    console.log('Array element',_num);
}
newarray.forEach(pri);


//Example of settimeout function

const dl=()=>{
    console.log('Set time out function example');
}
setTimeout(dl,2000);        //2s=2000ms


//call back hell  example making an pizza 

function chiss(call){
    setTimeout(()=>{
         console.log('Getting a piece of 🧀');
    call();
    },2000);
   
}
function dough(value,call){
    console.log('getting your',value,' dough ready');
    call();
}
function pizza(){
    console.log('your pizza is ready');
}
    
chiss(()=>{
    dough(5,()=>{                           //this type of function call is known as hell
        pizza();
    });
});

//Example of Promises
const game=new Promise((resolve,reject)=>{
    const score=87;
    if (score>80){
        resolve('You won the match');
    }
    else{
        reject('You won but did not score good scores');
    }
});
game.then((data)=>{
    console.log(data,'✌️');
}).catch((data)=>{
    console.log(data,'👍');
}).finally(()=>{
    console.log('finally is always executed');
});

//Another good example of promises
function mail(){
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('👍 mail is ok');
    }, 3000);
});
}
function password(mail){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('✌️ password is also ok');
        },4000);
    });
}
function login(password){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('😊 congrats you loged in');                   
        },5000);
    });
}
// mail().then((data)=>{
//     console.log(data,'mail is correct');
//     return password(mail);
// }).then((data)=>{
//     console.log(data,'password is correct');
//     return login(password);
// }).then((data)=>{
//     console.log(data,'login sucessfully');
// }).catch((data=>{
//     console.log(data,'some error occur');
// }))

//OR

// Promise.all([mail,password(mail),login(password)]).then((data)=>{           //this is a new promise which 
//     console.log(data,'sucessfully loged in');                                  //return resolve if all the promise 
// }).catch((data)=>{                                                              //in it is return resolve
//     console.log('some error occur',data);
// });

//Example of async and await

console.log('Example of ASYNC and AWAIT');
async function learn(){
    try{
        const m= await mail();
    console.log(m);
    const n= await password(mail);
    console.log(n);
    const l= await login(password);
    console.log(l);
    }
    catch(data){
        console.log('some error occur');
    }
}
learn();


//DOM manipulation

const object1=document.getElementById('dombox1');
console.log(object1);
const onj2=document.getElementsByClassName('domcon');
console.log(onj2);
const obj3=document.getElementsByTagName('div');
console.log(obj3);
const obj4=document.querySelectorAll('.domcon .dombox');
console.log(obj4);
const obj5=document.querySelector('.domcon .dombox');
console.log(obj5);

//change html using js
object1.innerHTML='This is an example of DOM manupulation';

//changing the css using js
document.getElementById('dombox2').style.backgroundColor="wheat";   

//Adding or removing class of html using js
 document.getElementById('dombox3').classList.add('animatn');


//Creating and appending html using js
const newele=document.createElement('h3');
newele.innerText='creating and appending html using js';
 
document.getElementById('domcon').appendChild(newele);


//Event handler ******

function details(){
    const know=document.createElement('p');
    know.innerText='Events';
    document.getElementById('over').appendChild(know);
}
const newobject=document.getElementById('eve');
newobject.addEventListener('click',()=>{
    eve.classList.add('jsaddedclass');
    const ek=document.createElement('p');
    ek.innerHTML='For event listner use .addEventListner("",()= > {}); function. ';
    document.getElementById('eve').appendChild(ek);
})


//New project
const clickthinks=document.getElementById('listnerbutton');
clickthinks.addEventListener('click',()=>{
        const nw=document.createElement('img');
        nw.classList.toggle('detail');
        nw.src="data:image/jpeg;base64,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";
        document.getElementById('listnerex').append(nw);  
})


//FAQ'S event listner
const box1=document.getElementById('1stbox');
box1.addEventListener('click',()=>{
    document.getElementById('hide1').classList.toggle('hide1');
    document.getElementById('hide1').classList.toggle('unhide1');
    document.getElementById('symbol').classList.toggle('symbol');
})

const box2=document.getElementById('2ndbox');
box2.addEventListener('click',()=>{
    document.getElementById('hide2').classList.toggle('hide2'); 
    document.getElementById('hide2').classList.toggle('unhide2');
     document.getElementById('symbol2').classList.toggle('symbol2');
})

const box3=document.getElementById("3rdbox");
box3.addEventListener('click',()=>{
    document.getElementById('hide3').classList.toggle('hide3');
    document.getElementById('hide3').classList.toggle('unhide3');
     document.getElementById('symbol3').classList.toggle('symbol3');
})