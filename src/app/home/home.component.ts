import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.isLoading = true;
    this.quoteService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });
  }
  contacts = [
    {
      dp: 'fas fa-user-circle',
      name: 'Steven Kumar',
      header1: 'FOLLOW UP',
      company: 'Apple',
      graph: 'graph place holder',
      header2: 'ADD NOTES',
      amount: '15.5 K',
      count: '(2)',
      message: "How was your yesterday's lunch with Steven? Would you like to update notes?",
      icon1: 'fas fa-hamburger',
      notes: '<ol><li>Met steve on 15th Nov</li><li></li></ol>',
      icon2: 'fas fa-envelope',
    },
    {
      dp: 'fas fa-user-circle',
      name: 'Brad Human',
      header1: 'LOSING TOUCH',
      company: 'IBM',
      graph: 'graph place holder',
      header2: 'QUICK MAIL',
      amount: '5.5 K',
      count: '(1)',
      message: 'You are losing touch with Brad.You have an ongoing deal with him.',
      icon1: 'fas fa-hamburger',
      notes: "Hi Brad, it's been sometime since we met. Shall we catch up over drinks?...",
      icon2: 'fas fa-envelope',
    },
    {
      dp: 'fas fa-user-circle',
      name: 'Sofia Jones',
      header1: 'FOLLOW UP',
      company: 'IBM',
      graph: 'graph place holder',
      header2: 'FOLLOW UP MAIL',
      amount: '-',
      count: '()',
      message: "How was yesterday's Coffee meet with Sofia. Any further actions?",
      icon1: 'fas fa-hamburger',
      notes: 'Hi Sofia, It was nice catching up with you yesterday...',
      icon2: 'fas fa-envelope',
    },
    {
      dp: 'fas fa-user-circle',
      name: 'Amit Khanna',
      header1: 'FOLLOW UP',
      company: 'Cisco',
      graph: 'graph place holder',
      header2: 'QUICK MAIL',
      amount: '50 K',
      count: '(1)',
      message: 'Flying to SFO in 2 weeks. Recommend to reconnect with Amit (Prospect)',
      icon1: 'fas fa-hamburger',
      notes: "Hi Amit, I'm in SF next week, would you have time to meet?",
      icon2: 'fas fa-envelope',
    },
    {
      dp: 'fas fa-user-circle',
      name: 'Sanjana Kapoor',
      header1: 'FOLLOW UP',
      company: 'Tesla',
      graph: 'graph place holder',
      header2: 'QUICK MAIL',
      amount: '21 K',
      count: '(1)',
      message: "You met Sanjana 5 days back, but haven't sent her a follow up mail.",
      icon1: 'fas fa-hamburger',
      notes: 'Hi Sanjana. It was nice catching up with you on last tuesday here are...',
      icon2: 'fas fa-envelope',
    },
    {
      dp: 'fas fa-user-circle',
      name: 'Steven Kumar',
      header1: 'FOLLOW UP',
      company: 'Apple',
      graph: 'graph place holder',
      header2: 'ADD NOTES',
      amount: '15.5 K',
      count: '(2)',
      message: "How was your yesterday's lunch with Steven? Would you like to update notes?",
      icon1: 'fas fa-hamburger',
      notes: '<ol><li>Met steve on 15th Nov</li><li></li></ol>',
      icon2: 'fas fa-envelope',
    },
    {
      dp: 'fas fa-user-circle',
      name: 'Brad Human',
      header1: 'LOSING TOUCH',
      company: 'IBM',
      graph: 'graph place holder',
      header2: 'QUICK MAIL',
      amount: '5.5 K',
      count: '(1)',
      message: 'You are losing touch with Brad.You have an ongoing deal with him.',
      icon1: 'fas fa-hamburger',
      notes: "Hi Brad, it's been sometime since we met. Shall we catch up over drinks?...",
      icon2: 'fas fa-envelope',
    },
    {
      dp: 'fas fa-user-circle',
      name: 'Sofia Jones',
      header1: 'FOLLOW UP',
      company: 'IBM',
      graph: 'graph place holder',
      header2: 'FOLLOW UP MAIL',
      amount: '-',
      count: '()',
      message: "How was yesterday's Coffee meet with Sofia. Any further actions?",
      icon1: 'fas fa-hamburger',
      notes: 'Hi Sofia, It was nice catching up with you yesterday...',
      icon2: 'fas fa-envelope',
    },
    {
      dp: 'fas fa-user-circle',
      name: 'Amit Khanna',
      header1: 'FOLLOW UP',
      company: 'Cisco',
      graph: 'graph place holder',
      header2: 'QUICK MAIL',
      amount: '50 K',
      count: '(1)',
      message: 'Flying to SFO in 2 weeks. Recommend to reconnect with Amit (Prospect)',
      icon1: 'fas fa-hamburger',
      notes: "Hi Amit, I'm in SF next week, would you have time to meet?",
      icon2: 'fas fa-envelope',
    },
    {
      dp: 'fas fa-user-circle',
      name: 'Sanjana Kapoor',
      header1: 'FOLLOW UP',
      company: 'Tesla',
      graph: 'graph place holder',
      header2: 'QUICK MAIL',
      amount: '21 K',
      count: '(1)',
      message: "You met Sanjana 5 days back, but haven't sent her a follow up mail.",
      icon1: 'fas fa-hamburger',
      notes: 'Hi Sanjana. It was nice catching up with you on last tuesday here are...',
      icon2: 'fas fa-envelope',
    },
  ];
}
