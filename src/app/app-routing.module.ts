import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormOneComponent } from './form-one/form-one.component';
import { FormTwoComponent } from './form-two/form-two.component';

const routes: Routes = [
  { path: 'form-one', component: FormOneComponent },
  { path: 'form-two', component: FormTwoComponent },
  { path: '', redirectTo: 'form-one', pathMatch: 'full' }, // default route
  { path: '**', redirectTo: 'form-one' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
