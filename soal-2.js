const hewanBuas = ["Harimau", "Singa", "Beruang", "Serigala"];
const hewanJinak = ["Kucing", "Kelinci", "Ayam"];

const fungsi1 = ()=>{
    return array = [...hewanBuas,...hewanJinak];
}

const fungsi2 = ()=>{
    let [ikan,wortel,biji] = hewanJinak;

    return "ikan : "+ikan+" | wortel : "+wortel+" | biji : "+biji;
}

console.log("Hasil gabungan : "+fungsi1());

setTimeout(() => {
    console.log("Hasil pemetaan :  "+fungsi2());
}, 5000);
