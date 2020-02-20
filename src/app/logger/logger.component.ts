import { Component, OnInit } from '@angular/core';
import { LoggerService} from './service/logger.service'
import { Line } from './interface/line'

@Component({
  selector: 'logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent implements OnInit {

  date = new Date();

  constructor(private logger: LoggerService) { }

  ngOnInit(): void {

  }

  getLogs(): Line[] {
    return this.logger.get();
  }
}
