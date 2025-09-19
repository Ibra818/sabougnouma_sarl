import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailServiceService } from '../../email-service.service';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  isSubmitting = false;
  @ViewChild('contactForm') contact !: NgForm;
  
  formData: ContactFormData = {
    name: '',
    email: '',
    phone: '',
    service: '',
    subject: '',
    message: ''
  };

  constructor(private email: EmailServiceService) { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    console.log('formulare: ',this.contact.value);
    this.email.sendEmail(this.contact.value);
    
    // if (this.isSubmitting) return;
    
    // this.isSubmitting = true;
    
    // Simulate form submission
    // setTimeout(() => {
    //   console.log('Form submitted:', this.formData);
    //   alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
    //   this.resetForm();
    //   this.isSubmitting = false;
    // }, 2000);
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      service: '',
      subject: '',
      message: ''
    };
  }
}