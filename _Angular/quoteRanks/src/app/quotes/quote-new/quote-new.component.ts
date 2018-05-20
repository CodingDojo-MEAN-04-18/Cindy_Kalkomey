import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Quote } from '../../quote';

@Component({
  selector: 'app-quote-new',
  templateUrl: './quote-new.component.html',
  styleUrls: ['./quote-new.component.css'],
})
export class QuoteNewComponent implements OnInit {
  quote: Quote = new Quote();
  // quotes: Quote[] = [];

  // create instance variable -- event newQuote --to emit Quote type data up to parent component (quote-list)
  // doesn't need to be inside of the constructor
  @Output()
    newQuote = new EventEmitter<Quote>();

  constructor() {}

  ngOnInit() {}

  onSubmit(event: Event, formData: NgForm) {
    event.preventDefault();
    console.log('submitting form', formData);
    console.log('this.quote: ', this.quote);

    // Note: the newQuote event will emit content -- this.quote
    this.newQuote.emit(this.quote);
    // break reference of this.quote in order to reset quote to empty Quote object
    this.quote = new Quote();
    // reset formData to be an empty form
    formData.reset();
  }
}
