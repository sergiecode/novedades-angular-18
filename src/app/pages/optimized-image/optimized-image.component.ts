import { IMAGE_LOADER, ImageLoaderConfig, NgOptimizedImage, provideImgixLoader } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-optimized-image',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './optimized-image.component.html',
  styleUrl: './optimized-image.component.css',
  providers: [
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        return `https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=${config.width}`;
      }
    },
  ],
})
export class OptimizedImageComponent {

}
