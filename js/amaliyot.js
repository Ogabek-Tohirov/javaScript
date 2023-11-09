'use strict'

// const numberOfMovies = +prompt("Nechta kino ko'rdingiz?");

// const moviesDB = {
//     count: numberOfMovies,
//     names:{},
//     actors: {},
//     genres: [],
//     private: false
// }

// const a = prompt("Oxirgi ko'rgan filmingiz?"),
//       b = +prompt("Necha baxo berasz?"),
//       c = prompt("Yaxshi ko'rgan filmingiz?"),
//       d = +prompt("Necha baxo berasz?");

//       moviesDB.names[a] = b;
//       moviesDB.names[c] = d;

//       console.log(moviesDB); 



// const moviesDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false,
//     moviesApp: function () {
//         moviesDB.count= +prompt("nechta kino ko'rdingiz?", "5")

//         while(moviesDB.count == "" || moviesDB.count == null || isNaN(moviesDB.count)){
//             moviesDB.count= +prompt("Iltimos to'g'ri qiymat kiriting! Nechta kino ko'rdingiz?", "5")
//         }
//     },

//     queryForUser: function() {
//         for(let i = 0; i < 2; i++){
//             const a = prompt("oxirgi ko'rgan filmingiz?" ),
//                   b = +prompt("Necha baxo berasz?" );

//             if(a !== null && a !=="" && b !== "") {
//                 moviesDB.movies[a]= b;
//                 console.log("done");
//             }
//             else {
//                 console.log("error");
//                 i--;
//             }

//         }
//     },

//     levelValue: function() {
//         if(moviesDB.count < 5) {
//             console.log("Kam kino kurarkansan harip")
//         }
//         else if(moviesDB.count>5 && moviesDB.count<10) {
//             console.log("Narmalni narmalni")
//         }
//         else {
//             console.log("Kino ko'rishdan boshqa ishing yomi chort!")
//         }
//     },

//     showDb: function() {
//         if(!moviesDB.private) {
//             console.log(moviesDB);
//         }
//     },

//     addGenres: function() {
//         for(let i=0; i<=2; i++) {
//             const genre = prompt( `Yaxshi korgan janringiz?  ${i+1} `) ;
//             if(genre == null || genre === ""){
//                 console.log("Norm javob bering!");
//                 i--;
//         }
//         else {
//             moviesDB.genres[i] = genre;
//             moviesDB.genres.sort();
//         }
//     }
//     moviesDB.genres.forEach((item,index) => {
//         console.log(` Yaxshi korgan janringiz ${index+1} nomi ${item} `);
//     });
// },

// fullDB: function () {
//     if(moviesDB.private) {
//         moviesDB.private=false
//     }
//     else {
//         moviesDB.private=true
//     }
// }
// }


//  mashq

// const moviesDB =  {
//     genres: [],

//         generes: function() {
//             for(let i=0; i<5; i++) {
//                 genre = prompt(`Yaxshi ko'rgan janringiz?`);
//                 if(names == "" && names == null) {
//                     prompt(`Savolga to'g'ri javob ber chort!  ${i--}`)
//                 }
//                 else {
//                     moviesDB.genres [i] =genre;
//                 }
//             }
//         }
// }