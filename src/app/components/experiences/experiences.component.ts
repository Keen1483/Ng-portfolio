import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExperiencesService } from '../../services/experiences.service';
import { Portfolio } from 'src/app/models/Portfolio.model';

declare var $: any;

@Component({
    selector: 'app-experiences',
    templateUrl: './experiences.component.html',
    styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit, OnDestroy {

    portfolioSubscription$: Subscription;

    portfolios: Portfolio[];

    constructor(private experiencesService: ExperiencesService) { }

    ngOnInit(): void {
        this.portfolioSubscription$ = this.experiencesService.portfolioSubject$.subscribe(
            (portfolios: Portfolio[]) => this.portfolios = portfolios
        );
        this.experiencesService.emitPortfolioSubject();
    }

    ngOnDestroy() {
        this.portfolioSubscription$.unsubscribe();
    }

}
