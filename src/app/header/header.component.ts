import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    public isDownloading = false;
    @ViewChild('header') header: ElementRef;
    @ViewChild('navbar') navbar: ElementRef;

    constructor(public router: Router) { }

    ngOnInit(): void {
    }

    public downloadResume() {
        this.isDownloading = true;
        this.router.navigateByUrl('/resume');
        setTimeout(() => {
            this.isDownloading = false;
        }, 1000);
        setTimeout(() => {
            window.print();
        }, 1500);
    }

}
