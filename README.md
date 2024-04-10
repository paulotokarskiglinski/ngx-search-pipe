# NgxSearchPipe

Angular search pipe to filter a list of objects containing the search string.

Compatible with signals. 

**How to use?**

Import to your standalone component or app module:
```javascript
// app.component.ts
import { NgxSearchPipeModule } from 'ngx-search-pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    RouterOutlet, 
    NgxSearchPipeModule // <--
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }
```

```javascript
// app.module.ts
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { NgxSearchPipeModule } from 'ngx-search-pipe'; // <--

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxSearchPipeModule // <--
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

In your component just create a search `string` and pass it as a parameter to the pipe `ngxSearchPipe` into your `*ngFor`. It also supports nested objects! As you type, the list of objects will be automatically filtered:

Angular +17 syntax:
```html
<input type="text" [(ngModel)]="searchText">

<table>
  @for (item of items() | ngxSearchPipe:searchText(); track $index)  {
    <tr>
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.email }}</td>
      <td>{{ item.role.name }}</td>
    </tr>
  }
</table>
```

Older Angular versions:
```html
<input type="text" [(ngModel)]="searchText">

<table>
  <tr *ngFor="let item of items | ngxSearchPipe:searchText">
    <td>{{ item.id }}</td>
    <td>{{ item.name }}</td>
    <td>{{ item.email }}</td>
    <td>{{ item.role.name }}</td>
  </tr>
</table>
```