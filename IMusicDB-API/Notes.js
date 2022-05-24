// ----- Create a file using ASP.NET Core Web App (search RESTful HTTP sevice)
// We'll place the connectionString in the appSettings.json file in the root of the project

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/* >>>>> MIDDLEWARE - software that handles the http request and response - http request hits the web server on one side, the controller on the other 
side takes the request and gives a respone through the pipeline */

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ----- HTTP VERBS - CRUD (Create [HttpPost], Read [HttpGet], Update [HttpPut], Delete [HttpDelete])
// Model classes - classes that hold the properties (shortcut: prop Tabx2)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ----- RETURNING LIST OF DATA
// Create a Get request in the controller. Create a List of IEnumerable of songs. Retunr that list in the method

// Ceate a Post request in the controller. Since the method is not returning a specific type, the method can be void.

// Create a Put request and add the id to the parameter of the controller and HttpPut to update the specified item in the list

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ----- ENTITY FRAMEWORK (Entity framwork in and ORM - Object relational mapper) - reads and sends information to and from the database
// In Entity Framework, you will have a DbContext class, and in that class, you can have more than one DbSet properties
// The DbContext class will act as a bridge or gateway to our database Ex: Linq -> DbSet -> SQL -> Database
// Use Linq to acquire the DbSet and Entity Framework will create the SQL queries from the Linq queries at th runtime

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ----- Code First vs DB First
// Code First: Model Classes -> ntity Framework -> Database / Tablss
// Database First: Database / Tables -> ntity Framework -> Model Classes

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ----- Configure NuGet packages for Entity Framework Core
// We need install <Microsoft.EnitityFrameworkCore> and <Microsoft.EnitityFrameworkCore.SqlServer> (Connects the SQL Database with the Web API) from the NuGet package in our project to get the data from the database

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ----- DBContext - Code First Approach
// DbContext (Database) ---> DbSet (Tables)
// We need the ApiDbContext constructor to pass the Database Provider & Connection String
// using the MSSQL database, you ned to pass the parameter of the ApiDbContext to the constructor
// -----> We'll pass this information to the constructor via our -- Startup.cs -- file

/* -----> ConnectionString - Entity Framework will look at the connectionString with the name ApiDbContext. To create that connectionString, go
 * to th -- Startup.cs -- file. */

/* -----> Db ENSURE CREATED - creates database at runtime (!!! only use if you will not change your model classes in the future !!!) 
 * --if you wil change your model class in the future, do not use Ensured Create
 */

// In the Startup.cs, we'll add the ApiDbContext to the `Configure()` method
 













