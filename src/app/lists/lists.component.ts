import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  theList: Array<string>= ['Jay Leno','Rihanna','Jeremy Clackson','Richard Hamond'];

  editText: boolean = false;
  listForm: FormGroup;
  items: FormArray;

  constructor(private formBuilder: FormBuilder) { 
    this.listForm = formBuilder.group({
      list: new FormControl(),
      items: this.formBuilder.array(this.theList)
    })
  }

  ngOnInit() {
    // this.patchItems();
  }

  createItem(): FormGroup{
    
    return this.formBuilder.group({
      j:this.formBuilder.array(this.theList)
    });

  }

  // patchItems(){
  //   this.items = this.listForm.get('items') as FormArray;
  //   this.items.setValue(this.theList);
  //   console.log(this.items);
  // }


  addItem(): void{
    this.items = this.listForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  removeItem(i): void{
    this.items.removeAt(i);
  }

  edit(){
    this.editText=true;
    return this.editText;
  }

  isDisabled(){
    this.editText = true;
    return this.editText;
  }

  update(){
    for(var i=0; i< this.items.length; i++){

    this.theList.push(this.listForm.value)
  
    }
    console.log(this.theList)

  }
  
  cancel(){
    this.items.reset()
  }
}
