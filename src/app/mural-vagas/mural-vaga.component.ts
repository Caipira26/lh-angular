import { Component, OnInit } from '@angular/core';
import { Vagas } from '../models/Vagas.model';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-mural-vagas',
  templateUrl: './mural-vaga.component.html',
  styleUrls: ['./mural-vaga.component.css']
})
export class MuralVagasComponent implements OnInit {

  public vagas: Vagas[] = [];

  constructor(private _vagasService: VagasService) { }

  ngOnInit(): void {
    this.listarVagas();
  }

  listarVagas() {
    this._vagasService.getVagas()
      .subscribe(
        retornaVaga => {
          this.vagas = retornaVaga.map(
            item => {
              return new Vagas(
                item.id,
                item.nome,
                item.foto,
                item.descricao, 
                item.salario
              );
            }
          )
        }
      )
  }

}