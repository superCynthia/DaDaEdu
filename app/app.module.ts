import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material";
import { AppComponent }  from './app.component';
import { BarComponent } from './bar.component';
import { FootComponent } from './foot.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [
        AppComponent,
        BarComponent,
        FootComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }