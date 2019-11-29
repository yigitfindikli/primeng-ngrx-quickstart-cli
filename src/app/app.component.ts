import { Component, OnInit } from '@angular/core';
import { DataService } from './services/dataservice';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	title = 'primeng-ngrx-quickstart-cli';

	constructor(private dataService: DataService) {
		this.dataService.load();
	}

	ngOnInit() {
		this.dataService.getData().subscribe(data => {
			console.log(data);
		})
	}
}
