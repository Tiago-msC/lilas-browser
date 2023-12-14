import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TabService } from 'src/app/shared/services/tab.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  private queryParam = '';

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private tabService: TabService,
    ) {
    this.route.queryParams.subscribe(params => {
      this.queryParam = params['q'];
      
      if (!this.queryParam) {
        this.router.navigate(['/']);
      }
    });
  }

  ngOnInit(): void {
  }

  homeNavigate(): void {
    this.router.navigate(['/']);
    this.tabService.editTabTitle('Nova aba');

  }
}
