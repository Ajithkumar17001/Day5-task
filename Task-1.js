class Movie {
    constructor(title,studio,rating="PG"){
        this.title=title,
        this.studio=studio,
        this.rating=rating
    }
    getpg(movies){
        return movies.filter(r=>r.rating==="PG")
    }
}
class tamil extends Movie{
    constructor(title,studio,rating){
        super(title,studio,rating);
    }
}

const movie1 = new tamil("LEO","Sun Pictures","PG");
console.log(movie1);

const movie2 = new tamil("Mark Antony","Mini Studio","PG-13");
console.log(movie2);

class English extends Movie{
    constructor(title,studio,rating){
        super(title,studio,rating);
    }
}
const movie3 = new English("Jailer","Sun Pictures");
console.log(movie3);

const movie4 = new English("LEO","Sun Pictures","PG");
console.log(movie3);

console.log(movie1.getpg([movie1,movie2,movie3,movie4]));

const movie5 = new English("Casino Royale","Eon Productions","PG­13");
console.log(movie5);