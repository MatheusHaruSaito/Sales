using AMS3A.Sales.Domain;
using System;

namespace AMS3A.Sales.API.Domain
{

    public class Category
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Description { get; set; }
        public bool IsActived { get; set; }
        public string ImageURL { get; set; }
        public ICollection<Product> Product { get; set; }

    }
}