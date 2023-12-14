import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TabService } from '../../services/tab.service';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {

  search = '';

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private tabService: TabService,
    ) {}
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.search = params['q'];
    });
  }

  searchNavigate(): void {
    if (this.search) {
      this.router.navigate(['/search'], { queryParams: { q: this.search } });
      this.tabService.editTabTitle(this.search);
    }
  }

  clearSearch(): void {
    this.search = '';
  }
}
