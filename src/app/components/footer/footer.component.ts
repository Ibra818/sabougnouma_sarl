import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  newsletterEmail = '';
  showBackToTop = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.showBackToTop = window.pageYOffset > 300;
  }

  onNewsletterSubmit() {
    if (this.newsletterEmail) {
      console.log('Newsletter subscription:', this.newsletterEmail);
      alert('Merci pour votre abonnement à notre newsletter !');
      this.newsletterEmail = '';
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}