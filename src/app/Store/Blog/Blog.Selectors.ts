import { BlogModel, Blogs } from '../Model/Blog.model';
import { createFeatureSelector, createSelector } from "@ngrx/store";

const getblogstate = createFeatureSelector<Blogs>('blog');

export const getblog = createSelector(getblogstate, (state) => {
    return state.bloglist
})

export const getblogbyid =(blogid:number)=> createSelector(getblogstate, (state) => {
    return state.bloglist.find((blog: BlogModel)=> blog.id === blogid) as BlogModel
})