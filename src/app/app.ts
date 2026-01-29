import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { portfolio } from './content/portfolio';

@Component({
  selector: 'app-root',
  imports: [NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly portfolio = portfolio;
  protected readonly year = new Date().getFullYear();

  protected get emailHref(): string {
    return `mailto:${this.portfolio.links.email}`;
  }
}
