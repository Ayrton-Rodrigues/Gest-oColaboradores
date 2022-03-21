import { Component, OnInit, Input } from '@angular/core';
import { taskList } from '../model/taskList.model';

@Component({
  selector: 'app-colaborator',
  templateUrl: './colaborator.component.html',
  styleUrls: ['./colaborator.component.scss']
})
export class ColaboratorComponent implements OnInit {


  @Input() colaborator?: taskList
  
  
  
  deleteColaborator(){
    alert(`${this.colaborator?.nome}, foi excluído com sucesso.`)
  }

  textButton = 'Disponível'

  tradeClass = false
  trade = document.getElementById('trade')
  
  eventTrade(){ 
    console.log(this.tradeClass = !this.tradeClass)
    if(this.tradeClass === true){
      this.textButton = 'Indisponível'
    }else {
      this.textButton = 'Solicitar'
    }
  }

  

  
  
  constructor() { }


  ngOnInit(): void {
  }

}
