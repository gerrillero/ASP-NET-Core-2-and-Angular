using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    public class GroepenController : Controller
    {

        [HttpGet("[action]")]
        public IEnumerable<Groep> GetGroepen()
        {

            List<Groep> groepen = new List<Groep>();

            groepen.Add(new Groep { Id = Guid.NewGuid(), Naam = "Groep 1" });
            groepen.Add(new Groep { Id = Guid.NewGuid(), Naam = "Groep 2" });


            return groepen.ToList();
        }
    }
}