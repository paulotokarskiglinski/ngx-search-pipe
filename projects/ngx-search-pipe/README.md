# NgxSearchPipe

Angular search pipe to filter a list of objects containing the search string.

**How to use?**

Import to your module:
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
```html
<input type="text" [(ngModel)]="searchText">

<table>
  <tr *ngFor="let item of itens | ngxSearchPipe:searchText">
    <td>{{ item.id }}</td>
    <td>{{ item.name }}</td>
    <td>{{ item.email }}</td>
    <td>{{ item.role.name }}</td>
  </tr>
</table>
```