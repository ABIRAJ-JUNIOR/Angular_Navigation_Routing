import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Navigation_Routing';

  constructor(private router:Router){

  }

  GoToAbout(){
    this.router.navigate(['/about']);
  }
  GoToContact(){
    this.router.navigate(['/contact' , 4589216546]);
  }

}
