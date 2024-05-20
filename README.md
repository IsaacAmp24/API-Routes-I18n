# Nursing

## Pasos para desarrollar el proyecto

1. Instalar AngularMaterial
```bash
ng add @angular/material
```
2. Añadir internazionalización
```bash
npm install @ngx-translate/core @ngx-translate/http-loader
```
3. Crear una carpeta "i18n" y crear los archivos "en.json" y "es.json"
* src
  * assets
    * i18n
      * en.json
      * es.json

4. Ir al archivo "app.module.ts" y añadir el siguiente código
```typescript
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
```

5. Despues, en la seccion de imports añadir el siguiente código
```typescript
imports: [
  HttpClientModule,
  // para cambiar el idioma
  TranslateModule.forRoot({
    defaultLanguage: 'en',
    loader: {
      provide: TranslateLoader,
      useFactory: createTranslateLoader,
      deps: [HttpClient]
    }
  }),
  // otras importaciones
]
```

6. Creamos un componente para el switch de idiomas
```bash
ng generate c public/components/language-switch
```

7. en el archivo "language-switch.component.ts" añadir el siguiente código
```typescript
import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-switch-language',
  templateUrl: './switch-language.component.html',
  styleUrl: './switch-language.component.css'
})
export class SwitchLanguageComponent {

  constructor(private translateService: TranslateService) { }

  changeLanguage(language: string) {
    this.translateService.use(language);
  }

  protected readonly toolbar = toolbar;
}
```

8. En el archivo app.component.html añadir el siguiente código al final para las rutas
```html
<router-outlet></router-outlet>
```

9. Crear la carpeta server en la carpeta raiz del proyecto y colocar el json que tendran los datos
- MiProyecto
  - .angular
  - .vscode
  - node_modules
  - server
    -  db.json
  - src

10. Luego, para ejecutar en localhost el servidor json, realizar el siguiente comando
```bash
cd server
json-server --watch db.json
```

- Con esto te mostraria la url donde se encuentra el servidor, por lo general es http://localhost:3000


```
Felicitaciones, haz aprendido a importar internazionalización en tu proyecto de Angular
```
