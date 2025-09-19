import { Component, OnInit } from '@angular/core';

interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  description: string;
  category: string;
  visible: boolean;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  
  activeFilter = 'all';
  isLoading = false;
  hasMoreImages = false;
  lightboxActive = false;
  currentImage: GalleryItem | null = null;
  currentImageIndex = 0;

  galleryItems: GalleryItem[] = [
    // Nettoyage - toutes les images
    {
      src: 'assets/netoyage.JPG',
      alt: 'Service de nettoyage professionnel',
      title: 'Nettoyage Professionnel',
      description: 'Services de nettoyage complets pour bureaux et institutions',
      category: 'nettoyage',
      visible: true
    },
    {
      src: 'assets/netoyage2.JPG',
      alt: 'Nettoyage de bureaux',
      title: 'Nettoyage de Bureaux',
      description: 'Entretien régulier d\'espaces de travail',
      category: 'nettoyage',
      visible: true
    },
    {
      src: 'assets/netoyage3.JPG',
      alt: 'Nettoyage industriel',
      title: 'Nettoyage Industriel',
      description: 'Solutions adaptées aux environnements industriels',
      category: 'nettoyage',
      visible: true
    },
    {
      src: 'assets/netoyage4.JPG',
      alt: 'Équipements de nettoyage',
      title: 'Équipements Modernes',
      description: 'Matériel professionnel de dernière génération',
      category: 'nettoyage',
      visible: true
    },
    {
      src: 'assets/netoyage5.JPG',
      alt: 'Nettoyage spécialisé',
      title: 'Nettoyage Spécialisé',
      description: 'Services adaptés aux besoins spécifiques',
      category: 'nettoyage',
      visible: true
    },
    {
      src: 'assets/netoyage6.JPG',
      alt: 'Équipe de nettoyage',
      title: 'Équipe Professionnelle',
      description: 'Personnel qualifié et expérimenté',
      category: 'nettoyage',
      visible: true
    },
    {
      src: 'assets/netoyage7.JPG',
      alt: 'Nettoyage événementiel',
      title: 'Nettoyage Événementiel',
      description: 'Services pour événements et manifestations',
      category: 'nettoyage',
      visible: true
    },
    {
      src: 'assets/netoyage8.JPG',
      alt: 'Maintenance et entretien',
      title: 'Maintenance Préventive',
      description: 'Entretien régulier et maintenance',
      category: 'nettoyage',
      visible: true
    },
    {
      src: 'assets/netoyage9.JPG',
      alt: 'Nettoyage écologique',
      title: 'Solutions Écologiques',
      description: 'Produits respectueux de l\'environnement',
      category: 'nettoyage',
      visible: true
    },
    
    // Versions PNG des images de nettoyage
    {
      src: 'assets/netoyage.PNG',
      alt: 'Nettoyage professionnel PNG',
      title: 'Services Professionnels',
      description: 'Qualité et efficacité garanties',
      category: 'nettoyage',
      visible: true
    },
    {
      src: 'assets/netoyage2.PNG',
      alt: 'Nettoyage bureaux PNG',
      title: 'Espaces de Travail',
      description: 'Environnements propres et sains',
      category: 'nettoyage',
      visible: true
    },
    {
      src: 'assets/netoyage3.PNG',
      alt: 'Nettoyage industriel PNG',
      title: 'Secteur Industriel',
      description: 'Solutions pour l\'industrie',
      category: 'nettoyage',
      visible: true
    },
    {
      src: 'assets/netoyage4.PNG',
      alt: 'Matériel de nettoyage PNG',
      title: 'Équipements Avancés',
      description: 'Technologies de pointe',
      category: 'nettoyage',
      visible: true
    },
    {
      src: 'assets/netoyage5.PNG',
      alt: 'Services spécialisés PNG',
      title: 'Services Spécialisés',
      description: 'Expertise technique approfondie',
      category: 'nettoyage',
      visible: true
    },
    {
      src: 'assets/netoyage6.PNG',
      alt: 'Équipe experte PNG',
      title: 'Équipe Experte',
      description: 'Professionnels formés et certifiés',
      category: 'nettoyage',
      visible: true
    },
    {
      src: 'assets/netoyage7.PNG',
      alt: 'Nettoyage événements PNG',
      title: 'Événements Spéciaux',
      description: 'Support pour tous vos événements',
      category: 'nettoyage',
      visible: true
    },
    {
      src: 'assets/netoyage8.PNG',
      alt: 'Maintenance PNG',
      title: 'Maintenance Continue',
      description: 'Suivi et entretien régulier',
      category: 'nettoyage',
      visible: true
    },
    
    // Décoration - toutes les images
    {
      src: 'assets/decoration.JPG',
      alt: 'Décoration événementielle',
      title: 'Décoration Événementielle',
      description: 'Créations artistiques pour vos événements',
      category: 'decoration',
      visible: true
    },
    {
      src: 'assets/decoration2.JPG',
      alt: 'Décoration de mariage',
      title: 'Décoration Mariage',
      description: 'Ambiances romantiques et élégantes',
      category: 'decoration',
      visible: true
    },
    {
      src: 'assets/decoration3.JPG',
      alt: 'Décoration de conférence',
      title: 'Événements Corporate',
      description: 'Décoration professionnelle pour entreprises',
      category: 'decoration',
      visible: true
    },
    {
      src: 'assets/decoration4.JPG',
      alt: 'Décoration florale',
      title: 'Arrangements Floraux',
      description: 'Créations florales sur mesure',
      category: 'decoration',
      visible: true
    },
    {
      src: 'assets/decoration5.JPG',
      alt: 'Décoration festive',
      title: 'Décoration Festive',
      description: 'Ambiances chaleureuses et conviviales',
      category: 'decoration',
      visible: true
    },
    {
      src: 'assets/decoration6.JPG',
      alt: 'Décoration élégante',
      title: 'Décoration Élégante',
      description: 'Style raffiné et sophistiqué',
      category: 'decoration',
      visible: true
    },
    
    // Versions PNG des images de décoration
    {
      src: 'assets/decoration.PNG',
      alt: 'Décoration événementielle PNG',
      title: 'Créations Artistiques',
      description: 'Designs uniques et personnalisés',
      category: 'decoration',
      visible: true
    },
    {
      src: 'assets/decoration2.PNG',
      alt: 'Décoration mariage PNG',
      title: 'Mariages de Rêve',
      description: 'Moments magiques et inoubliables',
      category: 'decoration',
      visible: true
    },
    {
      src: 'assets/decoration3.PNG',
      alt: 'Décoration corporate PNG',
      title: 'Événements d\'Entreprise',
      description: 'Image professionnelle et moderne',
      category: 'decoration',
      visible: true
    },
    {
      src: 'assets/decoration4.PNG',
      alt: 'Arrangements floraux PNG',
      title: 'Art Floral',
      description: 'Compositions florales exceptionnelles',
      category: 'decoration',
      visible: true
    },
    {
      src: 'assets/decoration5.PNG',
      alt: 'Décoration festive PNG',
      title: 'Ambiances Festives',
      description: 'Créer la joie et la convivialité',
      category: 'decoration',
      visible: true
    },
    {
      src: 'assets/decoration6.PNG',
      alt: 'Style élégant PNG',
      title: 'Élégance Raffinée',
      description: 'Sophistication et bon goût',
      category: 'decoration',
      visible: true
    },
    
    // Restauration - toutes les images
    {
      src: 'assets/restauration.JPG',
      alt: 'Service traiteur',
      title: 'Service Traiteur',
      description: 'Cuisine raffinée pour vos événements',
      category: 'restauration',
      visible: true
    },
    {
      src: 'assets/restauration2.JPG',
      alt: 'Buffet événementiel',
      title: 'Buffets Événementiels',
      description: 'Présentations gastronomiques élégantes',
      category: 'restauration',
      visible: true
    },
    {
      src: 'assets/restauration3.JPG',
      alt: 'Service à table',
      title: 'Service à Table',
      description: 'Service personnalisé et professionnel',
      category: 'restauration',
      visible: true
    },
    {
      src: 'assets/restauration4.JPG',
      alt: 'Cuisine traditionnelle',
      title: 'Cuisine Traditionnelle',
      description: 'Saveurs authentiques du Mali',
      category: 'restauration',
      visible: true
    },
    {
      src: 'assets/restauration5.JPG',
      alt: 'Gastronomie locale',
      title: 'Gastronomie Locale',
      description: 'Spécialités culinaires du Mali',
      category: 'restauration',
      visible: true
    },
    {
      src: 'assets/restauration6.PNG',
      alt: 'Présentation culinaire',
      title: 'Art Culinaire',
      description: 'Présentation soignée et créative',
      category: 'restauration',
      visible: true
    },
    {
      src: 'assets/reatauration.JPG',
      alt: 'Service de restauration',
      title: 'Service Restauration',
      description: 'Excellence dans la restauration',
      category: 'restauration',
      visible: true
    },
    
    // Versions PNG des images de restauration
    {
      src: 'assets/restauration.PNG',
      alt: 'Service traiteur PNG',
      title: 'Traiteur Premium',
      description: 'Service haut de gamme',
      category: 'restauration',
      visible: true
    },
    {
      src: 'assets/restauration2.PNG',
      alt: 'Buffet événementiel PNG',
      title: 'Buffets d\'Exception',
      description: 'Présentations spectaculaires',
      category: 'restauration',
      visible: true
    },
    {
      src: 'assets/restauration3.PNG',
      alt: 'Service à table PNG',
      title: 'Service Personnalisé',
      description: 'Attention aux détails',
      category: 'restauration',
      visible: true
    },
    {
      src: 'assets/restauration4.PNG',
      alt: 'Cuisine traditionnelle PNG',
      title: 'Traditions Culinaires',
      description: 'Héritage gastronomique malien',
      category: 'restauration',
      visible: true
    },
    {
      src: 'assets/restauration5.PNG',
      alt: 'Gastronomie PNG',
      title: 'Excellence Gastronomique',
      description: 'Saveurs authentiques et modernes',
      category: 'restauration',
      visible: true
    },
    
    // Agrobusiness et images générales
    {
      src: 'assets/IMG_1834.JPG',
      alt: 'Projets agricoles',
      title: 'Projets Agricoles',
      description: 'Développement de l\'agriculture moderne',
      category: 'agrobusiness',
      visible: true
    },
    {
      src: 'assets/IMG_1836.JPG',
      alt: 'Installations modernes',
      title: 'Installations Modernes',
      description: 'Équipements et infrastructures',
      category: 'agrobusiness',
      visible: true
    },
    {
      src: 'assets/IMG_1839.JPG',
      alt: 'Projets agrobusiness',
      title: 'Projets Agro-pastoraux',
      description: 'Développement rural intégré',
      category: 'agrobusiness',
      visible: true
    },
    {
      src: 'assets/IMG_1840.JPG',
      alt: 'Élevage bovin',
      title: 'Élevage Moderne',
      description: 'Techniques d\'élevage innovantes',
      category: 'agrobusiness',
      visible: true
    },
    {
      src: 'assets/IMG_1848.JPG',
      alt: 'Agriculture moderne',
      title: 'Agriculture Durable',
      description: 'Pratiques agricoles respectueuses',
      category: 'agrobusiness',
      visible: true
    }
  ];

  filteredGallery: GalleryItem[] = [];
  displayedGallery: GalleryItem[] = [];
  itemsPerPage = 6; // 2 lignes de 3 images
  currentPage = 0;

  constructor() { }

  ngOnInit(): void {
    this.filteredGallery = [...this.galleryItems];
    this.updateDisplayedGallery();
  }

  updateDisplayedGallery() {
    const startIndex = 0;
    const endIndex = this.itemsPerPage * (this.currentPage + 1);
    this.displayedGallery = this.filteredGallery.slice(startIndex, endIndex);
    this.hasMoreImages = endIndex < this.filteredGallery.length;
  }

  filterGallery(category: string) {
    this.activeFilter = category;
    this.isLoading = true;
    this.currentPage = 0;
    
    // Simulate loading delay for smooth animation
    setTimeout(() => {
      if (category === 'all') {
        this.filteredGallery = [...this.galleryItems];
      } else {
        this.filteredGallery = this.galleryItems.filter(item => item.category === category);
      }
      
      this.updateDisplayedGallery();
      
      // Reset visibility for animation
      this.displayedGallery.forEach((item, index) => {
        setTimeout(() => {
          item.visible = true;
        }, index * 100);
      });
      
      this.isLoading = false;
    }, 300);
  }

  onImageLoad(index: number) {
    // Handle image load event if needed
  }

  loadMore() {
    this.isLoading = true;
    this.currentPage++;
    
    setTimeout(() => {
      this.updateDisplayedGallery();
      
      // Animate new images
      const newItemsStart = this.itemsPerPage * this.currentPage;
      const newItems = this.displayedGallery.slice(newItemsStart);
      
      newItems.forEach((item, index) => {
        setTimeout(() => {
          item.visible = true;
        }, index * 100);
      });
      
      this.isLoading = false;
    }, 500);
  }

  openLightbox(item: GalleryItem, index: number) {
    this.currentImage = item;
    this.currentImageIndex = index;
    this.lightboxActive = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxActive = false;
    this.currentImage = null;
    document.body.style.overflow = 'auto';
  }

  previousImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
      this.currentImage = this.filteredGallery[this.currentImageIndex];
    }
  }

  nextImage() {
    if (this.currentImageIndex < this.filteredGallery.length - 1) {
      this.currentImageIndex++;
      this.currentImage = this.filteredGallery[this.currentImageIndex];
    }
  }
}