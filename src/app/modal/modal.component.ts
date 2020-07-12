import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import '../../assets/js/smtp.js';
import { SnotifyService } from 'ng-snotify';
declare let Email: any;

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

    public contactForm: FormGroup;

    constructor(
        private snotify: SnotifyService
    ) { }

    ngOnInit(): void {
        this.initForm();
    }

    private initForm() {
        this.contactForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.email,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+[.][a-zA-Z0-9-.]{2,}$')
            ]),
            subject: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
            message: new FormControl(null, [Validators.required, Validators.maxLength(700)])
        });
    }

    public onSend() {
        for (const item in this.contactForm.controls) {
            if (this.contactForm.controls.hasOwnProperty(item)) {
                const element = this.contactForm.controls[item];
                if (element.invalid) {
                    element.markAsTouched();
                    return;
                }
            }
        }
        this.snotify.info(
            'You can always contact me at my phone number or email me. Thank you!',
            { timeout: 6000, showProgressBar: false }
        );
        this.snotify.warning(
            'I am still trying to implement this feature without exposing an actual server. Sorry for the inconvinience!',
            { timeout: 4000, showProgressBar: false }
        );
        // alert('');
        // alert('');
        // const formData = this.contactForm.getRawValue();
        // Email.send({
        //     Host: 'smtp.gmail.com',
        //     Username: 'utkarshutt2706@gmail.com',
        //     Password: '*************',
        //     To: 'utkarshutt2706@gmail.com',
        //     From: formData.email,
        //     Subject: formData.subject,
        //     Body: formData.message
        // }).then(message => {
        //     alert(message);
        //     this.contactForm.reset();
        // });
    }

}
