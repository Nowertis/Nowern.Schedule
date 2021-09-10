import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import 'dhtmlx-scheduler';

declare let scheduler: any;

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SchedulerComponent implements OnInit{

  @ViewChild('scheduler_here', {static: true}) schedulerContainer!: ElementRef;

  ngOnInit(): void {
    scheduler.init(this.schedulerContainer.nativeElement, new Date(2021, 0, 20), "week");
  }
}