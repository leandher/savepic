import { Component } from '@angular/core';
import { FotoService } from '../foto/foto.service';
import { FotoComponent } from '../foto/foto.component';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {
    fotos: FotoComponent[] = [];
    service: FotoService;
    mensagem: string = '';

    constructor(service: FotoService) {
        this.service = service;
        this.service
            .lista()
            .subscribe(fotos => {
                this.fotos = fotos;
            }, err => console.log(err));
    }

    remove(foto){
        this.service
        .remove(foto)
        .subscribe(() => {
            let novasFotos = this.fotos.slice(0);
            let index = novasFotos.indexOf(foto);
            novasFotos.splice(index, 1);
            this.fotos = novasFotos;

            this.mensagem = "Removida com sucesso";
        }, err => {
            this.mensagem = "Erro no servidor";
        })
    }
}