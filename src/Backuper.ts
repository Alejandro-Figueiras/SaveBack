import CopyBox from "./CopyBox";
import fs from "fs";
import Archivo from "./Archivo";
import ArchivoModificado from "./ArchivoModificado";
const uuid = require('uuid').v4;

// IMPORTANTE MODIFICAR ADEMAS EN ArchivoModificado.ts
interface archivoExplorado {
    ruta:string,
    stat:any
}

const explorarDirectorio = (ruta:string, rutaRelativa:string = "") => {
    // La ruta y la ruta relativa ambas deben contener un / al final
    let archivos:archivoExplorado[] = [];

    let dir = fs.readdirSync(ruta);
    for (let elem of dir) {
        let rutaElem = ruta + elem;
        let info = fs.statSync(rutaElem);
        if (info.isDirectory()) {
            let nuevos = explorarDirectorio(rutaElem+"/", rutaRelativa+elem+"/");
            for (let el of nuevos) {
                archivos.push(el);
            }
        } else {
            archivos.push({ruta: `${(rutaRelativa.length)?rutaRelativa:""}${elem}`, stat: info});
        }
    }

    return archivos;
    
}

export const backup = (box: CopyBox) => {
    // Leer archivos
    let archivos = explorarDirectorio(box.getRuta());
    let archivosUpdate:ArchivoModificado[] = [];
    let archivosVistos:any[] = [];
    for (let arch of box.getArchivos()) {
        let encontrado = false;
        for (let archivo of archivos) {
            if (archivo.ruta == arch.getRutaRelativa()) {
                encontrado = true;
                archivosVistos.push(archivo);
                if (arch.isDiferente(archivo.stat)) {
                    // Modificado
                    archivosUpdate.push(new ArchivoModificado(arch, archivo, 1));
                }
            }
        }

        if (!encontrado) {
            // Eliminado
            archivosUpdate.push(new ArchivoModificado(arch, {ruta:arch.getRutaRelativa(), stat:{}}, 3));
        }
    }

    // Esto elimina los archivos ya vistos, dejando los nuevos para ser procesados
    for (let visto of archivosVistos) archivos.splice(archivos.findIndex(visto), 1);

    // Nuevos
    for (let archivo of archivos) {
        let id = uuid();
        let arch = new Archivo(id,archivo.ruta, archivo.stat.size, archivo.stat.ctime, archivo.stat.mtime);
        archivosUpdate.push(new ArchivoModificado(arch, archivo, 2));
    }
    
    // test
    for (let a of archivosUpdate) 
    console.log(a);
    
    // TODO hacer la copia a algun lugar
    // TEMPORAL staged
    for (let archiv of archivosUpdate) {
        
    }

}