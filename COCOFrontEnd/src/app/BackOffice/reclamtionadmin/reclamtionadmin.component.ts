import { Component } from '@angular/core';
import {Claims} from "../../model/Claims";
import {TypeClaim} from "../../model/TypeClaim";
import {ClaimsService} from "../../Service/ClaimsService";

@Component({
  selector: 'app-reclamtionadmin',
  templateUrl: './reclamtionadmin.component.html',
  styleUrls: ['./reclamtionadmin.component.css']
})
export class ReclamtionadminComponent {
  constructor(private ClaimsService: ClaimsService){}
  allReclamation: Claims[] = [];
  percentage!:Map<string, number>;
   claimTypes = ['Post', 'CARPOLING', 'COLLOCATION', 'Other'];
   percentageMap = new Map();
   pageSize = 3; // Nombre d'éléments par page
  totalItems = 0; // Nombre total d'éléments
  currentPage = 0; //
  ngOnInit(): void {
    this.getClaims();
      this.ClaimsService.calculateClaimPercentage().subscribe((dat) => {
        // @ts-ignore
        this.percentage = dat; 
        this.percentageMap= this.fillMissingPercentages(this.percentage);
       
      });
   
  }
  search(event: any): void {
    const query = event.target.value; // Obtenez la valeur du champ de recherche
    if (!query) {
      this.getClaims(); // Si la recherche est vide, afficher toutes les réclamations
      return;
    }
  
    // Filtrer les réclamations basées sur le titre, le nom du client, la description, etc.
    this.allReclamation = this.allReclamation.filter(claim =>
      claim.title.toLowerCase().includes(query.toLowerCase()) ||
      claim.user.username.toLowerCase().includes(query.toLowerCase()) ||
      claim.description.toLowerCase().includes(query.toLowerCase()) ||
      claim.typeClaim.toLowerCase().includes(query.toLowerCase()) ||
      claim.statusClaims.toLowerCase().includes(query.toLowerCase())
    );
  }
  
  getClaims(): void {
    this.ClaimsService.getClaims(this.currentPage, this.pageSize)
      .subscribe((data: any) => { 
        this.allReclamation = data.content; 
        this.totalItems = data.totalElements; 
      });
  }
  onPageChange(page: number): void {
    this.currentPage = page;
    this.getClaims();
  }
  
  toggleDropdown(claim: Claims): void {
    claim.isDropdownOpen = !claim.isDropdownOpen;
  }
statusclaim(id:number,status:string){
  this.ClaimsService.statusClaims(id,status).subscribe(
    response => {
        location.reload();
    },
    error => {
        console.error('Erreur  :', error);
    }
);
}
  closeDropdown(claim: Claims): void {
    claim.isDropdownOpen = false;
  }
   fillMissingPercentages(percentage: Map<string, number>): Map<string, number> {
    const filledPercentage = new Map<string, number>();
    const percentageMap = new Map(Object.entries(percentage));
    this.claimTypes.forEach(type => {
        filledPercentage.set(type, percentageMap.get(type) || 0);
    });
    return filledPercentage;
}
}
