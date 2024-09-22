class ProductManager {
    constructor() {
      this.PRODUCTOS = [];
      this.ID = 0;
    }
  
    RESETEAR_PRODUCTOS() {
      this.PRODUCTOS = [];
      this.ID = 0;
    }
  
    AGREGAR_PRODUCTO(nombre, precio) {
      if (!nombre || !precio) {
        throw new Error('Nombre y precio son requeridos');
      }
      const PRODUCTO_EXISTENTE = this.PRODUCTOS.find((producto) => producto.nombre === nombre);
      if (PRODUCTO_EXISTENTE) {
        throw new Error('Producto ya existe');
      }
      this.PRODUCTOS.push({ id: this.ID, nombre, precio });
      this.ID++;
    }
  
    ELIMINAR_PRODUCTO(id) {
      const INDICE_PRODUCTO = this.PRODUCTOS.findIndex((producto) => producto.id === id);
      if (INDICE_PRODUCTO === -1) {
        throw new Error('Producto no existe');
      }
      this.PRODUCTOS.splice(INDICE_PRODUCTO, 1);
    }
  
    OBTENER_TODOS_PRODUCTOS() {
      return this.PRODUCTOS;
    }
  
    OBTENER_PRODUCTO(id) {
      const PRODUCTO = this.PRODUCTOS.find((producto) => producto.id === id);
      if (!PRODUCTO) {
        throw new Error('Producto no existe');
      }
      return PRODUCTO;
    }
  
    ACTUALIZAR_PRODUCTO(id, nombre, precio) {
      const INDICE_PRODUCTO = this.PRODUCTOS.findIndex((producto) => producto.id === id);
      if (INDICE_PRODUCTO === -1) {
        throw new Error('Producto no existe');
      }
      this.PRODUCTOS[INDICE_PRODUCTO] = { id, nombre, precio };
    }
  }
  
  module.exports = ProductManager;