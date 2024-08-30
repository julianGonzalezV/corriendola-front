import { Component } from '@angular/core';
import { NavBarComponent } from './component/common/nav-bar/nav-bar.component';
import { FooterComponent } from './component/common/footer/footer.component';
import { BodyComponent } from './component/common/body/body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavBarComponent, BodyComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'the-recipes';
}
