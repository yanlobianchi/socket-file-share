import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FileComponent} from './file/file.component';
import {IndexComponent} from './index/index.component';

const routes: Routes = [
	{path: '', redirectTo: 'index', pathMatch: 'full'},
	{path: 'index', component: IndexComponent},
	{path: 'profile', component: FileComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
