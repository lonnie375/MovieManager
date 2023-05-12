# Movie manager

## Description: 
- I created this project to add to my portfolio and to learn the skills needed in order to become a jr software developer.
  This application will allow the user to search through the IMDB database to locate the movie they want save to their list of favorite movies. At this point in time the user will only be able to search by movie title ("https://imdb-api.com/en/API/SearchMovie/") and gather the title, image, and description of the movie. 
  This list will be useful if the user wants to keep an account of their favorite movies android if they want to use this list to recall movies that they intend to watch at a later time. 
  The users information will be stored in a database. Each user will be required to login and create a username to continually login. 
  I had fun learning how to use Auth0. This definitely helped me create a safe way to store the users sensitive information. 
  This project obviously consists of models, middleware, and services. Angular is going to be the framework used to display the information to the user. 
  I am also using Tailwind CSS to help create the userinterface to help the user easily interact with the web application.
  I chose Tailwind CSS because of it's popularity for front end development. I saw this as a new challenge that I could conquer as well since this is the second project
  that I used Tailwind CSS. 


## Technologies Used: 
- Microsoft SQL Server
- C#
- EntityFrameworkCore 
- Angular
- HTML5
- CSS3
- Tailwind CSS3
- IMDB API (third party) 



## Screenshots

![MainPage](https://user-images.githubusercontent.com/30028393/236428315-5a5b8fbf-0fd2-482a-bd98-7b487adbbeb4.png)

Upon accessing the application, users can log in or sign up by clicking the login button at the top right of the screen.


![Auth0](https://user-images.githubusercontent.com/30028393/236428625-60a87111-433b-4891-8175-5fe8f0cee81e.png)

Users can enter their login information, sign up, or use Google for easy authentication.


![Userlist](https://user-images.githubusercontent.com/30028393/236428939-edb74594-4f7a-465b-bc16-ed4530975468.png)

Upon login, users can access their movie list (My Movies) or search for a new movie (Find New Movie).


![UsersList](https://user-images.githubusercontent.com/30028393/236429200-4f268b9e-1bf4-4596-a5b5-b706cacfdba2.png)

Users can view their list of saved movies, including the title, category, option to change the category, and options to remove the movie.

Note: The Search Movies feature is currently under development.

## Getting Started 

### Prerequisites
Ensure you have the following installed on your system: 

* Microsoft SQL Server
* .NET Core SDK
* Node.js and npm
* ANgular CLI

### Installation

1. Clone the repository.
2. Set up the database by running the SQL scripts provided in the Database folder.
3. In the Server folder, run dotnet restore to install the required packages.
4. In the Client folder, run npm install to install the required packages.
5. Configure the connection string in appsettings.json to connect to your SQL Server instance.
6. Sign up for an IMDB API key and add it to the appsettings.json file.
7. Sign up for an Auth0 account and configure the authentication settings in the Client folder.
