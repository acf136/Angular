import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-key-logger',
  templateUrl: './key-logger.component.html',
  styleUrls: ['./key-logger.component.scss']
})
export class KeyLoggerComponent implements OnInit {

  keys = '';
  @ViewChild('keyContainer', {static: true}) input: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
    const logger$ = fromEvent( this.input.nativeElement,'keyup' );
    logger$.pipe (
      map( (evt: KeyboardEvent) => evt.key.charCodeAt(0) ),
      filter(pi_code => {
          if ( Number.isInteger(pi_code) ) {
            return !(pi_code > 31 && (pi_code < 48 || pi_code > 57));
          }
          return true;
        }
      ),  // end of filter call
      tap(pi_digit => this.keys += String.fromCharCode(pi_digit))
    ).subscribe( );
  }

}
