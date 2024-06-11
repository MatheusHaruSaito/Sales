using AMS3A.Sales.API.Domain;
using AMS3A.Sales.Context;
using AMS3A.Sales.Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AMS3A.Sales.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        //Same Thing as the CategoryController :)
        private readonly ApplicationDataContext _context;
        public ProductController(ApplicationDataContext applicationDataContext)
        {
            _context = applicationDataContext;
        }
        [HttpPost]
        public IActionResult Post(ProductRequest productRequest)
        {
            var product = new Product()
            {
                Description = productRequest.Description,
                Stock = productRequest.Stock,
                Price = productRequest.Price,
                ImageURL = productRequest.ImageURL,
                CategoryId = productRequest.CategoryId
            };

            product.Id = Guid.NewGuid();
            if (product == null) return NotFound();
            _context.Product.Add(product);
            _context.SaveChanges();
            return Ok(product);
        }
        [HttpGet]
        public ActionResult<IEnumerable<Product>> Get()
        {
            return _context.Product.ToList();
        }

        [HttpGet]
        [Route("{Id:Guid}")]
        public IActionResult GetById(Guid Id)
        {
            var product = _context.Product.Where(x => x.Id == Id).FirstOrDefault();
            if (product == null) return NotFound();
            return Ok(product);
        }
        [HttpDelete]
        [Route("{Id:Guid}")]
        public IActionResult Delete(Guid Id) 
        {
            var product = _context.Product.Where(x => x.Id == Id).FirstOrDefault();
            if (product == null) return NotFound();
            _context.Product.Remove(product);
            _context.SaveChanges();
            return Ok();
        }
        [HttpPut]
        [Route("{Id:Guid}")]
        public IActionResult Update(Guid Id, Product newProduct)
        {
            //Just another remind to YOU(me) Change this later...
            //Dont change the CreatedAt never, because you can't change when something is created
            var oldProduct = _context.Product.Where(x => x.Id == Id).FirstOrDefault();
            if (oldProduct == null) return NotFound();
            oldProduct.Description = newProduct.Description;
            oldProduct.Stock = newProduct.Stock;
            oldProduct.Price = newProduct.Price;
            oldProduct.ImageURL = newProduct.ImageURL;
            _context.SaveChanges();
            return Ok();
        }
    }
}
