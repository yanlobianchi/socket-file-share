import {HttpClient, HttpEventType} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

enum ProtocolEnum {
	TCP = 'TCP',
	UDP = 'UDP'
}

@Injectable({
	providedIn: 'root'
})
export class UploadService {
	constructor(private httpClient: HttpClient) {
	}
	
	public upload(data, protocol: ProtocolEnum) {
		const uploadURL = `${environment.serverUrl}/file`;
		
		return this.httpClient.post<any>(uploadURL, data, {
			reportProgress: true,
			observe       : 'events',
			params        : {protocol: protocol}
		}).pipe(map((event) => {
				switch (event.type) {
					case HttpEventType.UploadProgress:
						const progress = Math.round(100 * event.loaded / event.total);
						return {status: 'progress', message: progress};
					
					case HttpEventType.Response:
						return event.body;
					default:
						return `Unhandled event: ${event.type}`;
				}
			})
		);
	}
}
