class Producto {
  constructor(id, producto, descripcion, precio) {
    this.id = id;
    this.producto = producto;
    this.descripcion = descripcion;
    this.precio = precio;
  }
}

class Imagen {
  constructor(id, url) {
    this.id = id;
    this.url = url;
  }
}

class Categoria{
  constructor(id, nombre){
    this.id = id;
    this.nombre = nombre;
    this.subcategorias = [];
  }

  agregarSubcategoria(subcategoria) {
    this.subcategorias.push(subcategoria);
  }

  obtenerInformacion() {
    let informacion = `ID: ${this.id}, Nombre: ${this.nombre}`;

    if (this.subcategorias.length > 0) {
      informacion += `\nSubcategorías: ${this.subcategorias.map(subcat => subcat.nombre).join(', ')}`;
    }

    return informacion;
  }
}

const categoriaPrincipal = new Categoria(1, 'Electrónicos');
const subcategoria1 = new Categoria(2, 'Smartphones');
const subcategoria2 = new Categoria(3, 'Laptops');

categoriaPrincipal.agregarSubcategoria(subcategoria1);
categoriaPrincipal.agregarSubcategoria(subcategoria2);

const producto1 = new Producto(101, 'Laptop HP', 'Potente laptop con procesador i7', 1200.0);

const im1 = new Imagen(1, 'iphone14_imagenOficial.jpg');

console.log(categoriaPrincipal.obtenerInformacion());
console.log(`Producto: ${producto1.producto}, Descripción: ${producto1.descripcion}, Precio: ${producto1.precio}`);
console.log(`Imagen: ${im1.id}, URL: ${im1.url}`);