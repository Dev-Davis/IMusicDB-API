using IMusicDB_API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace IMusicDB_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SongsController : ControllerBase
    {
        // set as static to see a single copy of this list throguh this controller
        private static List<Song> songs = new List<Song>()
        {
            new Song() {Id = 0, Title = "We Gonna Make It", Language = "English"},
            new Song() {Id = 1, Title = "Win Or Lose", Language = "English"},
            new Song() {Id = 2, Title = "We Cry Together", Language = "English"}
        };

        [HttpGet]
        public IEnumerable<Song> Get()
        {
            return songs;
        }

        // add songs in Postman with POST request
        [HttpPost]
        public void Post([FromBody] Song song)
        {
            songs.Add(song);
        }

        // has the id as an extra parameter and in the request to update a specific reecord from the database
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Song song)
        {
            songs[id] = song;
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            songs.RemoveAt(id);
        }
    }
}
