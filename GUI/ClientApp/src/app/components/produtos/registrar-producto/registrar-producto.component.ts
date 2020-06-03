import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Producto } from '../../models/Producto';
import { ProductoService } from '../../../services/producto.service';
import Swal from 'sweetalert2';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.css']
})
export class RegistrarProductoComponent implements OnInit {

  grupo: FormGroup;
  producto: Producto;
  constructor( private fb: FormBuilder,
               private productoService: ProductoService) {
    this.crearFormulario();
   }

  ngOnInit() {
  }

  get nombreNoValido() {
    return this.grupo.get('nombre').invalid && this.grupo.get('nombre').touched;
  }
  get idNoValido() {
    return this.grupo.get('id').invalid && this.grupo.get('id').touched;
  }
  get proveedorNoValido() {
    return this.grupo.get('proveedor').invalid && this.grupo.get('proveedor').touched;
  }
  get precioNoValido() {
    return this.grupo.get('precio').invalid && this.grupo.get('precio').touched;
  }
  get descripcionNoValido() {
    return this.grupo.get('descripcion').invalid && this.grupo.get('descripcion').touched;
  }

  crearFormulario() {
    this.grupo = this.fb.group({
      id         : ['', [Validators.required, Validators.maxLength(3)]],
      nombre     : ['', Validators.required],
      proveedor   : ['', Validators.required],
      precio     : ['', Validators.required],
      descripcion: ['', Validators.required],
      presentacion: ['']
    });
  }

  guardarProducto() {
    if (this.grupo.valid) {
      this.producto = this.grupo.value;
      this.productoService.post(this.producto).subscribe( p => {
        if (p != null) {
          Swal.fire({
            title: 'Registrado correctamente',
            icon: 'success'
          });
        } else {
          p = this.producto;
          Swal.fire({
            icon: 'error',
            title: 'Error al registrar',
            text: 'No se pudo completar la operacion'
          });
        }
      });
    }
  }

}
