let fs = require('fs');

fs.readFile('./a.tx', 'utf8', (err, result) => {
  // if(err) console.log(err.toString());
  if(err) throw err;
  console.log('Dang chay');
  // console.log(result);
});

// err = undefined

// fs.appendFile('./a.tx', 'NodeJS ReactJS', err => {
//   if(err) return console.log(err + '');
//   console.log('Dang chay');
//   console.log('Thanh cong');
// })
