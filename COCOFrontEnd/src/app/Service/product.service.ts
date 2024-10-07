import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api'; // L'URL de base de votre backend

  constructor(private httpClient: HttpClient) { }

  addProduct(productData: FormData){

        // Utilisez les en-têtes définis pour l'envoi de données
    return this.httpClient.post<Product>(`${this.baseUrl}/addd`,productData);
  }
  public getProductById(pid:number){
    return this.httpClient.get<Product>("http://localhost:8080/api/"+pid)
  }
  public getAllProduct(pageNumber:any){
    return this.httpClient.get<Product[]>(this.baseUrl + "/getall?pageNumber="+pageNumber)
  }



  searchProducts(searchTerm: any): Observable<Product[]> {
    // Convertir l'objet searchTerm en chaîne de requête pour l'URL
    let queryString = Object.keys(searchTerm)
      .filter(key => searchTerm[key]) // Exclure les clés vides ou nulles
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(searchTerm[key]))
      .join('&');

    // Exécuter la requête HTTP GET avec la chaîne de requête
    return this.httpClient.get<Product[]>(`${this.baseUrl}?${queryString}`);
  }
  public deleteProduct(id:number){
   return this.httpClient.delete("http://localhost:8080/api"+"/delete/"+id);
    }

}

