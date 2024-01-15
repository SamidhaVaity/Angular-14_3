import { Routes } from '@angular/router';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';

export const routes: Routes = [
    {path:'Technologies',component:Demo1Component},
    {path:'Books', component:Demo2Component},
    {path:'',component:Demo3Component},
    {path:'**',component:Demo4Component}
];
