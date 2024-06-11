using AMS3A.Sales.API.Domain;
using System;
namespace AMS3A.Sales.Domain
{

    public class ProductRequest
    {
        public string Description { get; set; }
        public int Stock { get; set; }
        public double Price { get; set; }
        public string ImageURL { get; set; }
        public Guid CategoryId { get; set; }
    }
}