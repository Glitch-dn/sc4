import { Component, inject, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { Album } from '../../models/album';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-album-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.css'
})
export class AlbumListComponent implements OnInit {
  albums: Album[] = [];
  phService: PhotoService = inject(PhotoService);
  placeholder= 'img/home.jpg'

  ngOnInit(): void {
    this.phService.getAlbum()
      .then(data => this.albums = data)
      .catch((error) => {
        console.error('Error fetching album data:', error);
      });
  }

  onImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    // previeni loop infinito in caso di placeholder mancante
    if (img.src !== this.placeholder) {
      img.src = this.placeholder;
    }
  }

}
