import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatNativeDateModule, MatSnackBarModule, MatIconModule, MatDialogModule,
  MatButtonModule, MatTableModule , MatSortModule, MatTabsModule,
  MatCheckboxModule, MatToolbarModule, MatCardModule, MatPaginatorModule,
  MatFormFieldModule, MatProgressSpinnerModule, MatInputModule } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatNativeDateModule, MatSnackBarModule, MatIconModule, MatDialogModule,
    MatButtonModule, MatTableModule, MatPaginatorModule , MatSortModule, MatTabsModule,
    MatCheckboxModule, MatToolbarModule, MatCardModule, MatProgressBarModule,
    MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatDatepickerModule,
    MatRadioModule, MatSelectModule, MatSliderModule, MatDividerModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatNativeDateModule, MatSnackBarModule, MatIconModule, MatDialogModule,
    MatButtonModule, MatTableModule, MatPaginatorModule , MatSortModule, MatTabsModule,
    MatCheckboxModule, MatToolbarModule, MatCardModule, MatProgressBarModule,
    MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatDatepickerModule,
    MatRadioModule, MatSelectModule, MatSliderModule, MatDividerModule
  ]
})
export class AppMaterialModule { }
