const unhider=document.getElementById('unhider');
unhider.addEventListener('click',()=>{
  document.getElementById('hided').classList.toggle('hided');
  document.getElementById('hided').classList.toggle('unhided');
})
console.log("Let's start the Node JS");
//writing data to text file
let fs= require('fs'); 
let a=5;
let b=4;
let sum=a+b;
console.log('sum is ',sum);
let data=`sum ${sum}`;
fs.writeFile('database.txt',data, (err)=>{
  if (err){
    console.log("An error occur");
  }
  else{
    console.log('Data succesfully saved to Data-base');
  }
});


 

//First node server

const http= require('http');                    //use localhost:port in chrome to test server......
// function passer(req,res){
//   console.log(req);
// }
// http.createServer(passer);    //refference passing

//another method

const server=http.createServer((req,res)=>{
  console.log(req);
  process.exit();
})
// server.listen(3000);   OR
let port=3000;
server.listen(port,()=>{
  console.log(`Server is running at localhost ${port}`);
});

//-----------------------creating a server and exiting it -----------------------------------


// const newserver=http.createServer((req,res)=>{
//   console.log(req.url,req.method,req.headers);
//   process.end();
// })
// po=3001;
// newserver.listen(po,()=>{
//   console.log(`your server is running at http://localhost/${po}`);
// });


//----------------------creating a server with responces------------------------------


// const newserver=http.createServer((req,res)=>{
//   console.log(req.url,req.method,req.headers);
//   res.setHeader('content-Type','text/html');
//   res.write('<html>');
//   res.write('<head><title>First node server</title></head>');
//   res.write('<body><h2>This is an example of responce from the server</h2></body>');
//   res.write('</html>');
//   res.end();
// })
// po=3001;
// newserver.listen(po,()=>{
//   console.log(`your server is running at http://localhost/${po}`);
// });



//-------------creating a server with conditional responces--------------------------------


// const newer=http.createServer((req,res)=>{
//   console.log(req.url,req.method,req.headers);
  
//   if (req.url==='/home'){
//     res.setHeader('context-Type','text/html');
//   res.write('<html>');
//   res.write('<head><title>Home page</title></head>');
//   res.write('<body bgcolor="green"><h2>This is Home page given by node server..</h2></body>');
//   res.write('</html>');
//   return res.end();
//   }else if(req.url==='/info'){
//   res.setHeader('context-Type','text/html');
//   res.write('<html>');
//   res.write('<head><title>Conditional responce</title></head>');
//   res.write('<body bgcolor="yellow"><h2>This is an example of conditional responces</h2></body>');
//   res.write('</html>');
//   return res.end();
//   }else if (req.url==='/details'){
//   res.setHeader('context-Type','text/html');
//   res.write('<html>');
//   res.write('<head><title>Details Input</title></head>');
//   res.write('<body bgcolor="red"><form action="/submit-details" method="POST"><label for="mail">Email:</label><input tyepe="email" placeholder="example@gmail.com" id="mail"><br><label for="pas">Password:</label><input type="password" id="pas"><br><label for="sel">Select your Gender</label><br><label for="sel">Male:</label><input type="radio" value="male" id="sel" name="gender"><label for="female">Female:</label><input type="radio" id="female" value="female" name="gender"><label for="other">Other:</label><input type="radio" value="other" id="other" name="gender" ><br><button>Submit</button><br><input type="reset"></body>');
//   res.write('</html>');
//   return res.end();
//   }else if(req.url.toLowerCase()==='/submit-details' && req.method==='POST'){
//     fs.writeFileSync('database.txt','Username & password');
//     res.statusCode=302;
//     res.setHeader('Location','/info');
//     return res.end();
//   }else{
//   res.setHeader('context-Type','text/html');
//   res.write('<html>');
//   res.write('<head><title>Conditional responce</title></head>');
//   res.write('<body bgcolor="red"><h2>This is an example of conditional responces.....<a href="youtube.com">More info</a></h2><br></body>');
//   return res.write('</html>');
//   }
// })
// po=3001;
// newer.listen(po,()=>{
//   console.log(`your conditional server is running at http://localhost:${po}`);
// })



//Parsing request on a server


const newer=http.createServer((req,res)=>{                   //********module is created here server.js
  console.log(req.url,req.method);
  
  if (req.url==='/home'){
    res.setHeader('context-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Home page</title></head>');
  res.write('<body bgcolor="green"><h2>This is Home page given by node server..</h2></body>');
  res.write('</html>');
  return res.end();
  }else if(req.url==='/info'){
  res.setHeader('context-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Conditional responce</title></head>');
  res.write('<body bgcolor="yellow"><h2>This is an example of conditional responces</h2></body>');
  res.write('</html>');
  return res.end();
  }else if (req.url==='/details'){
  res.setHeader('context-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Details Input</title></head>');
  res.write(
    '<body bgcolor="red"><form action="/submit-details" method="POST"><label for="mail">Email:</label><input type="email" name="mail" placeholder="example@gmail.com" id="mail"><br><label for="pas">Password:</label><input type="password" name="password" id="pas"><br><label for="sel">Select your Gender</label><br><label for="sel">Male:</label><input type="radio" value="male" id="sel" name="gender"><label for="female">Female:</label><input type="radio" id="female" value="female" name="gender"><label for="other">Other:</label><input type="radio" value="other" id="other" name="gender" ><br><button>Submit</button><br><input type="reset"></body>'
  );
  res.write('</html>');
  return res.end();
  }else if(req.url.toLowerCase()==='/submit-details' && req.method==='POST'){
    const array=[];                         //array to store chunks
    req.on('data',(chunk)=>{
      console.log(chunk);                               //chunks displayed as numbers
      array.push(chunk);
    })
    req.on('end',()=>{
      const datbas=Buffer.concat(array).toString();
      console.log(datbas);
      const perf=new URLSearchParams(datbas);           
      // const newobject={};
      // for (const [key ,value] of perf.entries()){
      //   newobject[key]=value;
      // }


      //------------------------Another way of writing the above three lines in a single line-------------
      const newobject=Object.fromEntries(perf);
      console.log(newobject);
      fs.writeFileSync('database.txt',JSON.stringify(newobject));
    })
    
    res.statusCode=302;
    res.setHeader('Location','/info');
    return res.end();
  }else{
  res.setHeader('context-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Conditional responce</title></head>');
  res.write('<body bgcolor="red"><h2>This is an example of conditional responces.....<a href="youtube.com">More info</a></h2><br></body>');
  return res.write('</html>');
  }
})

po=3001;
newer.listen(po,()=>{
  console.log(`your conditional server is running at http://localhost:${po}`);
})





//------------------------JS only--------------------------
let ele=document.getElementById('hider');
ele.addEventListener('click',()=>{
document.getElementById('itsme').classList.add('bor');
})