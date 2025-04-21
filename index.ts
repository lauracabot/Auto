
class Auto {
  patente: string;
  marca: string;
  modelo: string;
  año: number;

  constructor(patente: string, marca: string, modelo: string, año: number) {
    this.patente = patente;
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }

  mostrarInfo(): void {
    console.log(`Auto: ${this.patente} - ${this.marca} ${this.modelo} (${this.año})`);
  }
}

class RegistroAutomotor {
  autos: Auto[] = [];

  alta(auto: Auto): void {
    this.autos.push(auto);
  }

  borrar(patente: string): void {
    this.autos = this.autos.filter(a => a.patente !== patente);
  }

  actualizar(patente: string, nuevoAuto: Auto): void {
    const index = this.autos.findIndex(a => a.patente === patente);
    if (index !== -1) {
      this.autos[index] = nuevoAuto;
    }
  }

  consultar(patente: string): Auto | undefined {
    return this.autos.find(a => a.patente === patente);
  }

  listar(): void {
    this.autos.forEach(a => a.mostrarInfo());
  }
}

// Clase Matriz
class Matriz {
  private matriz: number[][];

  constructor(filas: number, columnas: number) {
    this.matriz = Array.from({ length: filas }, () => Array(columnas).fill(0));
  }

  set(x: number, y: number, valor: number): void {
    if (x >= 0 && y >= 0 && x < this.matriz.length && y < this.matriz[0].length) {
      this.matriz[x][y] = valor;
    } else {
      console.log("Índice fuera de rango");
    }
  }

  get(x: number, y: number): number {
    if (x >= 0 && y >= 0 && x < this.matriz.length && y < this.matriz[0].length) {
      return this.matriz[x][y];
    } else {
      console.log("Índice fuera de rango");
      return -1;
    }
  }

  mostrar(): void {
    this.matriz.forEach(fila => console.log(fila.join(" ")));
  }
}

// Aquí puedes probar las clases sin necesidad de un main separado

// Prueba de Auto y RegistroAutomotor
const registro = new RegistroAutomotor();
const auto1 = new Auto("AAA123", "Toyota", "Corolla", 2020);
const auto2 = new Auto("BBB456", "Ford", "Fiesta", 2018);

registro.alta(auto1);
registro.alta(auto2);
registro.listar();
registro.borrar("BBB456");
console.log("Después de borrar:");
registro.listar();

// Prueba de Matriz
const matriz = new Matriz(3, 3);
matriz.set(0, 0, 5);
matriz.set(1, 1, 10);
matriz.set(2, 2, 15);

console.log("Matriz después de asignar valores:");
matriz.mostrar();

console.log("Valor en (1, 1):", matriz.get(1, 1));
