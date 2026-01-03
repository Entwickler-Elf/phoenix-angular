import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterListComponent } from './encounter-list.component';

describe('EncounterList', () => {
  let component: EncounterListComponent;
  let fixture: ComponentFixture<EncounterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncounterListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncounterListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
