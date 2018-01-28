import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
    public groepen: Groepen[];

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/Groepen/GetGroepen').subscribe(result => {
            this.groepen = result.json() as Groepen[];
        }, error => console.error(error));
    }
}

interface Groepen {
    id: string;
    naaam: string;
}

