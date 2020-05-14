import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../book-data.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private bookservice:BookDataService, private router:Router) { }

  ngOnInit(): void {
  }
  search(id: number)
  {
    if (this.bookservice.searchById(id)) {
      this.router.navigate(['/view/' + id])
    }
    else {alert('bookid are not found')}
  }
}
