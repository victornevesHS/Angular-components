import { PromocaoService } from 'src/app/core/services/promocao.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor( private servicoPromocao: PromocaoService) {

}

  ngOnInit(): void {
    this.servicoPromocao.listar()
    .subscribe(
      reposta => {
          console.log(reposta)
      }
    )
  }

}
