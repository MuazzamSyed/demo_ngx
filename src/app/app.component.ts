import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { merge } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, untilDestroyed } from '@core';
import { I18nService } from '@app/i18n';

const log = new Logger('App');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private translateService: TranslateService,
    private i18nService: I18nService
  ) {}

  contacts = [
    {
      dp: 'fas fa-user-circle',
      name: 'Steven Kumar',
      header1: 'FOLLOW UP',
      company: 'Apple',
      graph: 'graph place holder',
      header2: 'ADD NOTES',
      amount: '15.5 K',
      count: '2',
      message: "How was your yesterday's lunch with Steven? Would you like to update notes?",
      icon1: '',
      notes: '<ol></ol><li>Met steve on 15th Nov</li><li></li></ol>',
      icon2: '',
    },
    {
      dp: 'fas fa-user-circle',
      name: 'Brad Human',
      header1: 'LOSING TOUCH',
      company: 'IBM',
      graph: 'graph place holder',
      header2: 'QUICK MAIL',
      amount: '5.5 K',
      count: '1',
      message: 'You are losing touch with Brad.You have an ongoing deal with him.',
      icon1: '',
      notes: "Hi Brad, it's been sometime since we met. Shall we catch up over drinks?...",
      icon2: '',
    },
    {
      dp: 'fas fa-user-circle',
      name: 'Sofia Jones',
      header1: 'FOLLOW UP',
      company: 'IBM',
      graph: 'graph place holder',
      header2: 'FOLLOW UP MAIL',
      amount: '-',
      count: ' ',
      message: "How was yesterday's Coffee meet with Sofia. Any further actions?",
      icon1: '',
      notes: 'Hi Sofia, It was nice catching up with you yesterday...',
      icon2: '',
    },
    {
      dp: 'fas fa-user-circle',
      name: 'Amit Khanna',
      header1: 'FOLLOW UP',
      company: 'Cisco',
      graph: 'graph place holder',
      header2: 'QUICK MAIL',
      amount: '50 K',
      count: '1',
      message: 'Flying to SFO in 2 weeks. Recommend to reconnect with Amit (Prospect)',
      icon1: '',
      notes: "Hi Amit, I'm in SF next week, would you have time to meet?",
      icon2: '',
    },
    {
      dp: 'fas fa-user-circle',
      name: 'Sanjana Kapoor',
      header1: 'FOLLOW UP',
      company: 'Tesla',
      graph: 'graph place holder',
      header2: 'QUICK MAIL',
      amount: '21 K',
      count: '1',
      message: "You met Sanjana 5 days back, but haven't sent her a follow up mail.",
      icon1: '',
      notes: 'Hi Sanjana. It was nice catching up with you on last tuesday here are...',
      icon2: '',
    },
  ];

  ngOnInit() {
    // Setup logger
    if (environment.production) {
      // Logger.enableProductionMode();
    }

    log.debug('init');

    // Setup translations
    this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);

    const onNavigationEnd = this.router.events.pipe(filter((event) => event instanceof NavigationEnd));

    // Change page title on navigation or language change, based on route data
    merge(this.translateService.onLangChange, onNavigationEnd)
      .pipe(
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        switchMap((route) => route.data),
        untilDestroyed(this)
      )
      .subscribe((event) => {
        const title = event.title;
        if (title) {
          this.titleService.setTitle(this.translateService.instant(title));
        }
      });
  }

  ngOnDestroy() {
    this.i18nService.destroy();
  }
}
