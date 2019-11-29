import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";


import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { reducers, metaReducers } from "./shared";
import { effects } from "./effects";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}