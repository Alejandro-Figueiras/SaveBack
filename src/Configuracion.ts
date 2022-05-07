import fs from "fs";

export default class Configuracion {
	
	static ruta:string = "";
	
	static boxes:CopyBox[];

	static cargar() {
		this.verificar();

		const rutaConfig = this.ruta+"config.json";
        if (fs.existsSync(rutaConfig)) {
            let file = fs.readFileSync(rutaConfig, 'utf-8');
            return JSON.parse(file);
        } else {
            return {}
        }
	}

	static guardar() {
		interface finalJSON {
			boxes: Object[]
		}

		let json:finalJSON = {boxes:[]};
		

		// Parsing boxes
		for (let box of this.boxes) {
			json.boxes.push(box.toJSON());
		}

        this.verificar();
        const ruta = this.ruta+"configuracion.json";
        return fs.writeFileSync(ruta, JSON.stringify(json));
    }

	private static verificar() {
		if(!fs.existsSync(this.ruta)) {
			fs.mkdirSync(this.ruta);
		}
		if(!fs.existsSync(this.ruta + "boxes/")) {
			fs.mkdirSync(this.ruta + "boxes/");
		}
	}

}
