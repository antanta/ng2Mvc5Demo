import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise';
import { SearchItem } from './SearchItem'

@Injectable()
export class SearchService {
    apiRoot: string = 'https://itunes.apple.com/search';
    results: SearchItem[];

    constructor(private http: Http) {
        this.results = [];
    }

    public search(term: string): Promise<any> {
        let promise = new Promise((resolve, reject) => {
            let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
            this.http.get(apiURL)
                .toPromise()
                .then(
                    res => { // Success
                        this.results = res.json().results.map(item => {
                            return new SearchItem(
                                item.trackName,
                                item.artistName,
                                item.trackViewUrl,
                                item.artworkUrl30,
                                item.artistId
                            );
                        });



                        resolve();
                    },
                    msg => { // Error
                        reject(msg);
                    }
                );
        });
        return promise;
    }
}