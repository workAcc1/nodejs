const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('html'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/user/update', (req, res, next) => {
  var index = findIndexArr(req.body.oldUsName);
  if (index !== -1) {
    users[index] = req.body.newUsName;
    res.send(users.join(', '));
  } else {
    res.send('user not found');
  }
});

var users = ['john', 'joooohhhnnn', 'heli, a.a'];
var user, findIndx;
// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     console.log('Request Type:', req.method);
//     next();
//   } else {
//     console.log('Method are not GET');
//   }
// }, (req, res, next) => {
//   console.log('Request URL:', req.originalUrl);
//   next();
// });


app.get('/user/getall', (req, res, next) => {
  console.log(users.join(', '));
  res.send(users.join(', '));
});

app.put('/user/add/:username', (req, res, next) => {
  var findElem = findElement(user);
  user = req.params.username;
  findIndx = findIndexArr(user);
  console.log(findElem);
  if (findElem === user) { res.send('error! name used'); } else {
    users.push(user);
    console.log(users.join(', '));
    res.send('success');
  }
});

function findElement(userName) {
  return users.find((item, index, arr) => {
    return item === userName;
  });
}

function findIndexArr(userName) {
  
  return users.findIndex((item, index, arr) => {
    return item === userName;
  });
}

app.delete('/user/del/:username', (req, res, next) => {
  users.splice(findIndx, 1);
  res.send({ success: false, data: users });
});



app.listen(3000, () => {
  console.log('server listening on 3000 port...');
}); 