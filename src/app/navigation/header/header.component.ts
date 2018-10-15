import { Router } from '@angular/router';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
  logout() {
    this.router.navigate(['/login']);
  }
}
