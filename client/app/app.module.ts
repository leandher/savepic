import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { routing } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';
import { BotaoModule } from './botao/botao.module';
import { ModalModule } from './modal/modal.module';

@NgModule({
    imports: [
        BrowserModule, 
        FotoModule, 
        HttpModule, 
        PainelModule, 
        routing,
        FormsModule, 
        ReactiveFormsModule,
        BotaoModule,
        ModalModule
    ],
    declarations: [ AppComponent, CadastroComponent, ListagemComponent ],
    bootstrap: [AppComponent]
})
export class AppModule { }