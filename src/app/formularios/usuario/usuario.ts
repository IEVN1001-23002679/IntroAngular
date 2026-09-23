import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: false,
  styleUrl: './usuario.css',
  templateUrl: './usuario.html',
})
export class Usuario {
  usuarioCorrecto: string = 'admin'; 
  contrasenaCorrecta: string = '12345'; 
  usuario: string = ''; contrasena: string = ''; 
  mensaje: string = ''; validar(): void { 
    
    if (this.usuario !== this.usuarioCorrecto) 
    { this.mensaje = 'El nombre de usuario no es válido.'; } 
    
    else if (this.contrasena !== this.contrasenaCorrecta) 
      { this.mensaje = 'la contraseña no es válida'; } 
    
    else { this.mensaje = 'bienvenido al sistema, ' + this.usuario + '.'; 

    } }



}
