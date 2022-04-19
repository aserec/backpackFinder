import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'finder',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./modules/folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'finder',
    loadChildren: () =>
      import('./modules/finder/finder.module').then((m) => m.FinderPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
