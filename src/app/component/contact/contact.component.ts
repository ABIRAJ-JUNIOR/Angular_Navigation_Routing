import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  contactId: string | null = null;
  constructor(private route: ActivatedRoute) {}

  
 ngOnInit(): void {
  this.contactId = this.route.snapshot.paramMap.get("id")
 }
}
