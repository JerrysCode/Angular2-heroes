import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

//启动应用，通知Angular2框架将AppModule组件渲染到DOM树上。
platformBrowserDynamic().bootstrapModule(AppModule);
