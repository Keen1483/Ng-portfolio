import { Component, OnInit, OnDestroy } from '@angular/core';
import { Portfolio } from '../../models/Portfolio.model';
import { Subscription } from 'rxjs';
import { ProjectsService } from '../../services/projects.service';

declare var $: any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {

    projectsSubscription$: Subscription;

    projects: Portfolio[];

    constructor(private projectsService: ProjectsService) { }

    ngOnInit(): void {
        this.projectsSubscription$ = this.projectsService.projectsSubject$.subscribe(
            (projects: Portfolio[]) => this.projects = projects
        );
        this.projectsService.emitPortfolioSubject();

        $(document).ready(() => {
            if ($('.projects')) {
                // OPEN NEW TAB FOR OTHERS DOMAINS
                $('.link-project').attr('target', function() {
                    if($('a').host == location.host) return '_self'
                    else return '_blank'
                });
            }
        });
    }

    ngOnDestroy() {
        this.projectsSubscription$.unsubscribe();
    }
}
