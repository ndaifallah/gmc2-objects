var fb_post = {
    content: "Hello world",
    nbr_likes: 2,
    creation_date: "2022-03-23",
    nbr_comments: 0,
    nbr_shares: 0
};

// console.log(fb_post)


// Importer les données d'un fichier JS
var data = require("./data.js");

// var i = 0;
// while(i < data.length){
//     console.log(data[i].title.rendered);

//     i++;
// }

first_article = data[0];
// console.log(Object.keys(first_article).length);

function logArticle(article){
    console.log(article.title.rendered);
}

// Extraire le titre de l'article article
function getTitle(article){
    return article.title.rendered;
}



// logArticle(data[0]);
var title0 = getTitle(data[0]);
// console.log(title0);

function admission(note){
    if(note >= 10)
        return true;
    else
        return false;
}

// var admis = admission(9);
// console.log(admission(6));

var notes = [9, 10, 12, 15, 16, 17, 18, 19, 20];

// var i = 0;
// while(i < notes.length){
//     console.log(admission(notes[i]));

//     i++;
// }

// console.log(data.length)




var books = require("./books.js");
function extractDownloadCount(book){
    return book.download_count;
}


var i = 0;
var resultat_final = 0;
while (i < books.results.length){
    resultat_final += extractDownloadCount(books.results[i]);
    i++;
}


console.log(resultat_final);


var la = 2000