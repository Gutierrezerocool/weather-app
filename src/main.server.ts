import { provideServerRendering } from '@angular/platform-server';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';

export default function () {
  return bootstrapApplication(AppComponent, {
    providers: [
      provideHttpClient(),
      provideServerRendering()
    ]
  });
}
