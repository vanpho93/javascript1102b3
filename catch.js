let getAnError = () => {
  throw new Error('Loi nhap lieu');
}

try {
  getAnError();
} catch (e) {
  console.log(e);
} finally {
  console.log('Xong');
}

console.log('Ket thuc');
