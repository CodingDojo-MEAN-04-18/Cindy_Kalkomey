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

  // what is this doing (following Jason's book example)
  @Output() newQuote = new EventEmitter<Quote>();

  constructor() {}

  ngOnInit() {}

  onSubmit(event: Event, formData: NgForm) {
    event.preventDefault();
    console.log('submitting form', formData);
    console.log('this.quote: ', this.quote);
    this.newQuote.emit(this.quote);
    this.quote = new Quote();
    formData.reset();
  }
}
