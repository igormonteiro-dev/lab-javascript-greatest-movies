// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
/*We need to get the array of all directors. Since this is a warm up, we will give you a hint: you have to _map_ through the array of movies and get all the directors into one array as a final result. Go ahead and create a function named `getAllDirectors()` that receives an array of movies as an argument and returns a new (_mapped_) array.*/

function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((movie) => movie.director);
  console.log(directors.length, moviesArray.length);
  return directors;
}

getAllDirectors(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
  let retVal = [];
  moviesArray.filter((el) => {
    el.director === "Steven Spielberg" && el.genre.includes("Drama")
      ? retVal.push(el)
      : null;
  });
  return retVal.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const sum = moviesArray.reduce((el, movie) => el + movie.score, 0);

  const avg = parseFloat(sum) / moviesArray.length;

  return parseFloat(avg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
  const retVal = moviesArray.filter((movie) => movie.genre.includes("Drama"));
  //get the function we already have
  const avg = scoresAverage(retVal);
  return avg;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return moviesArray
    .map((movie) => movie)
    .sort((a, b) => {
      if (a.year === b.year) {
        return a.title.localeCompare(b.title);
      }
      return a.year - b.year;
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const filteredByTitle = [...moviesArray].map((elem) => elem.title);
  const orderedTitle = filteredByTitle.sort();
  return orderedTitle.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
