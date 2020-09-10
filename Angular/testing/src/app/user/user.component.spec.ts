import { async, ComponentFixture, TestBed , fakeAsync, tick} from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from "./user.service";
import { AnotherService } from "./user.anotherService";

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  }));

  

  it('should create', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('from service', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.componentInstance;
    let userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(userService.user.name).toEqual(app.user.name);
  });

  it('if user is logged in', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.componentInstance;
    app.isLoggedIn = true;
    fixture.detectChanges();
    let compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(app.user.name);
  });

  it('if user is not logged in', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.componentInstance;
    fixture.detectChanges();
    let compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).not.toContain(app.user.name);
  });

  it('should fetch data successfully if called asynchronously', fakeAsync(() => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(AnotherService);
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    tick();
    expect(app.data).toBe('Data');

  }));
});
