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

    constructor(private typography: TypographyService,
            private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        $(document).ready(() => {
            // $('#contact').css('height', this.typography.heightContentPage());
        });

        this.initForm();
    }

    initForm() {
        this.contactForm = this.formBuilder.group({
            title: ['', [Validators.required, Validators.min(5)]],
            project: ['', [Validators.required, Validators.min(10)]]
        });
    }

    onSubmit() {
        const title = this.contactForm.get('title')?.value;
        const project: string = this.contactForm.get('project')?.value;
        const date = new Date();
    }

}
