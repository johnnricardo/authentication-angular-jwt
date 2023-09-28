import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {
  
  public msgError!: string

  public formAuth: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required]],
  })

  constructor (
    private formBuilder: FormBuilder,
    private authServices: AuthService
    ) {}

  public submitForm() {
    if(this.formAuth.valid){
      this.authServices.signIn({
        email: this.formAuth.value.email,
        password: this.formAuth.value.senha 
      }).subscribe({
        next: (res) => res,
        error: (error: string) => {this.msgError = error}
      })
    }
  }

}
