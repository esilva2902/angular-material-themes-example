import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'amte-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material-themes-example';
  theme: string = 'my-theme';

  constructor(private overlayContainer: OverlayContainer) {
    this.overlayContainer.getContainerElement().classList.add(this.theme);
  }

  onThemeChange() {
    this.overlayContainer.getContainerElement().classList.add(this.theme);
  }

}
