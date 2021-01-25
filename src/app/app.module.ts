import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents} from './app-routing.module'

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule  } from '@covalent/core/steps';
/* any other core modules */
// (optional) Additional Covalent Modules imports
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';

import { MainComponent } from './main/main.component';


import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { PersonasComponent } from './personas/personas.component';
import { DataService } from './dataservice/data-service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    routedComponents,
    PersonasComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    CovalentBaseEchartsModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }