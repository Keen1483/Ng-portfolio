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
            image: 'portfolio-1.jpg',
            link: 'Mon équipe et moi concevions une application mobile qui diffuse l\actualité. J\'ai realisé premièrement le design avec Adobe Xd, puis développé le front-end avec Ionic, en fin les autre et moi avions commencé le dévellopement du back-end avec Django.'
        },
        {
            id: 2,
            project: 'Développeur Web / Mobile & App Designer',
            category: '2020 - 2021',
            image: 'portfolio-2.jpg',
            link: 'Développement des application Web et Mobile, Construction des design graphique : Website Design, App Mobile Design, Web Banner, Banner Design, Banner ADS. Les clients me confient leurs services et je les réalise à leur souhait en respectant le delai de livraison.'
        },
        {
            id: 3,
            project: 'Ministère de l\'eau et de l\'énergie',
            category: '2019 - 2020',
            image: 'portfolio-3.jpg',
            link: 'Concevoir le design de l’application web pour la monographie hydraulique en milieu rurale. Développer le back-end et le front-end avec Symfony en integrant la recherché automatique sur les sources d\'approvisionement en eau potable.'
        },
        {
            id: 4,
            project: 'Développeur Web Back-end',
            category: '2018',
            image: 'portfolio-4.jpg',
            link: 'Les Dynamiques de Yaoundé est une association de personnes qui comporte en son sein une petite banque financée par les membres. J\'ai développé une application pour la gestion de cette association. Une applications pour la gestion de sa petite banque (gestion des dettes et des emprunts, traitement des bilans fnanciers).'
        }
    ];

    constructor() { }

    emitPortfolioSubject() {
        this.portfolioSubject$.next(this.portfolios.slice());
    }

    getExperienceById(id: number) {
        const experience = this.portfolios.find(
            exp => exp.id === id
        );

        return experience;
    }
}
