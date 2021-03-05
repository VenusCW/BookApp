import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingLibraryComponent } from './existing-library.component';

describe('ExistingLibraryComponent', () => {
  let component: ExistingLibraryComponent;
  let fixture: ComponentFixture<ExistingLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
