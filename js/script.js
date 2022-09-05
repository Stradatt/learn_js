const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieD = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt("Какой из последних фильмов вы смотрели?", ""),
      b = prompt("На сколько его оцените?", ""),
      c = prompt("Какой из последних фильмов вы смотрели?", ""),
      d = prompt("На сколько его оцените?", "");

personalMovieD.movies[a] = b;
personalMovieD.movies[c] = d;

console.log(personalMovieD);







/* Интерполяция
const category = 'toys';
console.log(`https://someurl.com/${category}/5`);

const user = 'Ivan';

alert(`Привет, ${user}`);

*/

/* prompt, alert, confirm
const answers = [];
answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Ваш пол?', '');
answers[2] = prompt('Сколько вам лет?', '');

document.write(answers);*/


/*const answer = prompt("Вам есть 18?", "");
console.log(+answer+5);*/
/*const result = confirm('Are you here?');
console.log(result);*/


/*  объекты и массивы
let obj = {
    user: ['Anne', 'Fox', 'Six12'],
    sort: 31,
    color: '#666',
    death: true,
};
let fake = 'fake';

obj [fake] = 228;

console.log(obj);

*/

    // console.log(obj.name);console

// console.log(obj['name']);

/*
let arr = ['plum.png', 'orange.jpg', 'apple.png', {}, []];
console.log(arr[1]);
*/
