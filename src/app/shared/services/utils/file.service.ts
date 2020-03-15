import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from "../http/http.service";
@Injectable()
export class fileService {
    constructor(
        private http: HttpClient,
        private httpService: HttpService,
    ) { }

    get(data): Promise<any> {
        var url = '/api/file/' + data.type || 'candudate';
        return this.httpService.get(url, data).then(response => {
            return response;
        }).catch((err) => {
            throw err;
        })
    }

    del(fileId, data): Promise<any> {
        var url = '/api/file/' + fileId;
        return this.http.put(url, data).toPromise().then(response => {
            return response;
        })
    }

    uploadFiles(data): Promise<any> {
        try {
            var url = '/api/file/upload-file';
            return this.httpService.post(url, data).then(response => {
                return response;
            })
        } catch (error) {
            throw error;
        }
    }

    downloadFile(id) {
        try {
            var http = window.location.origin;
            let url = http + '/api/file/download-file/' + id;
            window.open(url);
        } catch (error) {
            throw error;
        }
    }

}