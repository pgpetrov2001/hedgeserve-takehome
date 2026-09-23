import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  search = output<string>();
  searchValue = signal<string>("");

  doSearch() {
    this.search.emit(this.searchValue());
  }
}
