import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

    public isPrinting = false;

    constructor() { }

    ngOnInit(): void {
    }

    public downloadResume() {
        this.isPrinting = true;
        setTimeout(() => {
            window.print();
            this.isPrinting = false;
        }, 500);
    }

}
