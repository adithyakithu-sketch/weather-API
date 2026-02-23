import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

interface WeatherData {
  name: string;
  sys: { country: string; sunrise: number; sunset: number; };
  main: { temp: number; feels_like: number; humidity: number; pressure: number; temp_min: number; temp_max: number; };
  weather: { main: string; description: string; icon: string; }[];
  wind: { speed: number; deg: number; };
  visibility: number;
}

interface ForecastItem {
  dt_txt: string;
  main: { temp: number; temp_min: number; temp_max: number; humidity: number; };
  weather: { main: string; description: string; icon: string; }[];
}

interface ForecastData {
  list: ForecastItem[];
}

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './weather.html',
  styleUrls: ['./weather.css']
})
export class Weather {
  city = '';
  weather: WeatherData | null = null;
  forecast: ForecastItem[] = [];
  loading = false;
  error: string | null = null;
  searched = false;

  private readonly apiKey = '64bc0cf0f17aa2f2efeefeef27271b4c';
  private readonly baseUrl = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) {}

  search(): void {
    if (!this.city.trim()) return;
    this.loading = true;
    this.error = null;
    this.weather = null;
    this.forecast = [];
    this.searched = true;

    this.http.get<WeatherData>(
      `${this.baseUrl}/weather?q=${this.city}&appid=${this.apiKey}&units=metric`
    ).pipe(
      catchError(() => {
        this.error = 'City not found. Please try another city name.';
        this.loading = false;
        return of(null);
      })
    ).subscribe(data => {
      if (data) {
        this.weather = data;
        this.fetchForecast();
      }
    });
  }

  fetchForecast(): void {
    this.http.get<ForecastData>(
      `${this.baseUrl}/forecast?q=${this.city}&appid=${this.apiKey}&units=metric`
    ).pipe(
      catchError(() => of(null))
    ).subscribe(data => {
      if (data) {
        this.forecast = data.list.filter((_: ForecastItem, i: number) => i % 8 === 0).slice(0, 5);
      }
      this.loading = false;
    });
  }

  getIconUrl(icon: string): string {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
  }

  formatTime(unix: number): string {
    return new Date(unix * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  formatDay(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });
  }

  getWindDirection(deg: number): string {
    const dirs = ['N','NE','E','SE','S','SW','W','NW'];
    return dirs[Math.round(deg / 45) % 8];
  }

  getBgClass(main: string): string {
    const map: Record<string, string> = {
      Clear: 'bg-clear', Clouds: 'bg-clouds', Rain: 'bg-rain',
      Drizzle: 'bg-rain', Thunderstorm: 'bg-thunder', Snow: 'bg-snow',
      Mist: 'bg-mist', Fog: 'bg-mist', Haze: 'bg-mist'
    };
    return map[main] || 'bg-default';
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter') this.search();
  }
}