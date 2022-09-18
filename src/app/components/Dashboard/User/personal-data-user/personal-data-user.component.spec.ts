import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDataUserComponent } from './personal-data-user.component';

describe('PersonalDataUserComponent', () => {
  let component: PersonalDataUserComponent;
  let fixture: ComponentFixture<PersonalDataUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDataUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalDataUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
