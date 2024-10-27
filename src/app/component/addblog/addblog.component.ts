import { Component, Inject, OnInit } from '@angular/core';
import { MaterialModule } from '../../Material.Module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BlogModel, Blogs } from '../../Store/Model/Blog.model';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addblog, updateblog } from '../../Store/Blog/Blog.Actions';
import { getblogbyid } from '../../Store/Blog/Blog.Selectors';

@Component({
  selector: 'app-addblog',
  standalone: true,
  imports: [MaterialModule,ReactiveFormsModule],
  templateUrl: './addblog.component.html',
  styleUrl: './addblog.component.css'
})
export class AddblogComponent implements OnInit {

  pagetitle = '';
  editblogid = 0;
  editdata!: BlogModel;
  
  constructor(private dialogref: MatDialogRef<AddblogComponent>, private builder: FormBuilder, private store: Store<Blogs>
    , @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.pagetitle = this.data.title;
    if (this.data.isedit) {
      this.editblogid = this.data.id;
      this.store.select(getblogbyid(this.editblogid)).subscribe(_data => {
         this.editdata = _data;
         this.blogform.setValue({ id: this.editdata.id, title: this.editdata.title, description: this.editdata.description });
      });
    }
  }
  
  closepopup() {
    this.dialogref.close();
  }

  blogform = this.builder.group({
    id: this.builder.control(0),
    title: this.builder.control('', Validators.required),
    description: this.builder.control('', Validators.required)
  })

  SaveForm() {
    if(this.blogform.valid){
      const _bloginput: BlogModel = {
        id: 0,
        title: this.blogform.value.title as string,
       description:this.blogform.value.description as string
      }
      if (this.data.isedit) {
        _bloginput.id = this.blogform.value.id as number;
        this.store.dispatch(updateblog({ bloginput: _bloginput }))
      } else {
        this.store.dispatch(addblog({ bloginput: _bloginput }))
      }
      this.closepopup();
    }
  }
}
