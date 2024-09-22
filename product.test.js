const ProductManager = require('./product');

describe('ProductManager', () => {
  let productManager;

  beforeEach(() => {
    productManager = new ProductManager();
  });

  describe('AGREGAR_PRODUCTO', () => {
    it('debe agregar un producto', () => {
      productManager.AGREGAR_PRODUCTO('Producto 1', 10);
      expect(productManager.OBTENER_TODOS_PRODUCTOS()).toHaveLength(1);
    });

    it('debe incrementar el id en 1 cada vez que se añada un producto', () => {
      productManager.AGREGAR_PRODUCTO('Producto 1', 10);
      productManager.AGREGAR_PRODUCTO('Producto 2', 20);
      expect(productManager.OBTENER_TODOS_PRODUCTOS()[1].id).toBe(1);
    });

    it('debe lanzar un error si el nombre o el precio no están definidos', () => {
      expect(() => productManager.AGREGAR_PRODUCTO()).toThrowError('Nombre y precio son requeridos');
    });

    it('debe lanzar un error si el producto ya existe', () => {
      productManager.AGREGAR_PRODUCTO('Producto 1', 10);
      expect(() => productManager.AGREGAR_PRODUCTO('Producto 1', 10)).toThrowError('Producto ya existe');
    });
  });

  describe('ELIMINAR_PRODUCTO', () => {
    it('debe eliminar un producto', () => {
      productManager.AGREGAR_PRODUCTO('Producto 1', 10);
      productManager.ELIMINAR_PRODUCTO(0);
      expect(productManager.OBTENER_TODOS_PRODUCTOS()).toHaveLength(0);
    });

    it('debe lanzar un error si el producto no existe', () => {
      expect(() => productManager.ELIMINAR_PRODUCTO(0)).toThrowError('Producto no existe');
    });
  });

  describe('OBTENER_PRODUCTO', () => {
    it('debe devolver un producto por su id', () => {
      productManager.AGREGAR_PRODUCTO('Producto 1', 10);
      const PRODUCTO = productManager.OBTENER_PRODUCTO(0);
      expect(PRODUCTO.nombre).toBe('Producto 1');
    });

    it('debe lanzar un error si el producto no existe', () => {
      expect(() => productManager.OBTENER_PRODUCTO(0)).toThrowError('Producto no existe');
    });
  });

  describe('ACTUALIZAR_PRODUCTO', () => {
    it('debe actualizar un producto por su id', () => {
      productManager.AGREGAR_PRODUCTO('Producto 1', 10);
      productManager.ACTUALIZAR_PRODUCTO(0, 'Producto 2', 20);
      const PRODUCTO = productManager.OBTENER_PRODUCTO(0);
      expect(PRODUCTO.nombre).toBe('Producto 2');
    });

    it('debe lanzar un error si el producto no existe', () => {
      expect(() => productManager.ACTUALIZAR_PRODUCTO(0, 'Producto 2', 20)).toThrowError('Producto no existe');
    });
  });
});