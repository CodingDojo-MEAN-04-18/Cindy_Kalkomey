import { Component, OnInit } from '@angular/core';

import { Quote } from '../../quote';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  quotes: Quote[] = [];
  sortedquotes: Quote[] = [];

  constructor() { }

  ngOnInit() {
  }

  addQuote(quote: Quote) {
    console.log('adding quote', quote);
    this.quotes.push(quote);
    console.log('quotes array:', this.quotes);
  }

  voteUpClick(quote: Quote) {
    console.log('voting up', quote);
    quote.votes++;
  }

  voteDownClick(quote: Quote) {
    console.log('voting down', quote);
    quote.votes--;
  }

  deleteQuoteClick(quote: Quote) {
    console.log('delete quote', quote);
    for (let i = 0; i < this.quotes.length; i++) {
      if ( this.quotes[i].content === quote.content) {
        this.quotes.splice(i, 1);
        break;
      }
    }
  }

  sortQuotes(quotes) {
    console.log('sorting quotes', quotes);
    return quotes.sort( this.compareValues('votes') );
  }

  // function for dynamic sorting - ascending
compareValues(key) {
  return function(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
        return 0;
    }

    const varA = a[key];
    const varB = b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }

    return (comparison);
  };
}

}

