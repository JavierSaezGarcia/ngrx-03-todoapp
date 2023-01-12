
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{

  @Input() todo: Todo;
  @ViewChild('inputFisico') txtInputFisico: ElementRef;

  // elementos HTML
  checkCompletado: FormControl;
  txtInput: FormControl;

  editando: boolean = false;

  constructor( private store: Store<AppState>) {  }

  ngOnInit(): void {
    // this.todo = {...this.todo}
    // this.todo.completado = true;
    this.checkCompletado = new FormControl( this.todo.completado );
    this.txtInput = new FormControl( this.todo.texto, Validators.required );
    this.checkCompletado.valueChanges.subscribe( () => {
        
      this.store.dispatch( actions.toggle({ id: this.todo.id }))
        
    })
    
  }

  editar(){   
      
      this.editando = true;    
      setTimeout(() => {
        this.txtInputFisico.nativeElement.focus();
      }, 1 );
    
  }
  terminarEdicion() {
    
      
      this.editando = false;
    
  }
  

}
