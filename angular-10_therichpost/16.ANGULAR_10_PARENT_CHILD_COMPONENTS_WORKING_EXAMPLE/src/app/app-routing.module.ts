import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: 'parent', component: ParentComponent,
  children: [
    { path: 'child', component: ChildComponent }
  ]
}
];
