using AMS3A.Sales.Domain;
using System;

namespace AMS3A.Sales.API.Domain
{

    public class CategoryRequest
    {
        public string Description { get; set; }
        public string ImageURL { get; set; }
    }
}