import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  heroes: string[] = ['Spiderman', 'Hulk', 'Ironman', 'Thor'];
  deletedHero: string = '';

  deleteHero() {
    console.log('Deleting...');
    this.deletedHero = this.heroes.shift() || '';
  }
}
