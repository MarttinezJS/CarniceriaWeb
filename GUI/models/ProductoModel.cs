using System;
using Entity;

namespace GUI.Models
{
    public class ProductoInputModel{
         public string id { get; set; }
        public string nombre { get; set; }
        public string provedor { get; set; }
        public int precio { get; set; }
        public string servicio { get; set; }
        public string presentacion { get; set; }
        public string descripcion { get; set; }
    }
    public class ProductoViewModel: ProductoInputModel
    {
        public ProductoViewModel(){}
        public ProductoViewModel( Producto producto )
        {
            id = producto.Id;
            nombre = producto.Nombre;
            provedor = producto.Provedor;
            precio = producto.Precio;
            servicio = producto.Servicio;
            presentacion = producto.Presentacion;
            descripcion = producto.Descripcion;
        }
    }
}
