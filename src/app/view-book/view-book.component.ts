import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../book-data.service';
import { Book } from '../book';
@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements

  OnInit {
  book: Book;
  constructor(private activeRoute: ActivatedRoute, private bookService: BookDataService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((param) => {
      let id = param['id'];
      console.log(id);
      this.book = this.bookService.searchById(id);
    }
    )
  }
}
