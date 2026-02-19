import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoProducto } from './tipo-producto';

describe('TipoProducto', () => {
  let component: TipoProducto;
  let fixture: ComponentFixture<TipoProducto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoProducto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoProducto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
