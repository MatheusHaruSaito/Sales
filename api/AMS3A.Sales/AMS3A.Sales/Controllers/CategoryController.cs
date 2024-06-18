using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AMS3A.Sales.Domain;
using AMS3A.Sales.API.Domain;
using AMS3A.Sales.Context;
using AMS3A.Sales.Domain.DTO;
namespace AMS3A.Sales.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        //Remeber to Change your Verification Method because Guid is never null;
        //Put the commands that uses database in a repository later
        private readonly ApplicationDataContext _context;
        public CategoryController(ApplicationDataContext applicationDataContext)
        {
            _context = applicationDataContext;  
        }
        [HttpPost]
        public ActionResult Post(CategoryRequest categoryRequest)
        {
            var cat = new Category()
            {
                Description = categoryRequest.Description,
                IsActived = true,
                ImageURL = categoryRequest.ImageURL,
            };
            if (cat == null) return NotFound();
            _context.Category.Add(cat);
            _context.SaveChanges();
            return Ok(cat);
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CategoryDTO>>> Get()
        {
            var categories = await _context.Category.ToListAsync();
            if (categories == null)
            {
                return NotFound();
            }
            var response = new List<CategoryDTO>();
            foreach (var category in categories)
            {
                response.Add(new CategoryDTO { 
                        Id = category.Id,
                        Description = category.Description,
                        ImageURL = category.ImageURL
                    });
                   
             }
            return Ok(response);
        }
        [HttpGet]
        [Route("{Id:Guid}")]
        public ActionResult<Category> GetById(Guid Id)
        {
            var cat = _context.Category.FirstOrDefault(x => x.Id == Id);
            if (cat == null) return NotFound();
            return Ok(cat);
        }
        [HttpDelete]
        [Route("{Id:Guid}")]
        public IActionResult Delete(Guid Id)
        {
            var Cat = _context.Category.FirstOrDefault(x => x.Id == Id);
            if (Cat == null) return NotFound();

            _context.Category.Remove(Cat);
            _context.SaveChanges();
            return Ok();
        }
        [HttpPut]
        [Route("{Id:Guid}")]
        public IActionResult Update(Guid Id, Category newCat) 
        {
            var oldCat = _context.Category.FirstOrDefault(x => x.Id == Id);
            if (oldCat == null) return NotFound();
            //this is working, but you(me) can do that looks better
            //Do not change the Id, use an DTO later to this...
            oldCat.Description = newCat.Description;
            oldCat.IsActived = newCat.IsActived;
            oldCat.ImageURL = newCat.ImageURL;
            _context.SaveChanges();
            return Ok();
        }
    }
}
