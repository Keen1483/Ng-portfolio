import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExperiencesService } from '../../../services/experiences.service';
import { Portfolio } from '../../../models/Portfolio.model';
import { TypographyService } from '../../../services/typography.service';

declare var $:any;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

    experience?: Portfolio;

    constructor(private route: ActivatedRoute,
                private experiencesService: ExperiencesService,
                private typography: TypographyService) { }

    ngOnInit(): void {
        const id = this.route.snapshot.params['id'];
        this.experience = this.experiencesService.getExperienceById(parseInt(id));

        $(document).ready(() => {
            let width = parseFloat(this.typography.heightContentPage());
            $('.detail-exp').css('height', (width/2) + 'px');
        });
    }
}
