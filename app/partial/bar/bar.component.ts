import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material";

@Component({
    moduleId: module.id,
    selector: 'my-bar',
    templateUrl: 'app/partial/bar/bar.component.html',
    styleUrls: ['app/partial/bar/bar.component.css'],
    directives: [MATERIAL_DIRECTIVES, MD_TABS_DIRECTIVES],
    encapsulation: ViewEncapsulation.None
})

export class BarComponent { }