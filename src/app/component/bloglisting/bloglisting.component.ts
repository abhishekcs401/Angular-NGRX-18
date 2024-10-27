import { openpopup } from './../../Store/Associate/Associate.Action';
import { BlogModel, Blogs } from './../../Store/Model/Blog.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getblog } from '../../Store/Blog/Blog.Selectors';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AddblogComponent } from '../addblog/addblog.component';
import { MaterialModule } from '../../Material.Module';
import { deleteblog } from '../../Store/Blog/Blog.Actions';

@Component({
  selector: 'app-bloglisting',
  standalone: true,
  imports: [CommonModule,MaterialModule],
  templateUrl: './bloglisting.component.html',
  styleUrl: './bloglisting.component.css'
})
export class BloglistingComponent implements OnInit{

  constructor(private store: Store<{ blog: BlogModel }>,private dialog:MatDialog) { }
   bloglist !: BlogModel[];
  bloginfo !: Blogs;

  ngOnInit(): void {
    this.store.select(getblog).subscribe(item => {
      this.bloglist = item;

      console.log('test', this.bloglist)
    })
  }

  AddBlog() {
    this.OpenPopup(0,'Add Blog')
  }

  OpenPopup(id: any, title: any, isedit = false) {
    this.dialog.open(AddblogComponent, {
      width: '40%',
      data: {
        id: id,
        title: title,
        isedit: isedit
      }
    })
  }
  EditBlog(id: number) {
  this.OpenPopup(id, 'Edit Blog', true);
  }
  RemoveBlog(id: any) {
    if (confirm("Are you sure want to remove?")) {
     // this.store.dispatch(loadspinner({ isloaded: true }));
      setTimeout(() => {
        this.store.dispatch(deleteblog({ id: id }));

      }, 2000);

    }
  }

}
