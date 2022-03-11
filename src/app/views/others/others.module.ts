import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from './../../shared/shared.module';

import { AppBlankComponent } from './app-blank/app-blank.component';
import { OthersRoutes } from "./others.routing";
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedMaterialModule } from 'app/shared/shared-material.module';
import { DynamicFieldsComponent } from './dynamic-fields/dynamic-fields.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatChipsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTabsModule,
    MatInputModule,
    MatProgressBarModule,
    FlexLayoutModule,
    NgxDatatableModule,
    ChartsModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    SharedMaterialModule,
    RouterModule.forChild(OthersRoutes)
  ],
  declarations: [
    AppBlankComponent,
    DynamicFormsComponent,
    DynamicFieldsComponent
  ]
})
export class OthersModule { }
