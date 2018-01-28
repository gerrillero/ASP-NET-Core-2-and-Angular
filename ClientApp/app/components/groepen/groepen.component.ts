import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'groepen',
    templateUrl: './groepen.component.html'
})
export class GroepenComponent {
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
