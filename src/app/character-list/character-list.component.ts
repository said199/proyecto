// import { Component, OnInit } from '@angular/core';
// import { RickAndMortyService } from '../rick-and-morty.service';

// @Component({
//   selector: 'app-character-list',
//   templateUrl: './character-list.component.html',
//   styleUrls: ['./character-list.component.css'],
// })
// export class CharacterListComponent implements OnInit {
//   characters: any[] = [];

//   constructor(private rickAndMortyService: RickAndMortyService) {}

//   ngOnInit() {
//     this.rickAndMortyService.getCharacters().subscribe((data: any) => {
//       this.characters = data.results;
//     });
//   }
// }