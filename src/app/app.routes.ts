import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { RollComponent } from './components/roll/roll.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'albums',
        component: AlbumListComponent
    },
    {
        path: 'roll/:id',
        component: RollComponent
    }
];
