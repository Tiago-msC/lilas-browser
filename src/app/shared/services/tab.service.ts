import { EventEmitter, Injectable } from '@angular/core';
import { Tab } from '../interfaces/Tab';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  tabChangeEvent = new EventEmitter<Tab[]>();
  tabs: Tab[] = [];

  constructor() { }

  loadTabs(): void {
    const savedTabs = localStorage.getItem('tabs');
    if (savedTabs) {
      this.tabs = JSON.parse(savedTabs);

      if (this.tabs.length === 0) {
        this.newTab();
      }
    } else {
      this.tabs = [];
      this.newTab();
    }
  }

  private generateTabId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  newTab(): void {
    this.tabs.forEach((tab) => tab.active = false);

    const newTab: Tab = {
      id: this.generateTabId(),
      title: 'Nova aba',
      active: true,
      results: []
    };

    this.tabs.push(newTab);
    this.saveTabs(this.tabs);
  }

  saveTabs(tabs: Tab[]): void {
    this.tabs = tabs;
    localStorage.setItem('tabs', JSON.stringify(tabs));

    this.tabChangeEvent.emit(tabs);
  }

  deleteTab(tab: Tab): void {
    this.tabs = this.tabs.filter((t) => t.id !== tab.id);

    if (this.tabs.length >= 1) {
      this.tabs[this.tabs.length - 1].active = true;
    }

    this.saveTabs(this.tabs);
  }

  selectTab(tab: Tab): void {

    this.tabs.forEach((t) => {
      if (t.id === tab.id) {
        t.active = true;
      } else {
        t.active = false;
      }
    });

    this.saveTabs(this.tabs);
  }

  editTabTitle(title: string): void {
    // modifica o title do tab ativo pega o tab pelo id
    const tabActiveIndex = this.tabs.findIndex((tab) => tab.active);
    this.tabs[tabActiveIndex].title = title;

    this.saveTabs(this.tabs);
  }
}
