import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[
	AuthenticationService
  ],
  declarations: []
})
export class CoreModule { }
