const object = {
    nama : "Maulina",
    nim : "02042111020",
    email :"maulinainasnasyaa@gmail.com"
}

const {nama,nim,email} = object;

console.log(nama);
console.log(nim);
console.log(email);

const arr1 = ["Maul","Mail"];
const arr2 = ["Suci","Amanah"];
const arr3 = ["Inas","Nasya"];

const gabungan = [...arr1,...arr2,...arr3];
console.log(gabungan);
