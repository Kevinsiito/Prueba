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
      informacion += `\nSubcategorías: ${this.subcategorias.join(', ')}`;
    }

    return informacion;
  }
}


