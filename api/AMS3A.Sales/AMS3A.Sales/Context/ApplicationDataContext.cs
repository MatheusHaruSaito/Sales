using AMS3A.Sales.API.Domain;
using AMS3A.Sales.Domain;
using Microsoft.EntityFrameworkCore;
using System;

namespace AMS3A.Sales.Context
{

    public class ApplicationDataContext : DbContext
    {
        public ApplicationDataContext(DbContextOptions<ApplicationDataContext> options) : base(options)
        {
        }
        public DbSet<Category> Category { get; set; }
        public DbSet<Product> Product { get; set; }
    }

}