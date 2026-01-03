import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterFormComponent } from './encounter-form.component';

describe('EncounterForm', () => {
  let component: EncounterFormComponent;
  let fixture: ComponentFixture<EncounterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncounterFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncounterFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
