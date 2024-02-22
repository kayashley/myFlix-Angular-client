import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent implements OnInit {
  constructor(public router: Router) {}
  ngOnInit(): void {}

  public openMovieList(): void {
    this.router.navigate(['movies']);
  }

  public openProfile(): void {
    this.router.navigate(['profile']);
  }

  public logoutUser(): void {
    localStorage.setItem('token', '');
    localStorage.setItem('user', '');
    localStorage.setItem('welcome', '');
  }
}
