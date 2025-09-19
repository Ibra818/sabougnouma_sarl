import { Component, OnInit } from '@angular/core';

interface PlaceholderPartner {
  title: string;
  description: string;
}

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  placeholderPartners: PlaceholderPartner[] = [
    {
      title: 'Banques & Finances',
      description: 'Institutions financières pour le développement de projets'
    },
    {
      title: 'ONG & Associations',
      description: 'Organisations pour l\'impact social et communautaire'
    },
    {
      title: 'Entreprises Privées',
      description: 'Partenaires commerciaux et industriels'
    },
    {
      title: 'Institutions Publiques',
      description: 'Administrations et organismes gouvernementaux'
    },
    {
      title: 'Centres de Formation',
      description: 'Établissements d\'enseignement et de recherche'
    },
    {
      title: 'Coopératives',
      description: 'Organisations agricoles et rurales'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}