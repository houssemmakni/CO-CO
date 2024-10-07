import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamtionfrontComponent } from './reclamtionfront.component';

describe('ReclamtionfrontComponent', () => {
  let component: ReclamtionfrontComponent;
  let fixture: ComponentFixture<ReclamtionfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamtionfrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReclamtionfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
