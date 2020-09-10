1. AFTER SETTING THE ANGULAR 10 PROJECT, YOU NEED TO RUN BELOW COMMANDS FOR ADD SMART TABLE FEATURE INTO YOUR ANGULAR 10 APPLICATION:
npm install --save ng2-smart-table
npm i @akveo/ng2-completer --save

2. HERE IS THE CODE, YOU NEED TO ADD INTO YOUR APP.MODULE.TS FILE:
...
import { Ng2SmartTableModule } from 'ng2-smart-table';
...
// ...
@NgModule({
  imports: [
    // ...
    
    Ng2SmartTableModule,
    
    // ...
  ],
  declarations: [ ... ]
})
// ...

3. HERE IS THE CODE, YOU NEED TO ADD YOUR APP.COMPONENT.TS FILE:
...
export class AppComponent { settings = {
  columns: {
    id: {
      title: 'ID'
    },
    name: {
      title: 'Full Name'
    },
    username: {
      title: 'User Name'
    },
    email: {
      title: 'Email'
    }
  }
};
data = [
  {
    id: 1,
    name: "test Graham",
    username: "Bret",
    email: "test@april.com"
  },
  {
    id: 2,
    name: "test Howell",
    username: "test",
    email: "test@gmail.tv"
  },
  {
    id: 11,
    name: "testDuBuque",
    username: "test.Stanton",
    email: "test@test.biz"
  }
]; }
...

4.HERE IS CODE, YOU NEED TO ADD INTO YOUR APP.COMPONENT.HTML FILE:
<ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
