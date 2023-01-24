import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMovieListComponent } from './user-movie-list.component';

describe('UserMovieListComponent', () => {
  let component: UserMovieListComponent;
  let fixture: ComponentFixture<UserMovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMovieListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
