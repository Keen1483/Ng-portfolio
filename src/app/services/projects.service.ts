import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Portfolio } from 'src/app/models/Portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

    projectsSubject$ = new Subject<Portfolio[]>();

    private projects: Portfolio[] = [
        {
            id: 1,
            project: 'App Web pour la prestation de services Web App  et Mobile App',
            category: 'Angular - Firebase',
            image: 'portfolio-1.jpg',
            link: 'https://app-avenue.herokuapp.com'
        },
        {
            id: 2,
            project: 'API pour la gestion des produits',
            category: 'Python - Django',
            image: 'portfolio-2.jpg',
            link: 'https://github.com/Keen1483/API-REST-with-Django-and-PostgreSQL'
        },
        {
            id: 3,
            project: 'App Mobile pour la diffusion d\'actualité',
            category: 'Ionic - NodeJS',
            image: 'portfolio-3.jpg',
            link: 'https://github.com/Keen1483/backend-e-commerce-with-node-js-and-mongoDB'
        },
        {
            id: 4,
            project: 'App Web e-commerce pour un magasin',
            category: 'PHP - Symfony',
            image: 'portfolio-4.jpg',
            link:'https://github.com/Keen1483/Application-pour-service-de-vente-avec-Symfony'
        }
    ];

    constructor() { }

    emitPortfolioSubject() {
        this.projectsSubject$.next(this.projects.slice());
    }
}
