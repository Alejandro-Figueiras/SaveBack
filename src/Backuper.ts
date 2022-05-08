import CopyBox from "./CopyBox";
import fs from "fs";
import Archivo from "./Archivo";

interface archivoExplorado {
    ruta:string,
    stat:any
}

const explorarDirectorio = (ruta:string, rutaRelativa:string) => {
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
    let archivos = explorarDirectorio(box.getRuta(), "");
    let archivosUpdate:Archivo[] = [];
    for (let arch of box.getArchivos()) {
        let encontrado = false;
        for (let archivo of archivos) {
            if (archivo.ruta == arch.getRutaRelativa()) {
                encontrado = true;
                // TODO if box.isDiferente y hacer funcion
                // TODO encontrado
            }
        }

        if (!encontrado) {
            // TODO eliminado
        }
            
        
    }
}