

export default class Archivo {
    
    private id:string;
    private rutaRelativa:string;
    private size:number;
    private ctime:number;
    private mtime:number;

    constructor(id:string, rutaRelativa:string, size:number, ctime:number, mtime:number) {
        this.id = id;
        this.rutaRelativa = rutaRelativa;
        this.size = size;
        this.ctime = ctime;
        this.mtime = mtime;
    }

    getID() {
        return this.id;
    }

    getRutaRelativa() {
        return this.rutaRelativa;
    }

    getSize() {
        return this.size;
    }

    getChangedTime() {
        return this.ctime;
    }

    getModifiedTime() {
        return this.mtime;
    }

    isDiferente(stats:any) {
        // TODO hacer function para comprobar
    }

}