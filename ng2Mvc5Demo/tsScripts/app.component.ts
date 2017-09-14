import { Component } from '@angular/core';
import { SearchService } from './services/SearchService'

@Component({
    selector: 'my-app',
    templateUrl: '../Templates/app.component.html'
})
export class AppComponent {
    private searcher: SearchService;
    private loading: boolean;

    constructor(searcher: SearchService) {
        this.searcher = searcher;
    }

    doSearch(event: Event, term: string) {
        this.loading = true;
        this.searcher.search(term).then(() => { this.loading = false });
        event.preventDefault();
    }
}
