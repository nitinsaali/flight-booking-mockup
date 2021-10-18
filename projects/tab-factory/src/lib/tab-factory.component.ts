import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-tab-factory',
  template: `
    <!--<div class="tab">
      <button class="nav-link active" *ngFor="let tab of tabs" (click)="openTab($event, tab.id)" [value]="tab.id">{{ tab.name }}</button>
    </div>-->
    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <button class="nav-link active" *ngFor="let tab of tabs" (click)="openTab($event, tab.id)" [value]="tab.id">
          <i class="fa" [ngClass]="tab.icon" ></i> {{ tab.name }}
        </button>
      </div>
    </nav>
    <div class="tab-content">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./tab-factory.component.scss']
})
export class TabFactoryComponent implements OnInit {

  @Input() tabs;
  @Output() tabClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.tabs);
  }

  openTab(event, tabId) {

    // var i, tabcontent, tablinks;
    // tabcontent = document.getElementsByClassName("tabcontent");
    // for (i = 0; i < tabcontent.length; i++) {
    //   tabcontent[i].style.display = "none";
    // }
    // tablinks = document.getElementsByClassName("tablinks");
    // for (i = 0; i < tablinks.length; i++) {
    //   tablinks[i].className = tablinks[i].className.replace(" active", "");
    // }
    // document.getElementById(tabId).style.display = "block";
    // evt.currentTarget.className += " active";
    this.tabClicked.emit(event);
  }
}
