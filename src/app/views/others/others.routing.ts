import { Routes } from '@angular/router';
import { AppBlankComponent } from './app-blank/app-blank.component';
import { DynamicFieldsComponent } from './dynamic-fields/dynamic-fields.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';


export const OthersRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'blank',
      component: AppBlankComponent,
      // data: { title: 'Blank', breadcrumb: 'BLANK' }
    },
    {
      path: 'dynamic-form',
      component: DynamicFormsComponent,
    },
    {
      path: 'dynamic-fields',
      component: DynamicFieldsComponent,
    },
  ]
    

  }
];