import { Component } from '@angular/core';
import { Header } from "../header/header";
import { RouterOutlet } from '@angular/router';
import { Footer } from '../footer/footer';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-layout',
  imports: [Header, Sidebar, RouterOutlet, Footer],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
