import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SkillsService } from '../../services/skills.service';
import { Skill } from '../../models/Skill.model';

declare var $:any;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, OnDestroy {

    skillsSubscription$ : Subscription;

    // Development
    languages: Skill[];
    frameworks: Skill[];

    // Graphics Design
    designs: Skill[];
    tools: Skill[];

    constructor(private skillsService: SkillsService) { }

    ngOnInit(): void {
        this.skillsSubscription$ = this.skillsService.languageSubject$.subscribe(
            (languages: Skill[]) => this.languages = languages
        );

        this.skillsSubscription$ = this.skillsService.frameworkSubject$.subscribe(
            (frameworks: Skill[]) => this.frameworks = frameworks
        );

        this.skillsSubscription$ = this.skillsService.designSubject$.subscribe(
            (designs: Skill[]) => this.designs = designs
        );

        this.skillsSubscription$ = this.skillsService.toolsSubject$.subscribe(
            (tools: Skill[]) => this.tools = tools
        );

        this.skillsService.emitLanguageSubject();
        this.skillsService.emitFrameworkSubject();
        this.skillsService.emitDesignsSubject();
        this.skillsService.emitToolsSubject();

        $(document).ready(() => {
            let seventyFive = $('.75');
            for (let i = 0; i < seventyFive.length; i++) {
                let width = parseFloat($(seventyFive[i]).css('width'));
                $(seventyFive[i]).css('width', width*(3/4)+'px');
            }

            let sixtyThree = $('.63');
            for (let i = 0; i < sixtyThree.length; i++) {
                let width = parseFloat($(sixtyThree[i]).css('width'));
                $(sixtyThree[i]).css('width', width*(5/8)+'px');
            }

            let fifty = $('.50');
            for (let i = 0; i < fifty.length; i++) {
                let width = parseFloat($(fifty[i]).css('width'));
                $(fifty[i]).css('width', width*(1/2)+'px');
            }

            let twentyFive = $('.25');
            for (let i = 0; i < twentyFive.length; i++) {
                let width = parseFloat($(twentyFive[i]).css('width'));
                $(twentyFive[i]).css('width', width*(1/4)+'px');
            }
        });
    }

    ngOnDestroy() {
        this.skillsSubscription$.unsubscribe();
    }

}
