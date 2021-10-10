import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TypographyService } from '../../services/typography.service';

declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    contactForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        this.contactForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            message: ['', [Validators.required, Validators.min(10)]]
        });
    }

    onSubmit() {
        const email = this.contactForm.get('email')?.value;
        const message: string = this.contactForm.get('message')?.value;
        const date = new Date();
        let object = 'Email address:' + email + ' / From Portfolio';
        $('#formContact').attr('href', 'mailto:keenndjc@gmail.com?subject=' + object + '&body=' + message);
    }

}
