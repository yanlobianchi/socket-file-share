import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UploadService} from '../upload/upload.service';

@Component({
	selector   : 'app-file',
	templateUrl: './file.component.html',
	styleUrls  : ['./file.component.css']
})
export class FileComponent implements OnInit {
	form: FormGroup;
	error: string | any;
	uploadResponse = {status: '', message: '', filePath: ''};
	
	constructor(private formBuilder: FormBuilder, private uploadService: UploadService) {
	}
	
	ngOnInit() {
		this.form = this.formBuilder.group({
			file    : [''],
			protocol: ['']
		});
	}
	
	onFileChange(event) {
		if (event.target.files.length > 0) {
			const file = event.target.files[0];
			this.form.get('file').setValue(file);
		}
	}
	
	onSubmit() {
		const formData = new FormData();
		const protocol = this.form.get('protocol').value;
		formData.append('file', this.form.get('file').value);
		
		this.uploadService.upload(formData, protocol).subscribe(
			(res) => this.uploadResponse = res,
			(err) => this.error = err
		);
	}
}
