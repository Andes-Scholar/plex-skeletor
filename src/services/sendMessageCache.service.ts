import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISendMessageCache } from 'src/app/interfaces/ISendMessageCache';
import { Server } from '@andes/shared';

@Injectable()
export class SendMessageCacheService {

    private sendMessageCacheUrl = '/modules/mobileApp/';  // URL to web api

    constructor(private server: Server) { }

    getByEmail(email: String): Observable<ISendMessageCache[]> {
        return this.server.get(this.sendMessageCacheUrl + '/sendMessageCacheByEmail/' + email, { showError: true });
    }

    getByPhone(phone: String): Observable<ISendMessageCache[]> {
        return this.server.get(this.sendMessageCacheUrl + '/sendMessageCacheByPhone/' + phone, { showError: true });
    }

}

