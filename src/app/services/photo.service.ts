import { Injectable } from '@angular/core';
import { AlbumResponse } from '../models/album';
import { RollRsesponse } from '../models/roll';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

 async getAlbum(): Promise<AlbumResponse> {
  const res = await fetch('https://raw.githubusercontent.com/Glitch-dn/test_api/main/album.json');
  const data: AlbumResponse = await res.json();
  return data;
 }

 async getPhoto(): Promise<RollRsesponse>{
  const res = await fetch('https://raw.githubusercontent.com/Glitch-dn/test_api/main/photo.json');
  const data: RollRsesponse = await res.json();
  return data;
 }
}
