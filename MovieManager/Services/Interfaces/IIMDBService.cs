using MovieManager.Models;

namespace MovieManager.Services.Interfaces
{
  
        public interface IIMDBService
        {
            Task<MovieAPI> GetMovieByName(string searchTerm);
        }
   
}
