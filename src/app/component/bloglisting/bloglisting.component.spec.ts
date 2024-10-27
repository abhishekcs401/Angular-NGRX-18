import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloglistingComponent } from './bloglisting.component';

describe('BloglistingComponent', () => {
  let component: BloglistingComponent;
  let fixture: ComponentFixture<BloglistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloglistingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloglistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
