import { Component, OnInit } from '@angular/core';
import { LoggerService} from './service/logger.service'
import { Line } from './interface/line'

@Component({
  selector: 'logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent implements OnInit {

  isEmpty: boolean;

  constructor(private logger: LoggerService) { }

  ngOnInit(): void {
  	this.isEmpty = true;
  }

  getLogs(): Line[] {
  	this.isEmpty = false;
    return this.logger.get();
  }
}
