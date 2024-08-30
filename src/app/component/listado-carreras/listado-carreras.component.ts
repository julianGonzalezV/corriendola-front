import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarreraService } from '../../service/carrera.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { Carrera } from '../../model/carrera';

@Component({
  selector: 'app-listado-carreras',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, AsyncPipe,],
  providers: [CarreraService],
  templateUrl: './listado-carreras.component.html',
  styleUrl: './listado-carreras.component.css'
})
export class ListadoCarrerasComponent implements OnInit {
  carreras$!: Observable<Carrera[]>;

  searchForm:any;

  constructor(private carreraService: CarreraService,
    private formBuilder: FormBuilder){}

  ngOnInit(){
    this.loadAll();
    this.searchFormSetup();
  }

  private searchFormSetup(){
    this.searchForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  private loadAll(){
    this.carreras$ = this.carreraService.getAllRecipes();
  }

  loadByName(){
    if(this.searchForm?.valid){
      console.warn('Your recipe has been submitted', this.searchForm.value.name);
      console.warn(this.searchForm.value);
      console.warn(this.searchForm.value.name);
      this.carreras$ = this.carreraService.getAllByName(this.searchForm.value.name);
    }else{
      this.loadAll();
    }    
  }

}
