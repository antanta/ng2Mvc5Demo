import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { Headers, RequestOptions, Request, RequestMethod } from '@angular/http'

@Component({
    selector: 'external-communication',
    templateUrl: '../Templates/components/external.communication.component.html'
})
export class ExternalCommunicationComponent {
    private http: Http;
    private postUrl: string;
    private headers: Headers;
    private requestoptions: RequestOptions;

    constructor(http: Http) {
        this.http = http;
        this.postUrl = 'api/Message/ReceiveMessage';
    }

    sendMessage(message: string): void {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json;charset=UTF-8');
        let options = new RequestOptions({ headers: headers });

        this.http.post(this.postUrl, { "message": message }, options)
            .subscribe(res => {
                console.log(res);
            });

        //this.http.post(this.postUrl, { message })
        //    .map(res => res.json().data)
        //    .subscribe(res => {
        //        console.log(res);
        //    }); 
    }
}
