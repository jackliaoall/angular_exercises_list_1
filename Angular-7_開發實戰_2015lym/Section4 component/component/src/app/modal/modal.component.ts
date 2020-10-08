import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  @Input()
  title: string;
  @Input()
  content: string;
  @Input()
  okText: string;
  @Input()
  cancelText: string;
  @Input()
  isVisible = false;
  @Output()
  isVisibleChange = new EventEmitter();
  @Output()
  clickEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }

  handleOk(): void {
    this.clickEvent.emit('点击确定');
    this.isVisibleChange.emit(false);
  }

  handleCancel(): void {
    this.clickEvent.emit('点击取消');
    this.isVisibleChange.emit(false);
  }

}
