namespace AMS3A.Sales.Domain.DTO
{
    public class CategoryDTO
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Description { get; set; }
        public string ImageURL { get; set; }

    }
}
