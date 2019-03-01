import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollTo(el) {
    let element = document.getElementById(el);
    document.getElementsByClassName('active')[0].classList.remove('active');
    document.getElementsByClassName(el)[0].classList.add('active');
    const headerOffset = 25;
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}
