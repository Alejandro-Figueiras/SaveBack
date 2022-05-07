
class CopyBox {
    private id:string;
    private nombre:string;
    private ruta: string;
    private archivos:string[];

    constructor(id:string, nombre:string, ruta:string) {
        this.id = id;
        this.nombre = nombre;
        this.ruta = ruta;
        
        // TODO archivos list
        this.archivos = [];
    }

    getID() {
        return this.id;
    } 

    getNombre() {
        return this.nombre;
    }

    getRuta() {
        return this.ruta;
    }

    getArchivos() {
        return this.archivos;
    }

    toJSON() {
        return {
            id:this.id,
            nombre:this.nombre,
            ruta:this.ruta
        }
    }

}