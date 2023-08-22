import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginPageComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private authService: AuthService,private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  loginProcess(): void {
    if (this.formGroup.valid) {
      const loginData = this.formGroup.value;
      this.authService.login(loginData).subscribe(
        result => {
          if (result.success) {
            this.router.navigate(['/home']); 
          } else {
            console.log(result, "Login failed");
            alert(result.message);
          }
        },
        error => {
          console.error("An error occurred:", error);
          alert("An error occurred. Please try again later.");
        }
      );
    }
  }
}
