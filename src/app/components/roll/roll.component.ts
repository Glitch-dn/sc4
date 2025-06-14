import { Component, inject, OnInit } from '@angular/core';
import { Roll } from '../../models/roll';
import { PhotoService } from '../../services/photo.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-roll',
  imports: [CommonModule,RouterModule],
  templateUrl: './roll.component.html',
  styleUrl: './roll.component.css'
})
export class RollComponent implements OnInit {
  id?: number;
  roll: Roll[] = [];
  phService: PhotoService = inject(PhotoService);
  placeholder= 'img/ph.jpg'
  currentIndex: number = 0;

  ngOnInit(): void {
    this.phService.getPhoto()
      .then(data => this.roll = data)
      .catch((error) => {
        console.error('Error fetching roll data:', error);
      });
  }

  constructor(private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextImage(length: number) {
    if (this.currentIndex < length - 1) {
      this.currentIndex++;
    }
  }

  goToImage(idx: number) {
    this.currentIndex = idx;
  }


  onImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    // previeni loop infinito in caso di placeholder mancante
    if (img.src !== this.placeholder) {
      img.src = this.placeholder;
    }
  }
}
