import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {FileComponent} from './file/file.component';
import {IndexComponent} from './index/index.component';
import {UploadService} from './upload/upload.service';

@NgModule({
	declarations: [
		AppComponent,
		IndexComponent,
		FileComponent,
	],
	imports     : [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		MatButtonModule,
		MatInputModule,
		MatRadioModule,
	],
	providers   : [{provide: LocationStrategy, useClass: HashLocationStrategy}, UploadService],
	bootstrap   : [AppComponent]
})
export class AppModule {
}
