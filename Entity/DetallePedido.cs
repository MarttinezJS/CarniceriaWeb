namespace Entity
{
    public class DetallePedido
    {
        public string Id {get; set;}
        public int Cantidad { get; set; }
        public string Presentacion { get; set; }
        public float SubTotal { get; set; }
        public Producto Producto { get; set; }
    }
}