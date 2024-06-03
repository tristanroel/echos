import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExtraService {

  constructor() { }

  extractIdFromUrl(url: string): string | null {
    const regex = /\/d\/([^/]+)\//; // Expression régulière pour extraire l'ID entre /d/ et /
    const match = url.match(regex); // Recherche du motif dans la chaîne
    if (match && match[1]) {
      return "https://lh3.googleusercontent.com/d/" + match[1]; // Retourne la première capture du motif trouvé
    } else {
      return null; // Retourne null si aucun motif n'a été trouvé
    }
  }
}
