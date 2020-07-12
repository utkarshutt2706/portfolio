import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        console.log(window);
    }

    public backToTop() {
        if (window.innerWidth >= 992) {
            window.scroll({
                behavior: 'smooth',
                top: 470
            });
        }
    }

    // @HostListener('window:scroll', ['$event'])
    // doSomething(event) {
    //   console.log('Scroll Event', window.pageYOffset );
    // }

}
