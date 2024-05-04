import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataGridComponent } from './shared/components/data-grid/data-grid.component';
import { Page404Component } from './shared/components/page-404/page-404.component';
import { MainPageComponent } from './shared/components/main-page/main-page.component';
import { UserProfileComponent } from './shared/components/user-profile/user-profile.component';
import { EditComponent } from './shared/components/edit/edit.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  //Data grids
  { path: 'equipment-list', title: 'Equipment List', component: DataGridComponent, data: {viewID: 'equipmentList'} },
  { path: 'equipment-types-list', title: 'Equipment Types', component: DataGridComponent, data: {viewID: 'equipmentTypes'} },
  { path: 'printers-list', title: 'Printers List', component: DataGridComponent, data: {viewID: 'printersList'} },
  { path: 'stl-files-list', title: 'STL Files List', component: DataGridComponent, data: {viewID: 'stlFilesList'} },

  //Edits
  { path: 'equipment-list/:id', title: 'Equipment details', component: EditComponent, data: {viewID: 'equipmentDetail'} },
  { path: 'equipment-types-list/:id', title: 'Equipment Type details', component: EditComponent, data: {viewID: 'equipmentTypeDetail'} },
  { path: 'printers-list/:id', title: 'Printer details', component: EditComponent, data: {viewID: 'printerDetail'} },
  { path: 'stl-files-list/:id', title: 'STL File details', component: EditComponent, data: {viewID: 'stlFileDetail'} },
  

  { path: 'user', component: UserProfileComponent },
  { path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
