import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Skill } from '../models/Skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

    // Development
    languageSubject$ = new Subject<Skill[]>();
    frameworkSubject$ = new Subject<Skill[]>();

    // Graphics Design
    designSubject$ = new Subject<Skill[]>();
    toolsSubject$ = new Subject<Skill[]>();

    private languages: Skill[] = [
        { name: 'php', level: 100 },
        { name: 'JavaScript', level: 100 },
        { name: 'TypeScript', level: 100 },
        { name: 'HTML5', level: 100 },
        { name: 'CSS', level: 100 },
        { name: 'SCSS', level: 100 },
        { name: 'Sql', level: 75 },
        { name: 'Python', level: 75 },
        { name: 'java', level: 63 },
        { name: 'C++', level: 63 },
        { name: 'C', level: 63 },
        { name: 'Dart', level: 50 },
        { name: 'C#', level: 25 },
    ];

    private frameworks: Skill[] = [
        { name: 'Symfony', level: 100 },
        { name: 'Angular', level: 100 },
        { name: 'Ionic', level: 100 },
        { name: 'Bootstrap', level: 100 },
        { name: 'Sass', level: 100 },
        { name: 'jQuery', level: 100 },
        { name: 'Git', level: 100 },
        { name: 'Django', level: 75 },
        { name: 'Material UI', level: 75 },
        { name: 'Postgres', level: 75 },
        { name: 'MySql', level: 75 },
        { name: 'Flutter', level: 50 },
        { name: 'Qt', level: 50 }
    ];

    private designs: Skill[] = [
        { name: 'Web Design', level: 100 },
        { name: 'App Mobile Design', level: 100 },
        { name: 'Banner Design', level: 100 },
        { name: 'Banner Ads', level: 75 }
    ];

    private tools: Skill[] = [
        { name: 'Adobe Xd', level: 100 },
        { name: 'Adobe Illustrator', level: 100 },
        { name: 'Adobe Photoshop', level: 100 }
    ];

    constructor() { }

    emitLanguageSubject() {
        this.languageSubject$.next(this.languages.slice());
    }

    emitFrameworkSubject() {
        this.frameworkSubject$.next(this.frameworks.slice());
    }

    emitDesignsSubject() {
        this.designSubject$.next(this.designs.slice());
    }

    emitToolsSubject() {
        this.toolsSubject$.next(this.tools.slice());
    }
}
