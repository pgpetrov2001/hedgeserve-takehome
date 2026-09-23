import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageIcon } from './language-icon';

describe('LanguageIcon', () => {
  let component: LanguageIcon;
  let fixture: ComponentFixture<LanguageIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageIcon],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
