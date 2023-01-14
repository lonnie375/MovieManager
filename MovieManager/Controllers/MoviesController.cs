using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MovieManager.Data;
using MovieManager.Enums;
using MovieManager.Models;
using MovieManager.Services;
using MovieManager.Services.Interfaces;

namespace MovieManager.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : BaseController
    {
        private ApplicationDbContext _context; //Get access to the database data/tables

        private IIMDBService _IMDBService; //Get access to the service we created so that we can get data from our API

        public MoviesController(ApplicationDbContext context, IIMDBService service) //Instantiate our variables
        {
            _context = context;
            _IMDBService = service;
        }

        //Get all movies from the users list 
        [HttpGet("GetMoviesFromUserList")]
        [Authorize]
        public IActionResult GetAllMoviesFromUserList()
        {
            if (_context == null)
            {
                return NotFound(); 
            }
            var response = _context.Movies.Where(x => x.Auth0Id == GetUserAuthId()).ToList();

            return Ok(response);
        }

        //Use Random Feature *Not sure if this works as it wasn't implemented in our program
        [HttpGet("GetRandomMovieFromUserList")]
        public IActionResult GetRandomMovieFromUserList()
        {
            if (_context.Movies == null)
            {
                return NotFound(); 
            }


            var userList = _context.Movies.Where(x => x.Auth0Id == GetUserAuthId()).ToList(); //Get the user's list with the propery Auth Id
            var rand = new Random(); //Setting up the random feature; 
            int number = rand.Next(1, userList.Count() + 1);

            var movie = userList[number - 1]; 
            return Ok(movie);
        }


        //Get movies by category 
        [HttpGet("GetMoviesByCategoryFromUserList")]
        public IActionResult GetMoviesByCategoryFromUserList(MovieCategory category)
        {
            if (_context.Movies == null)
            {
                return NotFound();
            }

            //Search Movieslist for correct user and return only the movies that reflect the given category
            var response = _context.Movies.Where(x => x.Auth0Id == GetUserAuthId() && x.Category == category).ToList(); 

            if (response.Count == 0)
            {
                return BadRequest(category);
            }

            return Ok(response);
        }

        [HttpGet("GetRandomMovieByCategoryFromUserList")]
        public IActionResult GetRandomMovieByCategoryFromUserList(MovieCategory category)
        {
            if (_context.Movies == null)
            {
                return NotFound();
            }

            var userCategoryList = _context.Movies.Where(x => x.Auth0Id == GetUserAuthId() && x.Category == category).ToList();

            var rand = new Random();
            int number = rand.Next(1, userCategoryList.Count() + 1);

            if (userCategoryList.Count == 0)
            {
                return BadRequest(category);
            }

            var movie = userCategoryList[number - 1];

            if (movie == null)
            {
                return BadRequest(movie);
            }

            return Ok(movie);
        }

        //Allow user to delete a movie from their list
        [HttpDelete("DeleteMovieFromUserList")]
        public IActionResult DeleteMovieFromUserList(int id)
        {
            Movie movie = _context.Movies.FirstOrDefault(x => x.Id == id); //Finds the movie in their list with the matching ID
            if (movie == null)
            {
                return BadRequest(movie);
            }
            _context.Movies.Remove(movie);

            _context.SaveChanges();

            return Ok();
        }

        //Allow the user to add movies to their list 
        [HttpPost("AddMovieToUserList")]
        [Authorize]
        public IActionResult AddMovieToUserList(Movie newMovie)
        {
            newMovie.Auth0Id = GetUserAuthId();
            _context.Movies.Add(newMovie);
            _context.SaveChanges();
            return Ok();
        }

        //Get the users username
        [HttpGet("GetUsername")]
        public IActionResult GetUsername(string username)
        {
            var searchUser = _context.Users.Where(x => x.UserName.ToLower() == username.ToLower()).FirstOrDefault();

            return Ok(searchUser);
        }

        //Create a new user 
        [HttpPost("AddNewUser")]
        public IActionResult AddNewUser(User newUser)
        {
            newUser.AuthId = GetUserAuthId();
            _context.Users.Add(newUser);
            _context.SaveChanges();
            return Ok();
        }

        //Update Movies Category 
        [HttpPut("UpdateCategory")]
        public IActionResult UpdateCategory(int id, MovieCategory category)
        {

            Movie movieToUpdate = _context.Movies.FirstOrDefault(x => x.Id == id); //Identify the movie to update by id

            movieToUpdate.Category = category; //Set the category to the new category provided

            _context.SaveChanges();

            return Ok();
        }

        //Search for a Movie
        [HttpGet("SearchThirdParty")]
        public async Task<IActionResult> SearchThirdParty(string searchTerm) //async used because we're reaching out to the external API and others could be doing so as well. Ours runs independently
        {

            var userSearch = await _IMDBService.GetMovieByName(searchTerm); //Await is used to return the information

            return Ok(userSearch);
        }

        //Check for Username 
        [HttpGet("CheckForUserName")]
        [Authorize]
        public async Task<IActionResult> CheckForUserName()
        {
            bool userIsThere;
            userIsThere = _context.Users.Any(x => x.AuthId == GetUserAuthId());
            return Ok(userIsThere);
        }

        //Recommend a Movie***
        [HttpPost("RecommendMovie")]
        [Authorize]
        public async Task<IActionResult> RecommendMovie(Recommendation rec)
        {
            var user = _context.Users.Where(x => x.UserName == rec.UserName).FirstOrDefault();
            if (user == null)
            {
                return BadRequest(user);
            }
            Recommendation r = new Recommendation()
            {
                SenderName = GetUserAuthId(),
                ReceiverName = user.AuthId,
                Title = rec.Title,
                IMDBId = rec.IMDBId,
                ImageURL = rec.ImageURL
            };

            _context.Recommendation.Add(r);
            _context.SaveChanges();
            return Ok();
        }

        //Display the recommendation 
        [HttpGet("DisplayRecommendations")]
        public async Task<IActionResult> DisplayRecommendations()
        {
            return Ok(_context.Recommendation.Where(x => x.ReceiverName == GetUserAuthId()).ToList());
        }


    }
}
