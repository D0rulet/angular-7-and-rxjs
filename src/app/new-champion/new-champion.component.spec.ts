import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChampionComponent } from './new-champion.component';

describe('NewChampionComponent', () => {
  let component: NewChampionComponent;
  let fixture: ComponentFixture<NewChampionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewChampionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewChampionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
