import { Component, OnInit } from '@angular/core';
import { taskList } from '../model/taskList.model';

@Component({
  selector: 'app-list-colaborator',
  templateUrl: './list-colaborator.component.html',
  styleUrls: ['./list-colaborator.component.scss'],
})
export class ListColaboratorComponent implements OnInit {
  
  colaboradores: Array<taskList> = [
    { id: 1, nome: 'Nathan Carlos', salario: 7000, cargo: 'Dev Pl' },
    { id: 2, nome: 'David Carlos', salario: 3000, cargo: 'Dev Jr' },
    { id: 3, nome: 'Mateus Augusto', salario: 3500, cargo: 'Dev Jr' },
    { id: 4, nome: 'Alberto Silva', salario: 10000, cargo: 'Dev Sr' },
    { id: 5, nome: 'Rogerio Souza', salario: 9000, cargo: 'Dev Sr' },
    { id: 6, nome: 'Gabriel Miguel', salario: 9500, cargo: 'Dev Sr' },
    { id: 7, nome: 'Alan Jhonnes', salario: 11000, cargo: 'Arquiteto' }, { id: 8, nome: 'Alan Montes', salario: 12000, cargo: 'Arquivista' },
    { id: 9, nome: 'Jhonnes', salario: 1000, cargo: 'Estagiário' },
  ];


  searchColaborators = this.colaboradores
  search = false


  searchColaborator(event: any){
    const listSearch = event.target.value
    console.log(listSearch)
    if(listSearch != null){
      this.searchColaborators = this.colaboradores.filter((item) => item.nome.toUpperCase().search(listSearch.toUpperCase()) > -1)
      console.log(this.searchColaborators)
      if(this.searchColaborators.length === 0){
        this.search = true
      }else {
        this.search = false
      }
    }
    return this.searchColaborators
  }





  constructor() {}

  ngOnInit(): void {}
}
