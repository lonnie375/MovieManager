using MovieManager.Models;
using MovieManager.Services.Interfaces;

namespace MovieManager.Services
{
    public class IMDBService : IIMDBService
    {
        public async Task<MovieAPI> GetMovieByName(string searchTerm)
        {
           

            HttpClient client = new HttpClient(); //Create an instance of HttpClient so that we can reach out to the external API

            client.BaseAddress = new Uri("https://imdb-api.com/en/API/SearchMovie/k_teuk582g/"); //Use the instance to connect to the external API

            var response = await client.GetFromJsonAsync<MovieAPI>(searchTerm); //Retrieve the data we want and convert it to readable format 

            return response; //Return the data so that we can use it in the controller/app
        }
    }
}
