import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubRepo } from './github-repo';

describe('GithubRepo', () => {
  let component: GithubRepo;
  let fixture: ComponentFixture<GithubRepo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubRepo],
    }).compileComponents();

    fixture = TestBed.createComponent(GithubRepo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
