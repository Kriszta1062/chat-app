import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  // {path: 'profile/:id', component: ProfileComponent, canActivate:[AuthGuard] }, // this we will need later
  //our AuthGuard makes sure, that we cant see the profile without logging in
  { path: '', component: RegisterComponent },
  { path: '**', component: NotFoundError }, //later create a NotFoundComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
