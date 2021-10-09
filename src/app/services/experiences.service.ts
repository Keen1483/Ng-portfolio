import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Portfolio } from 'src/app/models/Portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

     portfolioSubject$ = new Subject<Portfolio[]>();

    private portfolios: Portfolio[] = [
        {
            id: 1,
            project: 'Développeur Web / Mobile & UI Designer',
            category: '2021',
            image: 'portfolio-1.jpg'
        },
        {
            id: 2,
            project: 'Développeur Web / Mobile & App Designer',
            category: '2020 - 2021',
            image: 'portfolio-2.jpg'
        },
        {
            id: 3,
            project: 'Ministère de l\'eau et de l\'énergie',
            category: '2019 - 2020',
            image: 'portfolio-3.jpg'
        },
        {
            id: 4,
            project: 'Développeur Web Back-end',
            category: '2018',
            image: 'portfolio-4.jpg'
        }
    ];

    constructor() { }

    emitPortfolioSubject() {
        this.portfolioSubject$.next(this.portfolios.slice());
    }
}
