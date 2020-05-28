import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';


@Component({
    selector: 'app-header',
    templateUrl : './header.component.html'
})

export class HeaderComponent{
    /**
     *
     */
    constructor(public dsService:DataStorageService, public authService:AuthService) {
    }

    onSaveData() {
        this.dsService.storeRecipes()
        .subscribe(
            (response: Response) => {
                console.log(response);
            }
        );
    }

    onFetchData() {
        this.dsService.getRecipes();
    }

    onLogout() {
        this.authService.logout();
    }
}