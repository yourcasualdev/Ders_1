// //Değişgenler
// const mesaj = "Hello World";

// var mesaj2 = "global";


// let mesaj3 = "block scope";
// mesaj = "Merhaba dünya";
// console.log(mesaj);



// for (i = sayac; i > -5; i--) {
//     console.log(i);
// }

// function add(ilkSayı, ikinciSayi) {
//     var toplam = ilkSayı + ikinciSayi;
//     return toplam;
// }

// function çıkart(ilkSayi, ikinciSayi) {
//     var sonuc = ilkSayi - ikinciSayi;
//     return sonuc
// }


// console.log(çıkart(add(3, 5), 2))

// var array = [1, 2, 3.2, 4, 5, 6, 7];

// for (i = 0; i < array.length; i++) {
//     console.log(array[i])
// }



// console.log(array)

// const employee = {
//     name: "Sercan",
//     surname: "Yegin",
//     interests: [
//         "Kitap okumak",
//         "Yüzmek"
//     ],
//     books: [
//         {
//             kitapAdı: "Suç ve Ceza",
//             sayfaSayısı: 5
//         },
//         {
//             kitapAdı: "Gece",
//             sayfaSayısı: 19
//         },
//     ]
// }

// console.log(employee.books[0].kitapAdı)

// var yazı = "MerhaBa ben ibraHim babal";

// // console.log(yazı.split(" ")[2])
// console.log(yazı.charAt(yazı.indexOf("b")))


// var sayı = "10 years";

// var yıl = parseInt(sayı.split(" ")[0]);

// console.log(typeof (yıl))

const kitle_endexi = (kilo, boy) => {
    var endex = kilo / (boy * boy);

    if (endex < 20) {
        console.log("Zayıfsın.")
    } else if (endex > 20 && endex < 30) {
        console.log("Normalsin")
    } else {
        console.log("Şişmansın")
    }
    return endex
}


console.log(kitle_endexi(55, 1.55))
console.log(kitle_endexi(64, 1.70))
console.log(kitle_endexi(100, 1.55))