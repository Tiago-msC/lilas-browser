import { Component, OnInit } from '@angular/core';
import { TabService } from '../../services/tab.service';
import { Tab } from '../../interfaces/Tab';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  public tabs: Tab[] = [];
  private searchTitle = '';
  public isTabsOpen = false;

  constructor(
    private tabService: TabService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchTitle = params['q'];
    });

    this.loadData();

    this.navigateToTabActive();
  }


  private getActiveTab(): Tab | undefined {
    return this.tabs.find((tab) => tab.active);
  }


  private navigateToTabActive(): void {
    const activeTab = this.getActiveTab();

    if (activeTab && activeTab?.title !== 'Nova aba') {
      this.router.navigate(['/search'], { queryParams: { q: activeTab?.title } });
    } else {
      this.router.navigate(['/']);
    }
  }

  private loadData(): void {
    this.tabService.loadTabs();
    this.tabs = JSON.parse(localStorage.getItem('tabs') as string) || [];

    console.warn("Tabs loaded", this.tabs);

    this.tabService.tabChangeEvent.subscribe((tabs: Tab[]) => {
      this.tabs = tabs

      this.navigateToTabActive();
    });
  }

  addTab(): void {
    this.tabService.newTab();
  }

  deleteTab(tab: Tab): void {
    this.tabService.deleteTab(tab);
  }

  selectTab(tab: Tab): void {
    this.tabService.selectTab(tab);
  }

  changeTabsModal(): void {
    this.isTabsOpen = !this.isTabsOpen;
  }

}
