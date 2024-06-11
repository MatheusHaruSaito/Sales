using AMS3A.Sales.API.Domain;
using System;
namespace AMS3A.Sales.Domain
{

    public class Product
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Description { get; set; }
        public int Stock { get; set; }
        public double Price { get; set; }
        public string ImageURL { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.Now;
        public Category Category { get; set; }
        public Guid CategoryId { get; set; }
    }
}