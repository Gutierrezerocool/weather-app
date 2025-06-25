/**
 * The AppComponent is the main Angular component for the application.
 * - Uses the @Component decorator to define metadata such as selector, template, styles, and standalone status.
 * - Imports Angular's CommonModule and a custom WeatherService for fetching weather data.
 * 
 * Properties:
 * - weatherData: Holds the fetched weather information.
 * - loading: Boolean flag indicating if data is being loaded.
 * - error: Stores any error that occurs during data fetching.
 * 
 * The WeatherService is injected via the constructor using Angular's dependency injection.
 * 
 * In ngOnInit, the component fetches weather data by subscribing to WeatherService.getWeather().
 * - On success: Stores the data and sets loading to false.
 * - On error: Stores the error and sets loading to false.
 * 
 * This pattern allows the UI to react to loading and error states, which is common in Angular apps consuming async data.
 */
import { Component, OnInit } from '@angular/core'; // Import Angular core features
import { CommonModule } from '@angular/common';    // Import common Angular directives
import { WeatherService } from './services/weather.service'; // Import custom weather service

@Component({
  selector: 'app-root', // The selector used in HTML to reference this component
  standalone: true,     // Declares this as a standalone component
  imports: [CommonModule], // Imports CommonModule for common directives
  templateUrl: './app.component.html', // Path to the component's HTML template
  styleUrls: ['./app.component.css']   // Path to the component's CSS styles
})
export class AppComponent implements OnInit {
  weatherData: any;    // Property to store fetched weather data
  loading = true;      // Boolean flag to indicate loading state
  error: any;          // Property to store any error encountered

  constructor(private weatherService: WeatherService) {} // Inject WeatherService

  ngOnInit(): void { // Lifecycle hook called after component initialization
    this.weatherService.getWeather().subscribe({ // Subscribe to weather data Observable
      next: (data) => { // On successful data fetch
        this.weatherData = data; // Store the weather data
        this.loading = false;    // Set loading to false
      },
      error: (err) => { // On error during data fetch
        this.error = err;        // Store the error
        this.loading = false;    // Set loading to false
      }
    });
  }
}
