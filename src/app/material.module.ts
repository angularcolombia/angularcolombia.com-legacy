import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatIconRegistry,
  MatInputModule,
  MatFormFieldModule,
  MatChipsModule
} from '@angular/material';

/**
 * NgModule that includes all Material modules that are required to serve the ngco-app.
 */
@NgModule({
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatMenuModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule
  ],
  providers: [MatIconRegistry],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule
  ]
})
export class MaterialModule {}
